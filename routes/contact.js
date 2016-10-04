/**
 * Created by 臻 on 2016-10-04.
 */
var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
