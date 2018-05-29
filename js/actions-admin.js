// Admin pass validation

let passAdmin = document.getElementById('password');
var notTilCorrect = document.getElementById('signin');

if(passAdmin)
{
  passAdmin.addEventListener('blur',checkPass);
}
if(notTilCorrect)
{
  notTilCorrect.addEventListener('click',controlButton);
}

function controlButton (event)
{
  event.preventDefault();
}

function checkPass(evento)
{
  console.log(this.value);
  if (this.value ==='donshirito')
  {
    notTilCorrect.removeEventListener('click', controlButton, false);
    console.log('don chilito anda de buenas');
    document.getElementById("password").className = document.getElementById("password").className.replace(" error", "");
  }
  else
  {
    document.getElementById("password").className = document.getElementById("password").className + " error";
    document.getElementById("errorPass").style.visibility = "visible";
  }
}

///carga los usuarios de la base de datos

$('document').ready(function() {
  $.getJSON("https://brazo-api.herokuapp.com/users", function(json) {

               //TMDb is nice enough to return a message if nothing was found, so we can base our if statement on this information

               if (json != "Nothing users."){

                  //Display the poster and a message announcing the result

                  $('div .users-list').html('<h2 class="loading">Well, kip!</h2><img id="thePoster" src=' + json[0].usersId[0] + ' />');
                }
              });
  // $.get('https://brazo-api.herokuapp.com/users', function( data ) {
  //   console.log('bpollo');
  //   console.log(data);
  //   var html = ``;
  // html += `<label><input type="checkbox" class="block-bad"/> wowoow </label>`;
  // html += `<label><input type="checkbox" class="block-bad"/> stay girls </label>`;
  //   $.each(data, function(index, value) {
  //     html += `<label><input type="checkbox" class="block-bad"/> ${value.name} </label>`;
  //   });
  //   console.log(html);
  //   console.log('señales de vida');
  //   $('div .users-list').append(html);
  //
  // });
  ////////////////********** adminCheckboxSelected ******/////////////////

  $( '.block-bad' ).on( 'click', function()
  {
      if( $(this).is(':checked') )
      {
        var $e = $(this);
        var selectedLabel = $e.parent().text();
        console.log(selectedLabel);
        $(this).parent().addClass('block-user-bad');

        //$(this).prop('disabled', true).parent().addClass('block-user-bad');
        confirm("¿Desea bloquear al usuario? ");

        // $.put( 'http://localhost:3000/users/ ', function()
        // {
        //
        // });

      }
      else
      {
        $(this).parent().removeClass('block-user-bad');
              //$(this).prop('disabled', false).parent().addClass('block-user-bad');
          confirm("¿Desea desbloquear al usuario? ");
      }
  });
});
