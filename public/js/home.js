var formToggle = document.getElementById('form-toggle');
var formsContainer = document.getElementById('forms-container');
var registerForm = document.getElementById('register-form');


// adding class of transition between login/registeration
formToggle.addEventListener('change', function () {
    if (formToggle.checked) {
        formsContainer.classList.add('register')
    } else {
        formsContainer.classList.remove('register')
    }
})


// submit register form by AJAX
registerForm.addEventListener('submit', function(event) {
  event.preventDefault();
  $.ajax({
    url: '/register',
    method: 'POST',
    data: {
      username: registerForm.username.value,
      password: registerForm.password.value,
      email: registerForm.email.value,
    },
    success: function (response) {
      console.log(response);
    },
    error: function (error) {
      if (error.status === 422) {
        showErrors(['email or username is already taken'])
      } else if (error.status === 403) {
        var responseErrors = JSON.parse(error.responseText).errors
        var errors = []
        for (error in responseErrors) {
          errors.push(responseErrors[error].msg)
        }
        showErrors(errors)
      }
    }
  })
})


function showErrors (errors) {
  console.log(errors);
}
