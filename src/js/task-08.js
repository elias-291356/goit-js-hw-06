

const formRef = document.querySelector('.login-form');
let inputLoginRef = formRef.elements.email.value;
let inputPasswordRef = formRef.elements.password.value;


formRef.addEventListener('submit', (event) => {
  event.preventDefault();

  if (inputLoginRef.value === '' || inputPasswordRef.value === '') {
    alert('Всі поля повинні бути заповнені');
  } else {
    const credentials = { inputLoginRef, inputPasswordRef };
    formRef.reset();
    console.log(credentials);
  }
});

