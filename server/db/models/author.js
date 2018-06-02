module.exports = (sequelize, DataTypes) => {
  let Author = sequelize.define("Author", {
    AuthorId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    first_name: DataTypes.STRING,
    family_name: DataTypes.STRING,
    date_of_birth: DataTypes.DATE,
    date_of_death: DataTypes.DATE,
    name: DataTypes.STRING,
    url: DataTypes.STRING
  });

  Author.associate = function(models) {
    models.Author.hasMany(models.Book);
  };
  return Author;
};
