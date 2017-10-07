/**
 * Created by david on 2017-09-06.
 */
/**
 * GET /cards
 * List all cards.
 */
const Card = require('../models/cards.js');

exports.getCards = (req, res) => {
    Card.find((err, docs) => {
        res.render('cards', { cards: docs });
});
};