const express = require("express");
const router = express.Router();
const path = require("path");

var loginDir = path.join(__dirname + "../../../../resources/view/login.html");
console.log(loginDir);

router.get("/", (req, res) => {
  res.sendFile(loginDir);
});

module.exports = (app) => app.use("/login", router);