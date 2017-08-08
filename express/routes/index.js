var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // returns all the arguments passed to the request
  console.log(req.query);
  res.render('index', {
    title: 'damn',
    name: 'Claus', 
  });
});

module.exports = router;
