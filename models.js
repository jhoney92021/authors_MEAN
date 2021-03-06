
//REQUIRED
const mongoose = require('mongoose');
//REQUIRED

//CONNECT
mongoose.connect('mongodb://localhost/author', {useNewUrlParser: true});
//CONNECT

//SCHEMAS
//Quote
var QuoteSchema = new mongoose.Schema({
    vote: {type: Number, required: true, default:0},
    content: {type: String, required:false, default:""}
}, { timestamps: true });
//Quote
//Author
var AuthorSchema = new mongoose.Schema({
    name: {type: String, required: true, default: "Billy"},
    quotes: [QuoteSchema]
}, { timestamps: true });
//Author
//SCHEMAS


//MODEL
const Quote = mongoose.model('Quote', QuoteSchema);
const Author = mongoose.model('Author', AuthorSchema);
//MODEL
//STUFF TO EXPORT TO controller.js
module.exports = {Quote: Quote, Author: Author};
//STUFF TO EXPORT TO controller.js