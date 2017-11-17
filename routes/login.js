const {check, validationResult} = require('express-validator/check');
var express = require('express');
var router = express.Router();
var db = require('../db');


router.post('/', [
    check('username').isLength({min: 1}).withMessage('username can\'t be empty'),
    check('password').isLength({min: 6}).withMessage('password minimum length is 6'),
], function (req, res, next) {

    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        // validation error
        return res.status(403).json({errors: errors.mapped()});
    }

    var username = req.body.username
    var password = req.body.password
    var query = `SELECT * FROM User WHERE username = "${username}" AND password = "${password}"`

    db.query(query, function (err, rows, fields) {

        if (rows.length === 0) {
            // unauthorized
            return res.status(401).json({errors: ['wrong username or password']});
        }
        if (err) {
            // unprocessable
            return res.status(422).json({errors: err})
        }
        req.session.userId = rows[0].id
        return res.status(200).json({success: true})

    });


});

module.exports = router;

