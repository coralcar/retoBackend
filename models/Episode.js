const mongoose = require('mongoose');

const EpisodeSchema = mongoose.Schema({
    _id:String,
    name: String,
    season: String,
    _idCharacter: String,
    _idPlace: String,
});

module.exports = mongoose.model('Episode', EpisodeSchema);