const models = require("../db/models");

module.exports = {
  handleSearch: (req, res) => {
    models[req.params.searchParam].findAll().then(data => {
      res.json(data);
    });
  }
};
