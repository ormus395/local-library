module.exports = {
  get: (req, res) => {
    res.send("get all Genres");
  },
  show: (req, res) => {
    res.send("Genre details");
  },
  create: (req, res) => {
    res.send("Create Genre");
  },
  delete: (req, res) => {
    res.send("Delete Genre");
  },
  update: (req, res) => {
    res.send("Update Genre");
  }
};
