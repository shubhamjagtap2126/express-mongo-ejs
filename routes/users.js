var express = require('express');
var router = express.Router();
const passport = require("passport");
const catchAsync = require("../utils/catchAsync");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;