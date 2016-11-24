'use strict';
module.exports = function(sequelize, DataTypes) {
  var Usuario = sequelize.define('Usuario', {
    nombre: DataTypes.STRING,
    email:  DataTypes.STRING,
    password: DataTypes.STRING,
    apellido: DataTypes.STRING,
    telefono1: DataTypes.STRING,
    telefono2: DataTypes.STRING,
    restaurante: DataTypes.STRING,
    calle: DataTypes.STRING,
    colonia: DataTypes.STRING,
    municipio: DataTypes.STRING,
    estado: DataTypes.STRING,
    encargado: DataTypes.STRING,
    tipo:   DataTypes.ENUM(['ADMIN', 'USER'])
  }, {
    tableName:        'Usuario',
    timestamps:       true,
    freezeTableName:  true,
    classMethods: {
      associate: function(models) {
        Usuario.belongsToMany(models.Producto, {
          as:           'Producto',
          through:      models.ClienteProducto,
          foreignKey:   'idUsuario',
          otherKey:     'idProducto',
          onDelete:     'cascade'
        }),
        Usuario.hasMany(models.Pedido,  {
          foreignKey:   'idUsuario'
        })
      }
    }
  });
  Usuario.sync()
  return Usuario;
};
