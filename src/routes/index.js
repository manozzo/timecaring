const path = require("path");
const express = require("express");
const app = express();
const port = 3000;
const router = express.Router();

const staticViewsDir = path.join(__dirname, "../resources/view");
const staticAssetsDir = path.join(__dirname, "../resources/assets");
const staticLoginDir = path.join(__dirname, "../resources/view/login.html");

app.use("/", express.static(staticAssetsDir));
app.use("/", express.static(staticViewsDir));

app.get("/login", (req, res) => {
  res.sendFile(staticLoginDir);
});

app.listen(port, () => {
  console.log(`Server rodando na porta ${port}`);
});

module.exports = app
