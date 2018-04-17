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

// adminCheckboxSelected

$( '.block-bad' ).on( 'click', function()
{
    if( $(this).is(':checked') )
    {
      //$(this).addClass('block-user-bad');
      $(this).parent().addClass('block-user-bad');

      //$(this).prop('disabled', true).parent().addClass('block-user-bad');
      confirm("¿Desea bloquear al usuario? ");
    }
    else
    {
      $(this).parent().removeClass('block-user-bad');
            //$(this).prop('disabled', false).parent().addClass('block-user-bad');
        confirm("¿Desea desbloquear al usuario? ");
    }
});
