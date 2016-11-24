'use strict'

module.exports = function(sequelize, DataTypes) {
  var PedidoProducto = sequelize.define('PedidoProducto', {

    idPedido: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model:    'Pedido',
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
    },
    cantidad: {
      type: DataTypes.INTEGER
    },
    precio:   {
      type: DataTypes.FLOAT
    }
  }, {
    tableName: 'PedidoProducto',
    timestamps: false,
    freezeTableName: true,
    classMethods: {
      associate: models =>  {
      }
    }
  });
  PedidoProducto.sync()
  return PedidoProducto
};
