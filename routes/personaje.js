const express = require('express');
const router = express.Router();

const Personaje = require('../models/Personaje');

//Devuelve lista de todos los personajes
router.get('/', async (req,res) => {
    try{
        const personajes = await Personaje.find();
        res.json(personajes);
    }
    catch(err){
        res.json({messaje:err});
    }
});

//Devuelve un personaje en especifico
router.get('/:idPersonaje', async (req,res) => {
    try{
        const personaje = await Personaje.findById(req.params.idPersonaje);
        res.json(personaje);
    }
    catch(err){
        res.json({messaje:err});
    }
});


//Subir un personaje
router.post('/', async (req,res) => {
    const personaje = new Personaje({
        name: req.body.name,
        gender: req.body.gender,
        age: req.body.age,
        species: req.body.age,
        occupation: req.body.occupation,
        isAlive: req.body.isAlive
    });

    try{
        const savedPersonaje = await personaje.save();
        res.json(savedPersonaje);
    }
    catch (err) {
        res.json({ message: err });
    }    
});


//Actualizar un personaje
router.put('/:idPersonaje', async (req,res) => {
    try{
        const personajeAct = await Personaje.updateOne(
            {_id : req.params.idPersonaje }, 
            {$set: { name: req.body.name }}
        );
        res.json(personajeAct);
    }
    catch(err){
        res.json({messaje:err});
    }
});


//Eliminar un personaje
router.delete('/:idPersonaje', async (req,res) => {
    try{
        const personajeElim = await Personaje.remove({ _id : req.params.idPersonaje })
        res.send("Personaje Eliminado!");
    }
    catch(err){
        res.json({messaje:err});
    }
});


module.exports = router;