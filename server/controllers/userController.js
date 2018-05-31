const User = require("../db/models").User;

module.exports = {
  get: (req, res) => {
    res.send("Get all users");
  },
  show: (req, res) => {
    res.send("Get a user");
  },
  create: (req, res, next) => {
    User.create(req.body).then(user => {
      if (user) {
        req.login(user, function(err) {
          if (err) {
            return next(err);
          }
          return res.redirect("/catalog");
        });
      } else {
        res.status(500).send("Couldn't create user");
      }
    });
  },
  delete: (req, res) => {
    res.send("Delete a user");
  },
  update: (req, res) => {
    res.send("Update a user");
  }
};
