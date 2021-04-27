const path = require("path");
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");

const { host, port, user, pass } = require("../config/mail.json");

const transport = nodemailer.createTransport({
  host,
  port,
  auth: { user, pass },
});

const handlebarOptions = {
  viewEngine: {
    extname: ".html",
    layoutsDir: path.resolve("./src/resources/mail/auth"),
    defaultLayout: "forgot_password",
    partialsDir: path.resolve("./src/resources/mail/"),
  },
  viewPath: path.resolve("./src/resources/mail/"),
  extName: ".html",
};
transport.use("compile", hbs(handlebarOptions));

module.exports = transport;
