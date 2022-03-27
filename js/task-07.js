const rangeElement = document.body.querySelector('#font-size-control');
console.log('rangeElement :>> ', rangeElement);
const textElement = document.body.querySelector('#text');


rangeElement.addEventListener('input', function(event) {
  const value = event.target.value;
  textElement.style.fontSize = value + 'px';
});