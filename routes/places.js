const express = require('express');
const router = express.Router();

const Place = require('../models/Place');

//Devuelve lista de todos los Lugares
router.get('/', async (req,res) => {
    try{
        const places = await Place.find();
        res.json(places);
    }
    catch(err){
        res.json({messaje:err});
    }
});

//Crea nuevo Lugar
router.post('/', async (req,res) => {
    const place = new Place({
        _id: req.body._id,
        name: req.body.name,
        location: req.body.location,
        nativeSpecies: req.body.nativeSpecies,
        memberOf: req.body.memberOf,
        image: req.body.image
    });

    try{
        const savedPlace = await place.save();
        res.json(savedPlace);
    }
    catch (err) {
        res.json({ message: err });
    }    
});

//Actualizar todos los datos de un Lugar a partir de su ID
router.put('/:placeID', async (req,res) => {
    try{
        const updatedPlace = await Place.replaceOne(
            {_id : req.params.placeID }, 
            {   name: req.body.name,
                location: req.body.location,
                nativeSpecies: req.body.nativeSpecies,
                memberOf: req.body.memberOf,
                image: req.body.image }
        );
        res.json(updatedPlace);
    }
    catch(err){
        res.json({messaje:err});
    }
});

//Actualizar un solo atributo (nombre) de entidad "Lugar"
router.patch('/:placeID', async (req,res) => {
    try{
        const updatedPlace = await Place.updateOne(
            {_id : req.params.placeID }, 
            {$set: { name: req.body.name }}
        );
        res.json(updatedPlace);
    }
    catch(err){
        res.json({messaje:err});
    }
});

//Eliminar un Lugar
router.delete('/:placeID', async (req,res) => {
    try{
        const deletedPlace = await Place.deleteMany({ _id : req.params.placeID })
        res.json(deletedPlace);
    }
    catch(err){
        res.json({messaje:err});
    }
});


module.exports = router;