var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Portfolio',
    message:'My Page. My name is Tony. Nice to meet you guys.'

  });
});

module.exports = router;
