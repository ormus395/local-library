const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const sequelizeInstance = new Sequelize(null, null, null, {
  dialect: "sqlite",
  storage: "./local_library.sqlite"
});

const basename = path.basename(__filename);

const db = {};

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(jsFile => {
    let model = sequelizeInstance.import(path.join(__dirname, jsFile));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelizeInstance = sequelizeInstance;
db.Sequelize = Sequelize;

module.exports = db;
