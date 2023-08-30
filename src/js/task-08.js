

const formEl = document.querySelector('.login-form');



formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const loginEl = formEl.elements.email.value;
  const passwordEl = formEl.elements.password.value;

  if (loginEl === '' || passwordEl === '') {
    alert('Всі поля повинні бути заповнені');
  } else {
    const credentials = { loginEl, passwordEl };
    formEl.reset();
    console.log(credentials);

  }
});
