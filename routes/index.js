var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Hello, and welcome to my Holiday Extras API!');
});

module.exports = router;
