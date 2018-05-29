const db = require("../models");

const auhtorData = require("./authors.json");
const bookData = require("./books.json");
const genreData = require("./genres.json");
const bookInstanceData = require("./bookInstance.json");

db.sequelizeInstance.sync({ force: true }).then(function() {
  Promise.all(
    auhtorData.map(author => {
      db.Author.create(author);
    })
  );
  Promise.all(
    bookData.map(book => {
      db.Book.create(book);
    })
  );
  Promise.all(
    genreData.map(genre => {
      db.Genre.create(genre);
    })
  );
  Promise.all(
    bookInstanceData.map(instance => {
      db.BookInstance.create(instance);
    })
  );
});
