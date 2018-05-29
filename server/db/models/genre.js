module.exports = (sequelize, DataTypes) => {
  let Genre = sequelize.define("Genre", {
    name: DataTypes.STRING,
    url: DataTypes.STRING
  });

  Genre.associate = function(models) {
    // Figure out assocaition with books
    models.Genre.belongsTo(models.Book);
  };

  return Genre;
};
