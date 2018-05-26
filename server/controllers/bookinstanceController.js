module.exports = {
  get: (req, res) => {
    res.send("BookInstance List");
  },
  show: (req, res) => {
    res.send("Details of book instance");
  },
  create: (req, res) => {
    res.send("Create book instance");
  },
  delete: (req, res) => {
    res.send("delete an instance");
  },
  update: (req, res) => {
    res.send("Update and instance");
  }
};
