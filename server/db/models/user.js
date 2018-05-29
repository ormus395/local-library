module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      },
      unique: true
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      len: [5, 10]
    },
    role: {
      type: DataTypes.STRING,
      values: ["Guest", "Member", "Admin"],
      default: "Guest"
    }
  });

  User.associate = function(models) {};
};
