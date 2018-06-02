const Book = require("../db/models").Book;

module.exports = {
  get: (req, res) => {
    console.log(req.query);
    // Find all books and paginate
    let limit = 25;
    let offset = 0;
    Book.findAndCountAll({
      limit: limit,
      offset: offset,
      $sort: { id: 1 }
    })
      .then(data => {
        let books = data.rows;
        let page = req.query.page ? req.query.page : 1;
        let pages = Math.ceil(data.count / limit);
        offset = limit * (page - 1);

        res
          .status(200)
          .json({ result: books, count: data.count, pages: pages });
      })
      .catch(err => {});
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
