var formToggle = document.getElementById('form-toggle');
var formsContainer = document.getElementById('forms-container');
var registerForm = document.getElementById('register-form');
var registerErrors = document.getElementById('register-errors');
var loginForm = document.getElementById('login-form');
var loginErrors = document.getElementById('login-errors');


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
  registerErrors.classList.remove('active');
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
        showErrors(['email or username is already taken'], 'register')
      } else if (error.status === 403) {
        var responseErrors = JSON.parse(error.responseText).errors;
        var errors = [];
        for (error in responseErrors) {
          errors.push(responseErrors[error].msg)
        }
        showErrors(errors, 'register')
      }
    }
  })
})

// login register form by AJAX
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    loginErrors.classList.remove('active');
    $.ajax({
        url: '/login',
        method: 'POST',
        data: {
            username: registerForm.username.value,
            password: registerForm.password.value,
        },
        success: function (response) {
            console.log(response);
        },
        error: function (error) {
            if (error.status === 401 ) {
                showErrors(['Wrong username or password'], 'login')
            } else if (error.status === 403) {
                var responseErrors = JSON.parse(error.responseText).errors;
                var errors = [];
                for (error in responseErrors) {
                    errors.push(responseErrors[error].msg)
                }
                showErrors(errors, 'login')
            } else if (errors.status === 422){
                showErrors(['something wrong happened وخلاص'], 'login')
            }
        }
    })
})




function showErrors (errors, formType) {
  let errorsElement = null;
  let errorsUl = null;
  if (formType === 'register') {
    errorsElement = registerErrors;
    errorsUl = document.querySelector('#register-errors ul')
  } else if (formType === 'login') {
    errorsElement = document.getElementById('login-errors');
    errorsUl = document.querySelector('#login-errors ul')
  }

  errorsUl.innerHTML = '';
  errors.forEach(error => {
    let li = document.createElement('li');
    li.innerHTML = error;
    errorsUl.appendChild(li)
  })
  errorsElement.classList.add('active');
}
