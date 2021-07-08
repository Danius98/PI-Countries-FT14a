var {Sequelize, DataTypes} = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("country",
    {
      codigo: { type: DataTypes.STRING, allowNull: false, primaryKey: true},
      nombre: { type: DataTypes.STRING, allowNull: false },
      bandera: { type: DataTypes.STRING, allowNull: false },
      capital: { type: DataTypes.STRING , allowNull: false},
      continente: { type: DataTypes.STRING, allowNull: false },
      subcontinente: { type: DataTypes.STRING, allowNull: true},
      coordenadas: { type: DataTypes.INTEGER, allowNull: true},
      poblacion: { type: DataTypes.INTEGER, allowNull: true}
    },
    { timestamps: false }
  );
};
