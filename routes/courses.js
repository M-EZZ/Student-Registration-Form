var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/', function (req, res, next) {

    if (!req.session.userId) {
        // not logged in
        res.redirect('../')
    } else {
        var userQuery = `select * from User where id = ${req.session.userId}`
        db.query(userQuery, function (err, rows, fields) {
            if (err) return res.status(422).json({ errors: err })

            var user = rows[0]
            var departmnetQuery = `select * from Course where department_id = ${user.department_id}`

            db.query(departmnetQuery, function (err, rows, fields) {
                if (err) return res.status(422).json({ errors: err })
                res.render('courses', { courses: rows })
            })

        })
    }

});


module.exports = router;