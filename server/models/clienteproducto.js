'use strict'

module.exports = function(sequelize, DataTypes) {
  var ClienteProducto = sequelize.define('ClienteProducto', {

    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model:    'Usuario',
        key:      'id'
      }
    },
    idProducto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model:  'Producto',
        key:    'id'
      }
    }
  }, {
    tableName: 'ClienteProducto',
    timestamps: false,
    freezeTableName: true,
    classMethods: {
      associate: models =>  {
      }
    }
  });
  ClienteProducto.sync()
  return ClienteProducto
};
