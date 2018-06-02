let slug = require("../../helpers").slug;
module.exports = (sequelize, DataTypes) => {
  let Book = sequelize.define("Book", {
    BookId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    slug: DataTypes.STRING,
    title: DataTypes.STRING,
    summary: DataTypes.TEXT,
    ISBN: DataTypes.STRING,
    url: DataTypes.STRING
  });

  Book.associate = function(models) {
    models.Book.belongsTo(models.Author, {
      onDelete: "Cascade",
      foreignKey: {
        allowNull: false
      }
    });
    models.Book.hasMany(models.BookInstance);
    // Need to figure out Genre association
    models.Book.hasMany(models.Genre);
  };
  Book.beforeCreate((book, options) => {
    return new Promise((resolve, reject) => {
      try {
        book.slug = slug(book.title);
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  });
  return Book;
};
