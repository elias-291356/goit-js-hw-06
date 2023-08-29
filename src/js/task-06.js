const validationInput = document.querySelector('#validation-input');
const inputLength = +validationInput.dataset.length;
console.log(validationInput);

validationInput.addEventListener('blur', () => {
  if (validationInput.value.length <= inputLength) {
    // validationInput.style.borderColor = 'teal';
    validationInput.classList.toggle('valid');
  }
  else {
    validationInput.classList.toggle('invalid');
    // validationInput.style.borderColor = 'tomato';
  }
})