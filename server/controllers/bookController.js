module.exports = {
  get: (req, res) => {
    res.send("Get all books");
  },
  show: (req, res) => {
    res.send("book details");
  },
  create: (req, res) => {
    res.send("Create an book");
  },
  delete: (req, res) => {
    res.send("Delete an book");
  },
  update: (req, res) => {
    res.send("Update book");
  }
};
