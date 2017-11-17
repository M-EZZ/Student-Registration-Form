var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/', function (req, res, next) {

    if (!req.session.userId) {
        // not logged in
        res.redirect('../')
    } else {
        // get user data
        var userQuery = `select * from User where id = ${req.session.userId}`
        db.query(userQuery, function (err, rows, fields) {

            if (err) return res.status(422).json({errors: err})
            let user = rows[0]

            // if has already department redirect to courses
            if (user.department_id) {
                res.redirect('../courses')
            } else {
                // display the departments
                var query = 'select * from Department'
                db.query(query, function (err, rows, fields) {
                    if (err) return res.status(422).json({errors: err})
                    res.render('departments', {user: user, departments: rows});
                })
            }
        })
    }

});

router.post('/', function (req, res, next) {
    var departmentId = req.body.department
    var userId = req.session.userId
    var query = `update User set department_id = ${departmentId} where id = ${userId}`

    db.query(query, function (err, rows, fields) {
        if (err) return res.status(422).json({errors: err})
        res.redirect('../courses')
    })
})


module.exports = router;