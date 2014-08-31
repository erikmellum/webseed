var mongoose = require('mongoose');

var quoteSchema = new mongoose.Schema({
    name: String,
    quote: String,
    author: String
});

module.exports = mongoose.model('Quote', quoteSchema);