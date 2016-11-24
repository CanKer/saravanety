'use strict'

module.exports = (app, producto) =>  {
  app.get('/api/producto', producto.index)
  app.get('/api/producto/:id', producto.show)
  app.post('/api/producto', producto.create)
  app.put('/api/producto/:id', producto.update)
  app.delete('/api/producto/:id', producto.delete)
}
