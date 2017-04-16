const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to Web Api Auth")
});

module.exports = router
