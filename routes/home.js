var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("home", { title: "Express", success: "success" });
});

module.exports = router;
