'use strict'

$(document).ready(function()  {
  listaProductos()
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
            estado:       estado
          },
          success:  function(e) {
            alert("El usuario " + e.nombre + " ha sido guardado exitosamente")
          },
          error: function(e)  {
            alert("Error al agregar usuario: " + e)
          }
        })
})
