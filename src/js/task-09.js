function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnColor = document.querySelector('.change-color');
console.log(btnColor);

btnColor.addEventListener("click", event => {
  const bcgColor = getRandomHexColor();
  document.body.style.backgroundColor = bcgColor;
});