// let submitButtons = $('button[type=submit]');
//
// submitButtons.on('click',validateData);

$('#signup').on('click', function() {
	// $('.error').remove();
	// var status = 0;
	//
	// status += validar($('#email'));
	// status += validar($('#name'));
	// status += validar($('#last_name'));
	// status += validar($('#phone'));
	// status += validar($('#score'));
	// status += validar($('#comment'));
	//
	// if(status > 0) return 0;
	//
 	var cliente = {
   	username: $('#username').val(),
   	email: $('#email').val(),
   	password: $('#password').val(),

 	}

 	console.log(cliente.username+" "+cliente.email+" "+cliente.password);

 	$.post('http://localhost:3000/users', cliente, function(result){// la direccion se tiene que modificar una vez
    //se suba al server
    console.log('impresion para saber que esta funcionando ***');
   	alertify.alert("Don Leon","Se creo el cliente!!", function(){
     	window.location.replace('index.html')
   	});
 	});

  });
