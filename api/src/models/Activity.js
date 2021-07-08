var {Sequelize, DataTypes} = require('sequelize');
const { sequelize } = require('./Country');
/*const s = new Sequelize('postgres://postgres:1234@localhost:5432/countries', {
  logging: false,*/
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
/*module.exports = (sequelize) => {
  // defino el modelo
   sequelize.define('activity', {
    ID: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Dificultad: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Duración: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      Temporada: {
          type: DataTypes.ENUM,
          allowNull: false
      }
  });
}*/

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define("activity",
      {
        id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true},
        nombre: { type: DataTypes.STRING, allowNull: true },
        Dificultad: { type: DataTypes.ENUM("1", "2", "3", "4", "5"), allowNull: true },
        Duración: { type: DataTypes.STRING, allowNull: true },
        Temporada: { type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera"), allowNull: true}
      },
      { timestamps: false }
    );
  };