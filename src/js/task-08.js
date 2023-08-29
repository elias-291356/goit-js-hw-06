const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', (event) => {
  event.preventDefault();
  if (const inputLoginRef = formRef.elements.email.value; === '' || const inputPasswordRef = formRef.elements.password.value; === '') {
  alert('Всі поля повинні бути заповнені');
} else {
  const credentials = { inputLoginRef, inputPasswordRef };
  formRef.reset();
  console.log(credentials);
}
});

