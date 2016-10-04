/**
 * Created by 臻 on 2016-10-04.
 */
var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
    res.render('about', { title: 'About Me' });
});

module.exports = router;