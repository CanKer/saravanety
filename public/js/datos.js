'use strict'

$(document).ready(function()  {
  listaProductos()
  listaUsuarios()
  listaPedidos()
})


function listaProductos()  {
  const ruta = "http://localhost/api/producto",
        tabla= $('.datos')
  $.get(ruta, function(res) {
    $(res).each(function(key, value)  {
      tabla.append("<tr><td>"+value.categoria+"</td><td>"+value.nombre+"</td><td>"+value.precio+"MXN</td></tr>")
    })
  })
}

function listaPedidos()  {
  const ruta = "http://localhost/api/producto",
        tabla= $('.dataP')
  $.get(ruta, function(res) {
    $(res).each(function(key, value)  {
      tabla.append("<tr><td><input type='checkbox' name='seleccionar' class='seleccion' value='"+value.id+"'</td><td>"+value.nombre+"</td><td>"+value.precio+"</td><td><input type='text' class='cantidad'></td></tr>")
    })
  })
}

function listaUsuarios()  {
  const ruta = "http://localhost/api/usuario",
        tabla= $('#dataU')
  $.get(ruta, function(res) {
    $(res).each(function(key, value)  {
      tabla.append("<tr><td>"+value.nombre+"</td><td>"+value.email+"</td><td>"+value.tipo+"</td></tr>")
    })
  })
}

function obtenerProductos() {
  var ruta = "http://localhost/api/producto",
      total
  return $.get(ruta, function(res) {
    var total = res.length
  })
  return total
}

$('#registraPedido').click(function() {
  obtenerProductos()
})

$('#guardaCliente').click(function()  {
  const nombre =      $('#nombre').val(),
        apellido =    $('#apellido').val(),
        calle =       $('#calle').val(),
        colonia =     $('#colonia').val(),
        municipio =   $('#municipio').val(),
        restaurante = $('#restaurante').val(),
        telefono1 =   $('#telefono1').val(),
        telefono2 =   $('#telefono2').val(),
        encargado =   $('#encargado').val(),
        email =       $('#email').val(),
        password =    $('#password').val(),
        estado =      $('#estado').val()

        $.ajax({
          url:      "http://localhost/api/usuario",
          type:     "POST",
          datatype: "JSON",
          data: {
            nombre:       nombre,
            apellido:     apellido,
            calle:        calle,
            colonia:      colonia,
            municipio:    municipio,
            restaurante:  restaurante,
            telefono1:    telefono1,
            telefono2:    telefono2,
            encargado:    encargado,
            email:        email,
            password:     password,
            estado:       estado,
            tipo:         "USER"
          },
          success:  function(e) {
            alert("El usuario " + e.nombre + " ha sido guardado exitosamente")
          },
          error: function(e)  {
            alert("Error al agregar usuario: " + e)
          }
        })
})

$('#agregaProducto').click(function()  {
  const nombreP =       $('#nombreP').val(),
        precioP =       $('#precioP').val(),
        categoriaP =    $('#categoriaP').val(),
        comentariosP =  $('#comentariosP').val()

        $.ajax({
          url:      "http://localhost/api/producto",
          type:     "POST",
          datatype: "JSON",
          data: {
            nombre:       nombreP,
            precio:       precioP,
            categoria:    categoriaP,
            comentario:   comentariosP
          },
          success:  function(e) {
            alert("El producto " + e.nombre + " ha sido guardado exitosamente")
          },
          error: function(e)  {
            alert("Error al agregar producto: " + e)
          }
        })
})
