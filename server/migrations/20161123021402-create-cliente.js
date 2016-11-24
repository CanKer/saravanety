'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Clientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      telefono1: {
        type: Sequelize.STRING
      },
      telefono2: {
        type: Sequelize.STRING
      },
      restaurante: {
        type: Sequelize.STRING
      },
      calle: {
        type: Sequelize.STRING
      },
      colonia: {
        type: Sequelize.STRING
      },
      municipio: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.STRING
      },
      encargado: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Clientes');
  }
};