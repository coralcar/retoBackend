const mongoose = require('mongoose');

const PlaceSchema = mongoose.Schema({
    _id:String,
    name: String,
    location: String,
    nativeSpecies: String,
    memberOf: String,
    image: String,
});

module.exports = mongoose.model('Place', PlaceSchema);