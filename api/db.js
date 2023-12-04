require("dotenv").config();
const { Sequelize } = require("sequelize");
const defineUsuarioModel = require("./src/models/Usuario");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DIALECT, DB_NAME } =
  process.env;

const sequelize = new Sequelize(
  `${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

const Usuario = defineUsuarioModel(sequelize);

module.exports = {
  Usuario,
  conn: sequelize,
};
