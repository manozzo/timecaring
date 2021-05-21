const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");


const app = express();

app.use(express.json());
app.use(urlencoded({ extended: false }));

require("../app/http/controllers/index")(app);

app.listen(3000);
