const express = require('express');
const bodyparser = require('body-parser');
var cors = require('cors')
const app = express();
const MongoClient = require('mongodb');
const url ='mongodb://localhost:27017';

app.use(cors());

app.use(bodyparser.json()) //middle ware 
//app.use(bodyparser.urlencoded({ extended: true })); 

app.get('/', function (req, res) {
    //res.json(myData)
    MongoClient.connect(url, (err, client) => {
        if (err) return console.log(err);

        var usersData = db.collection('users').find().toArray();
        usersData
            .then(function (data) {
                client.close();
                res.json(data);
            })
            .catch(function (err) {
                client.close();
                res.status(500).json({
                    message: "error"
                })
            })

    })
});

app.post('/users', function (req, res) {
    console.log(req.body);

    MongoClient.connect(url, (err, client) => {
        if (err) return console.log(err);

        var db = client.db("usersDB");
        db.collection('users').insertOne(req.body, (err, result) => {
            if (err) throw err;
            client.close();

            res.send(result)
        })

    })

})
app.put('/users', function (req, res) { //id as the parameter to use for modify the existing one (id act as variable)

    MongoClient.connect(url, (err, client) => {
        if (err) return console.log(err);

        var db = client.db("usersDB");
        db.collection('users').findOneAndUpdate({ firstname:"Ramya"}, {
            $set: {
                firstname: req.body.firstname
            }
        }, (err, result) => {
            if (err) throw err;
            client.close();

            res.send(result)
        })
    })
})

app.delete('/users', function (req, res) {
    MongoClient.connect(url, (err, client) => {
        if (err) return console.log(err);

        var db = client.db("usersDB");
        db.collection('users').findOneAndDelete({ firstname: req.body.firstname }, (err, result) => {
            if (err) throw err;
            client.close();

            res.send(result)
        })
    })
})

app.listen(3000, function () {
    console.log("port is running")
});