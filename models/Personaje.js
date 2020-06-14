const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
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

module.exports = mongoose.model('Personaje', PostSchema);