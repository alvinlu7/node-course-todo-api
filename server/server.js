var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req, res)=>{
    console.log(req.body);
});

app.listen(3000, ()=>{
    console.log("Started on port 3000");
});

// var newTodo = new Todo({
//     text:'  Edit this code  '
// });

// newTodo.save().then((doc)=> {
//     console.log('Saved todo', JSON.stringify(doc, undefined, 2));
// }, (e)=>{
//     console.log("Unable to save todo", e);
// });



// var newUser = new User({
//     email: "alvinlu7@gmail.com"
// });

// newUser.save().then((doc)=>{
//     console.log("Saved user", JSON.stringify(doc, undefined, 2));
// }, (e)=>{
//     console.log("Unable to add user", e);
// });