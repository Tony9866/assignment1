/**
 * Created by 臻 on 2016-10-04.
 */
var express = require('express');
var router = express.Router();

/* GET services page. */
router.get('/', function(req, res, next) {
    res.render('services', { title: 'Services' });
});

module.exports = router;