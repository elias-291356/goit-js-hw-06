
let counterValue = 0;
const valueRef = document.querySelector('#value')
const decrementRef = document.querySelector('button[data-action="decrement"]');
const incrementRef = document.querySelector('button[data-action="increment"]');

valueRef.textContent = counterValue;

decrementRef.addEventListener('click', () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;

});

incrementRef.addEventListener('click', () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
});

