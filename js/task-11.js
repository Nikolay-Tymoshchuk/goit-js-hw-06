const changeColorBtn = document.querySelector('.change-color');
const body = document.querySelector('body');
const colorNuberInHex = document.querySelector('.color');
let randomEl = '';
const arr = [0, 0];

function getRandomHexColor() {
    randomEl = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    arr.splice(0, 1, randomEl);
  return randomEl
}

getRandomHexColor()
changeColorBtn.style.backgroundColor = arr[0];

changeColorBtn.addEventListener('click', () => {
    arr[1] = arr[0];
    arr[0] = getRandomHexColor();
    body.style.backgroundColor = arr[1];
    changeColorBtn.style.backgroundColor = arr[0];
    colorNuberInHex.textContent = arr[1];
  console.log('Current button color ', arr[0]);
  console.log('Current body color ', arr[1]);
}
);











