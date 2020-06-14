const mongoose = require('mongoose');

const CharacterSchema = mongoose.Schema({
    _id:String,
    name: String,
    gender: String,
    age: String,
    species: String,
    occupation: String,
    image: String,
    location: {
        type: String,
        default : "Unknown"
    },
    isAlive: Boolean,
});

module.exports = mongoose.model('Character', CharacterSchema);