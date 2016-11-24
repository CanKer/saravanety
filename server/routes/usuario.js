'use strict'

module.exports = (app, usuario) =>  {
  app.get('/api/usuario', usuario.index)
  app.get('/api/usuario/:id', usuario.show)
  app.post('/api/usuario', usuario.create)
  app.put('/api/usuario/:id', usuario.update)
  app.delete('/api/usuario/:id', usuario.delete)
}
