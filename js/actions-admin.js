
let passAdmin = document.getElementById('password');

passAdmin.addEventListener('blur',checkPass);

function checkPass(evento)
{
  console.log(this.value);
  if (this.value==='donshirito')
  {
      console.log('don chilito anda de buenas');
  }
  else
  {
      evento.preventDefault();
      generateError();
  }
}

// console.log($('input'));
let generateError = function generateError ()
{
  console.log($('input'));
  alert('Contraseña incorrecta');
  element.addClass('error');
  element.insertAfter();
  $('<span> Vuelva a ingresar la contraseña</span>').insertAfter(element);
}
//
// let validateForm = function validateForm(e)
// {
//   let button =$(this);
//   let pristine = true;
//   //obtain form
//   let form = button.parent('form');
//   // obtener todos los elementos required
//   let required = form.find('*[required]');
//
//   pristine = validateRequiredFields(required);
//
//   if(pristine)
//   {
//     e.preventDefault();
//   }
// }
//
// let validateRequiredFields = function validateRequiredFields (fields)
// {
//   let pristine = true;
//   $.each(fields, funtion()
//   {
//     let element = $(this);
//     console.log(this);
//
//     if(element.is('input') && element.val() !== 'donshirito')
//     {
//       generateError(element, 'required');
//       pristine = false;
//     }
//
//     // para cuando pongas un elemento de tipo select va esto,
//     // y procurar que cuando no se haya selecionado nada ponerle un value de 0
//   });
//       return pristine;
// }
//
// let generateError = function generateError(element,typeError)
// {
//   alert('This' + element + 'field is required');
//   element.addClass('error');
//   $('<span> This field is required </span>').insertAfter(element);
//
// }
