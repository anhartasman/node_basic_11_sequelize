const Sequelize = require("sequelize");

const sequelize = new Sequelize("nodecomplete", "root", "123456", {
  host: "localhost",
});
module.exports = sequelize;
