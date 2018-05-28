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

 	$.post('https://brazo-api.herokuapp.com/users', usuario, function(result){// la direccion se tiene que modificar una vez
    //se suba al server
    console.log('impresion para saber que esta funcionando ***');
    window.location.replace('index.html');
 	});

  });
