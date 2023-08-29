const validationInput = document.querySelector('#validation-input');
const inputLength = +validationInput.dataset.length;
console.log(validationInput);

validationInput.addEventListener('blur', () => {
  if (validationInput.value.length === inputLength) {
    // validationInput.style.borderColor = 'teal';
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  }
  else {

    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
    // validationInput.style.borderColor = 'tomato';

  }
})