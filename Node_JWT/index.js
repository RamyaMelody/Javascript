const express = require('express');
const bodyparser = require('body-parser');
const bcrypt = require('bcrypt');
var cors = require('cors')
const app = express();
const MongoClient = require('mongodb');
const url = 'mongodb://localhost:27017';
const saltRounds = 10;
const jwt = require('jsonwebtoken')

app.use(cors());

app.use(bodyparser.json());

function authenticate(req, res, next) {
    var token = req.header('Authorization');
    if (token == undefined) {
        res.status('401').json({
            message: "unauthorized"
        });
    } else {

        jwt.verify(token, 'dfadgadfweegaerw', function (err, decode) {
            if (decode !== undefined) {
                req.userId = decode.id
                next();
            }
            else {
                res.status(401).json({
                    message: "unauthorized"
                });
            }
        })

        next();

    }
}

app.get('/users', function (req, res) {
    //res.json(myData)
    MongoClient.connect(url,{ useUnifiedTopology: true }, (err, client) => {
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

app.post('/register', function (req, res) {
    console.log(req.body);

    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
        if (err) throw err;
        var db = client.db("loginDB");

        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) throw err;

            bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (err) throw err;

                db.collection('log').insertOne({ email: req.body.email, password: hash }, (err, result) => {
                    if (err) throw err;
                    client.close();

                    res.json({
                        message: "success"
                    })
                })
            })
        })

    })

})
app.post('/login', function (req, res) {

    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
        if (err) throw err;
        var db = client.db("loginDB");
        db.collection('log').findOne({ email: req.body.email }, (err, user) => {
            if (err) throw err;
            //console.log(user)
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err) throw err;
                if (result) {
                    var jwtToken = jwt.sign({ id: user._id }, 'dfadgadfweegaerw'); 
                    //console.log(jwtToken)
                    res.json({
                        message: "success",
                        token: jwtToken
                    })
                }
            })
        })
    })
});

app.get('/dashboard', authenticate, function (req, res) {
    console.log(req.userId)
    res.json({
        message: "Protected"
    })

});


app.listen(3030, function () {
    console.log("port is running")
});