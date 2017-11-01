var formToggle = document.getElementById('form-toggle');
var formsContainer = document.getElementById('forms-container');

formToggle.addEventListener('change', function () {
    if (formToggle.checked) {
        formsContainer.classList.add('register')
    } else {
        formsContainer.classList.remove('register')
    }
})