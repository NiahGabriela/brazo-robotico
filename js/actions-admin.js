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


  // $.get('http://localhost:3000/users', function( data ) {
  //
  //   console.log(data);
    var html = ``;
html += `<label><input type="checkbox" class="block-bad"/> wowoow </label>`;
html += `<label><input type="checkbox" class="block-bad"/> stay girls </label>`;
    // $.each(data, function(index, value) {
    //   html += `<label><input type="checkbox" class="block-bad"/> ${value.name} </label>`;
    //     // html += `<td>`;
    //   //   html += `<input class="users-list" type="checkbox" name="selected" value="${value.id}">`;
    //   //   html += `</td>`;
    //   //   html += `<td>${value.name}</td>`;
    //   //   html += `<td>${value.last_name}</td>`;
    //   //   html += `<td>${value.email}</td>`;
    //   //   html += `<td>${value.phone}</td>`;
    //   //   html += `<td>${value.score}</td>`;
    //   // html += `</tr>`;
    // });
    console.log(html);
    console.log('señales de vida');
    $('div .users-list').append(html);

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

        $.put(`http://localhost:3000/users/ ${selectedLabel}`, function()
        {

        });

      }
      else
      {
        $(this).parent().removeClass('block-user-bad');
              //$(this).prop('disabled', false).parent().addClass('block-user-bad');
          confirm("¿Desea desbloquear al usuario? ");
      }
  });
});
