function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
changeColorBtn.addEventListener('click', onChangeColor);

const span = document.querySelector('.color');

function onChangeColor(event) {
  let backgroundBody = document.body.style.background = getRandomHexColor();
  span.textContent = backgroundBody;
}