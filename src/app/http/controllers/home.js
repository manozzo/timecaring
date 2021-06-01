const express = require("express");
const router = express.Router();
const path = require("path");

var homeDir = path.join(__dirname + "../../../../resources/view/index.html");
console.log(homeDir);

router.get("/", (req, res) => {
  res.sendFile(homeDir);
});

module.exports = (app) => app.use("/", router);