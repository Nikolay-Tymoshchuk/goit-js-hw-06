const inputElement = document.querySelector('#validation-input');
const numberForChecking = Number(inputElement.dataset.length);


inputElement.addEventListener('blur', (event) => {
    event.preventDefault();
    if (inputElement.value.length === numberForChecking) {
        inputElement.classList.add('valid');
        inputElement.classList.remove('invalid');
    } else {
        inputElement.classList.add('invalid');
        inputElement.classList.remove('valid');
    }
});

