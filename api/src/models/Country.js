var {Sequelize, DataTypes} = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("country",
    {
      id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true},
      aplha3Code: { type: DataTypes.STRING, allowNull: false},
      name: { type: DataTypes.STRING, allowNull: false },
      flag: { type: DataTypes.STRING, allowNull: false },
      capital: { type: DataTypes.STRING , allowNull: false},
      region: { type: DataTypes.STRING, allowNull: false },
      subregion: { type: DataTypes.STRING, allowNull: true},
      area: { type: DataTypes.INTEGER, allowNull: true},
      population: { type: DataTypes.INTEGER, allowNull: true}
    },
    { timestamps: false }
  );
};
