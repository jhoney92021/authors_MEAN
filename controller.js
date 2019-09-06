//BRINGS STUFF FROM models.js
const modelExports = require("./models");
Author = modelExports.Author;
Quote = modelExports.Quote;
//BRINGS STUFF FROM models.js
//STUFF TO EXPORT TO routes.js
module.exports = {
    
    //Author 'dashboard'
    index: (request, response) => {
        Author.find()
            .then(t => {
                response.json(t);
            })
            .catch(err => response.json(err))
    },
    //Author 'dashboard'
    //create author
    create: (request, response) => {
        Author.create(request.body) 
            .then(t =>{
                response.json(t);
            })
            .catch(err => response.json(err))
    },
    //create author
    //create quote
    quote: (request, response) => {
        Author.findOneAndUpdate({_id: request.params._id}, {$push: {quotes: request.body}})
            .then(t =>{
                response.json(t);
            })
            .catch(err => response.json(err))
    },
    //create quote
    //delete 1
    delete: (request, response) => {
        Author.remove({ _id: request.params._id }) 
            .then(t => {
                response.json(t);                
            })
            .catch(err => response.json(err))
    },
    //delete 1
    //read 1
    view: (request, response) => {
        Author.findOne({ _id: request.params._id })
            .then(t => {
                response.json(t);                
            })
            .catch(err => response.json(err))
    },
    //read 1  
    //modify Vote
    voteMod: (request, response) => {
        Author.findOne({ _id: request.params._id })
            .then(t => {
                    t.quotes[request.params.idx].vote += request.body["mod"]
                    t.save();
                })
            .then(t =>{
                    response.json(t);
            })
            .catch(err => response.json(err))
    },
    //modify Vote
}
//STUFF TO EXPORT TO routes.js