const formRef = document.querySelector('.login-form');
const inputLoginRef = formRef.elements.email.value;
const inputPasswordRef = formRef.elements.password.value;


formRef.addEventListener('submit', (event) => {
  event.preventDefault();
  if (inputLoginRef === '' || inputPasswordRef === '') {
    alert('Всі поля повинні бути заповнені');
  } else {
    const credentials = { inputLoginRef, inputPasswordRef };
    formRef.reset();
    console.log(credentials);
  }
});

