var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();

app.use(bodyParser.json());

app.post('/todos',(req, res)=>{
    console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) =>{
    Todo.find().then((todos)=>{
        res.send({todos});
    },(e)=>{
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) =>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)) {
        res.status(404).send();
    }
    else{
        Todo.findById(id).then((todo)=>{
            if(!todo){
                res.status(404).send();
            }
            else{
                res.send({todo});
            }
        }).catch((e)=> res.status(404).send());
    }
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

module.exports = {app};