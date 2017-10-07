/**
 * Created by david on 2017-09-06.
 */
const mongoose = require('mongoose');

const cardsSchema = new mongoose.Schema({
    "item": String,
    "qty": Number

});

const Card = mongoose.model('Card', cardsSchema);
module.exports = Card;