'use strict';
module.exports = function(sequelize, DataTypes) {
  var Producto = sequelize.define('Producto', {
    categoria: DataTypes.STRING,
    nombre: DataTypes.STRING,
    precio: DataTypes.FLOAT,
    comentario: DataTypes.TEXT,
  }, {
    tableName:       'Producto',
    freezeTableName: true,
    timestamps:      true,
    classMethods: {
      associate: function(models) {
        Producto.belongsToMany(models.Pedido, {
          as:           'Pedido',
          through:      models.PedidoProducto,
          foreignKey:   'idProducto',
          otherKey:     'idPedido',
          onDelete:     'cascade'
        })
      }
    }
  });
  Producto.sync()
  return Producto;
};
