// Main modules
const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3");
const Sequelize = require("sequelize");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("cookie-session");
const logger = require("morgan");
const passport = require("passport");

// Your middleware
const models = require("./db/models");
const api = require("./routes");
require("./services/passport")(passport);
// Server object created from express call
// docs http://expressjs.com/en/4x/api.html
var app = express();
var port = process.env.PORT || 5000;
// Now we tell our express app what MW to use
app.use(logger("dev")); // This sets up morgan for a dev environment, Docs: https://www.npmjs.com/package/morgan
app.use(express.static(path.resolve(__dirname, "../client"))); // Tells Express where the client is
app.use(bodyParser.json()); // Reading json from HTTP bodies
app.use(bodyParser.urlencoded({ extended: false })); // Forms bruh
app.use(cookieParser());
app.use(session({ secret: "keyboard cat" }));
app.use(passport.initialize());
app.use(passport.session());

app.use("/api", api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  console.log(err);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

models.sequelizeInstance.sync().then(function() {
  app.listen(port, () => {
    console.log("Server started on " + port);
  });
});
