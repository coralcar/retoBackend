const express = require('express');
const router = express.Router();

const Episode = require('../models/Episode');

//Devuelve lista de todos los episodios
router.get('/', async (req,res) => {
    try{
        const episodes = await Episode.find();
        res.json(episodes);
    }
    catch(err){
        res.json({messaje:err});
    }
});

//Crear nuevo episodio
router.post('/', async (req,res) => {
    const episode = new Episode({
        _id: req.body._id,
        name: req.body.name,
        season: req.body.season,
        _idCharacter: req.body._idCharacter,
        _idPlace: req.body._idPlace
    });

    try{
        const savedEp = await episode.save();
        res.json(savedEp);
    }
    catch (err) {
        res.json({ message: err });
    }    
});

//Actualizar todos los datos de un Episodio a partir de su ID
router.put('/:episodeID', async (req,res) => {
    try{
        const updatedEp = await Episode.replaceOne(
            {_id : req.params.episodeID }, 
            {   name: req.body.name,
                season: req.body.season,
                _idCharacter: req.body._idCharacter,
                _idPlace: req.body._idPlace }
        );
        res.json(updatedEp);
    }
    catch(err){
        res.json({messaje:err});
    }
});

//Actualizar un solo atributo de entidad "Episodio"
router.patch('/:episodeID', async (req,res) => {
    try{
        const updatedEp = await Episode.updateOne(
            {_id : req.params.episodeID }, 
            {$set: { name: req.body.name }}
        );
        res.json(updatedEp);
    }
    catch(err){
        res.json({messaje:err});
    }
});


//Eliminar un episodio
router.delete('/:episodeID', async (req,res) => {
    try{
        const deletedEp = await Episode.deleteMany({ _id : req.params.episodeID })
        res.json(deletedEp);
    }
    catch(err){
        res.json({messaje:err});
    }
});


module.exports = router;