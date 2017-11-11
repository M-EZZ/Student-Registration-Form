var express = require('express');
var router = express.Router();
var database = require('../db');

router.post('/', function (req , res , next) {
    var username = req.body.username;
    var password = req.body.password;
    if (username && password) {
        database.query(`SELECT * FROM User WHERE username = "${username}" AND password = "${password}"` , function (err , rows , fields) {
            if(err) console.log(err);
            if(rows.length === 0) console.log("Wrong Username or Password");
            else{
                if (err) res.send(422)
                // TODO: redirect to departments
                // res.redirect('../departments')
            }
        });
    }
    else{
        res.send(401);
    }
});

module.exports = router;