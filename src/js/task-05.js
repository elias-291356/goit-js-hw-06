const userNameInputEl = document.querySelector("#name-input");
const userNameOutputEl = document.querySelector('#name-output');
// console.log(userNameInputEl);
// console.log(userNameOutputEl);

userNameInputEl.addEventListener('focus', event => {
  userNameInputEl.style.outlineColor = 'tomato';
});
userNameInputEl.addEventListener('blur', event => {
  userNameInputEl.style.borderColor = 'teal';
});
userNameInputEl.addEventListener('input', event => {
  if (userNameInputEl.value === '') {
    userNameOutputEl.innerHTML = 'Anonymous';
    return
  }
  userNameOutputEl.textContent = `${userNameInputEl.value}`;
});