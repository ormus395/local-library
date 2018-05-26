const Author = require("../db/models").Author;

module.exports = {
  get: (req, res) => {
    res.send("Not implemented yet: Auhtor List");
  },
  show: (req, res) => {
    res.send("Author details");
  },
  create: (req, res) => {
    res.send("Create an author");
  },
  delete: (req, res) => {
    res.send("Delete an author");
  },
  update: (req, res) => {
    res.send("Update author");
  }
};
