// let submitButtons = $('button[type=submit]');
//
// submitButtons.on('click',validateData);

$('#signup').on('click', function() {

 	var usuario = {
   	username: $('#username').val(),
   	email: $('#email').val(),
   	password: $('#password').val(),

 	}

 	console.log(usuario.username+" "+usuario.email+" "+usuario.password);

 	$.post('http://localhost:3000/users', usuario, function(result){// la direccion se tiene que modificar una vez
    //se suba al server
    console.log('impresion para saber que esta funcionando ***');
   	// alertify.alert("Cuenta creada", function(){
     	
   	// });
 	});

  });
