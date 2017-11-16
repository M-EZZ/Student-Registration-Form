var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('courses')
});

router.post('/', function (req, res, next) {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router;