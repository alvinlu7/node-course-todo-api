//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err){
        return console.log("Unable to connect to mongodb server");
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //deleteMany
    // db.collection('Users').deleteMany({name: "Alvin"}).then((result) =>{
    //     console.log(result);
    // });
    
    //deleteOne
    // db.collection('Todos').deleteOne({text: "Eat lunch"}).then((result)=>{
    //     console.log(result);
    // });

    //findOneandDelete
    db.collection('Users').findOneAndDelete({_id: new ObjectID("5b30482cb4700a519f9c5baf")}).then((result)=>{
        console.log(JSON.stringify(result, undefined, 2));
    });
    
    //client.close();
});
