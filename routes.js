//BRINGS STUFF FROM controller.js
const controller = require("./controller");
//BRINGS STUFF FROM controller.js

//STUFF TO EXPORT TO server.js
module.exports = function(app){
    app.get('/author', controller.index)/*get all*/
    app.post('/author', controller.create)/*make author*/
    app.post('/author/:_id', controller.quote)/*make quote*/
    app.delete('/author/:_id', controller.delete)/*delete one*/
    app.get('/author/:_id', controller.view)/*view one*/
}
//STUFF TO EXPORT TO server.js