function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const body = document.querySelector('body');
const colorNuberInHex = document.querySelector('.color');

changeColorBtn.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor();
  changeColorBtn.style.backgroundColor = body.style.backgroundColor;
  colorNuberInHex.textContent = getRandomHexColor();
}
);

