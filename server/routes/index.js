'use strict'
module.exports  = (app) =>  {
  const usuario     = require('../controllers/usuario'),
        producto    = require('../controllers/producto'),
        pedido      = require('../controllers/pedido')

  require('./usuario')(app,usuario)
  require('./producto')(app,producto)
  require('./pedido')(app,pedido)


}
