const regex = {
  username: '^[a-zA-Z]+$',
  numeros: '^[0-9]+$'
}

let validateData = function validateData(e)
{
  restart();
  e.preventDefault();

  let isValidR = true;
  let isValidP = true;

  let button = $(this);

  let divParent = button.parent();

  let required = divParent.find('*[required]');
  let pattern = divParent.find('*[data-type]');

  isValidR = validateRequiredFields(required);

  /* No reconoce las expresicones regulares */
  //isValidP = validatePatternFields(pattern);

  if(isValidR /*|| isValidP*/)
  {
    divParent.submit();
  }
}

// R E Q U I R E M E N T S
let validateRequiredFields = function validateRequiredFields (fields)
{
  let isValid = true;
  $.each(fields, function ()
  {
    let element= $(this);

    if (element.val() === '') {
      generateError(element, 'is required');
      isValid = false;
    }
  });
  return isValid;
}

// P A T T E R N
let validatePatternFields = function validatePatternFields (fields)
{
  let isValid = true;
  $.each(fields, function ()
  {
    let element= $(this);
    let type = element.data('type');

    if (element.val().match(regex.type)) {
      generateError(element, 'Do not match the format');
      isValid = false;
    }
  });
  return isValid;
}

let generateError = function generateError(element, typeError)
{
  element.addClass('error');
  $('<span class="errorMessage">This field ' + typeError + '</span>').insertAfter(element);
}

let restart = function restart()
{
  $(".errorMessage").remove();
  $(".error").removeClass();
}
