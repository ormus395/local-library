const User = require("../db/models").User;
module.exports = {
  login: (req, res) => {
    res.redirect("/catalog");
  },
  logout: (req, res) => {
    req.logout();
    res.send("logged out");
  }
};
