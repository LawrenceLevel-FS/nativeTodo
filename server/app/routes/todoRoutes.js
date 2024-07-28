const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("<h1>api route 1 working</h1>");
});

module.exports = router;
