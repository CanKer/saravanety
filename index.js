'use strict'

const express         = require('express'),
      Sequelize       = require('sequelize'),
      bodyParser      = require('body-parser'),
      path            = require('path'),
      app             = express(),
      port            = process.env.PORT || 80,
      connection      = new Sequelize('saravanety', 'root', 'root')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'jade')
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) =>  {
  res.render('main')
})
app.get('/verProductos', (req, res)  =>  {
  res.render('verProductos')
})
app.get('/agregarUsuario', (req, res)  =>  {
  res.render('agregarCliente')
})
app.get('/crearPedido', (req, res)  =>  {
  res.render('crearPedido')
})
app.get('/planDeCompra', (req, res)  =>  {
  res.render('planDeCompra')
})
app.get('/crearProducto', (req, res)  =>  {
  res.render('crearProducto')
})
app.get('/verUsuario', (req, res)  =>  {
  res.render('verCliente')
})


const onListening = () => console.log(`Conexión exitosa en el puerto ${port}`)

//require('./models')(connection)

app.listen(port, onListening)

require('./server/routes')(app)
//app.use('/api/bandas', banda)
