var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.json({
    message:
      "Welcome to Naija Presidents Web Service. Resources are available at /presidents"
  });
});

module.exports = router;
