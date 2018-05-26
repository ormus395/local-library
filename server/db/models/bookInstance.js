module.exports = (sequelize, DataTypes) => {
  let BookInstance = sequelize.define("BookInstance", {
    imprint: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM,
      values: ["Available", "Maintenance", "Loaned", "Reserved"],
      default: "Maintenance"
    }
  });

  BookInstance.associate = function(models) {
    models.BookInstance.belongsTo(models.Book);
  };
  return BookInstance;
};
