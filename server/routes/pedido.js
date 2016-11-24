'use strict'

module.exports = (app, pedido) =>  {
  app.get('/api/pedido', pedido.index)
  app.get('/api/pedido/:id', pedido.show)
  app.post('/api/pedido', pedido.create)
  app.put('/api/pedido/:id', pedido.update)
  app.delete('/api/pedido/:id', pedido.delete)
}
