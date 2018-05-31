let bcrypt = require("bcryptjs");
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
  User.beforeCreate((user, options) => {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, function(err, salt) {
        if (err) {
          reject(err);
        } else {
          bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) reject(err);
            user.password = hash;
            resolve();
          });
        }
      });
    });
  });
  // Sanitize user before returning to client
  User.prototype.toJSON = function() {
    var values = Object.assign({}, this.get());

    delete values.password;
    return values;
  };
  return User;
};
