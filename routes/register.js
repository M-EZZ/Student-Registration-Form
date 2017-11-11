const { check, validationResult } = require('express-validator/check');
var express = require('express');
var router = express.Router();
var db = require('../db');

router.post('/', [
  check('username').isLength({ min: 1 }).withMessage('username can\'t be empty'),
  check('password').isLength({ min: 6 }).withMessage('password minimum length is 6'),
  check('email').isEmail().withMessage('Invalid Email')
], function (req, res, next) {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.mapped() });
    }

    var email = req.body.email
    var username = req.body.username
    var password = req.body.password
    var query = `insert into User(id, username, password, email) values (null, '${username}', '${password}', '${email}')`
    db.query(query, (err, rows, fields) => {
        if (err) res.status(422).json({ errors: err })
        // TODO: redirect to departments
        // res.redirect('../departments')
    })
})

module.exports = router
