const { DataTypes } = require("sequelize");

const Usuario = (sequelize) => {
  return sequelize.define(
    "Usuario",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fechaNacimiento: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      sexo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [["masculino", "femenino"]],
        },
      },
    },
    { freezeTableName: true, timestamps: false }
  );
};

module.exports = Usuario;
