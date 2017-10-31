var express = require('express');
var router = express.Router();
var db = require('../db');

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


router.post('/', function (req, res, next) {
    var email = req.body.email
    var username = req.body.username
    var password = req.body.password
    if (validateEmail(email) && username && password) {
        var query = `insert into User(id, username, password, email) values (null, '${username}', '${password}', '${email}')`
        db.query(query, (err, rows, fields) => {
            if (err) res.send(400)
            // TODO: redirect to departments
            // res.redirect('../departments')
        })
    } else {
        res.send(403)
    }

})

module.exports = router