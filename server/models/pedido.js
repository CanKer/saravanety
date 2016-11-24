'use strict';
module.exports = function(sequelize, DataTypes) {
  var Pedido = sequelize.define('Pedido', {
    fecha: DataTypes.DATE,
    total: DataTypes.FLOAT,
    comentario: DataTypes.TEXT,
    idUsuario:  {
      type:   DataTypes.INTEGER,
      allowNull:  true,
      references: 'Usuario',
      key:        'id'
    }
  }, {
    tableName:        'Pedido',
    timestamps:       true,
    freezeTableName:  true,
    classMethods: {
      associate: function(models) {
        Pedido.belongsTo(models.Usuario,  {
          foreignKey: 'idUsuario'
        })
      }
    }
  });
  Pedido.sync()
  return Pedido;
};
