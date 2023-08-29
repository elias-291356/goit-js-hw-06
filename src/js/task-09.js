
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnColor = document.querySelector('.change-color');
const codeColor = document.querySelector('.color');// span text
const bodyBcg = document.querySelector('body');// background body
console.log(btnColor);

btnColor.addEventListener("click", event => {
  const random = getRandomHexColor();

  bodyBcg.style.backgroundColor = random;
  codeColor.textContent = random;



});

