
const spanText = document.querySelector('#text');
// console.log(spanText);
const inputSizeControl = document.querySelector('#font-size-control');
// console.log(inputSizeControl);
inputSizeControl.addEventListener('input', event => {
  const fontSize = inputSizeControl.value;
  spanText.style.fontSize = `${fontSize}px`;
});




