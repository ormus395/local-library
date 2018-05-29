module.exports = (sequelize, DataTypes) => {
  let Book = sequelize.define("Book", {
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
  return Book;
};
