const express = require("express");
const router = express.Router();


const path = require("path");

router.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/../views/index.html"));
  });

  router.get("/creditos", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/../views/creditos.html"))
});

module.exports = router;