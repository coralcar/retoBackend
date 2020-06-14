const express = require('express');
const router = express.Router();

const Character = require('../models/Character');

//Devuelve lista de todos los personajes
router.get('/', async (req,res) => {
    try{
        const characters = await Character.find();
        res.json(characters);
    }
    catch(err){
        res.json({messaje:err});
    }
});

//Devuelve un personaje en especifico
router.get('/:CharacterID', async (req,res) => {
    try{
        const character = await Character.findById(req.params.CharacterID);
        res.json(charater);
    }
    catch(err){
        res.json({messaje:err});
    }
});


//Crear un personaje
router.post('/', async (req,res) => {
    const character = new Character({
        _id: req.body._id,
        name: req.body.name,
        gender: req.body.gender,
        age: req.body.age,
        species: req.body.age,
        occupation: req.body.occupation,
        image: req.body.image,
        location: req.body.location,
        isAlive: req.body.isAlive
    });

    try{
        const savedCharacter = await character.save();
        res.json(savedCharacter);
    }
    catch (err) {
        res.json({ message: err });
    }    
});

//Actualizar todos los datos de un personaje a partir de su ID
router.put('/:CharacterID', async (req,res) => {
    try{
        const updatedChar = await Character.replaceOne(
            {_id : req.params.CharacterID }, 
            {   name: req.body.name,
                gender: req.body.gender,
                age: req.body.age,
                species: req.body.species,
                occupation: req.body.occupation,
                image: req.body.image,
                location: req.body.location,
                isAlive: req.body.isAlive }
        );
        res.json(updatedChar);
    }
    catch(err){
        res.json({messaje:err});
    }
});

//Actualizar un atributo (nombre) de personaje
router.patch('/:CharacterID', async (req,res) => {
    try{
        const updatedChar = await Character.updateOne(
            {_id : req.params.CharacterID }, 
            {$set: { name: req.body.name }}
        );
        res.json(updatedChar);
    }
    catch(err){
        res.json({messaje:err});
    }
});


//Eliminar un personaje
router.delete('/:CharacterID', async (req,res) => {
    try{
        const deletedChar = await Character.deleteMany({ _id : req.params.CharacterID })
        res.json(deletedChar);
    }
    catch(err){
        res.json({messaje:err});
    }
});


module.exports = router;