const User = require("../db").User;

module.exports = {
  get: (req, res) => {
    res.send("Get all users");
  },
  show: (req, res) => {
    res.send("Get a user");
  },
  create: (req, res) => {
    res.send("Create a user");
  },
  delete: (req, res) => {
    res.send("Delete a user");
  },
  update: (req, res) => {
    res.send("Update a user");
  }
};
