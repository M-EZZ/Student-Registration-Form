var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    // TODO: get user department and query all courses of that one & send them to view
    // if (req.session.userId) {
    //     res.render('courses')
    // } else {
    //     res.redirect('/')
    // }
    res.render('courses');
});


module.exports = router;