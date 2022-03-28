function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('input');
const mainBoxForAppendChildren = document.querySelector('#boxes');

createBtn.addEventListener('click', getAmount);
destroyBtn.addEventListener('click', destroyBoxes);

function getAmount (){
  const amount = Number(inputEl.value)
  console.log('amount :>> ', amount);
  createBoxes(amount);
  return inputEl.value = '';
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i+=1 ) {
    const newBox = document.createElement('div');
    const boxBgColor = getRandomHexColor();
    const boxSize = 30 + i * 10;

    newBox.style.cssText = `width: ${boxSize}px; height: ${boxSize}px; background-color: ${boxBgColor}`;
    mainBoxForAppendChildren.append(newBox);
  }
}

function destroyBoxes() {
  const boxes = mainBoxForAppendChildren.querySelectorAll('div');
  boxes.forEach(box => {
    box.remove();
  });
}
