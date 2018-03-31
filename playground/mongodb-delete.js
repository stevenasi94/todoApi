// const MongoClint = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');


MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    const db = client.db("TodoApp");


    // // deleteMany
    // db.collection("Todos").deleteMany({text: "Eat lunch"}).then((results) => {
    //     console.log(results);
    // });

    // // deleteOne
    // db.collection("Todos").deleteOne({text: "Eat lunch"}).then((results) => {
    //     console.log(results);
    // });

    // //findOneAndDelete
    // db.collection("Todos").findOneAndDelete({completed: false}).then((results) => {
    //     console.log(results);
    // });

    // db.collection("Users").deleteMany({name: "Steven"}).then((results) => {
    //     console.log(results);
    // });

    // db.collection("Users").findOneAndDelete({_id: new ObjectID ("5ab7628d37a6160dc87f6991")}).then((results) => {
    //     console.log(results);
    // })



    });