const inputEl = document.body.querySelector('#name-input');
console.log('inputEl :>> ', inputEl);
const outputEl = document.body.querySelector('#name-output');
console.log('outputEl :>> ', outputEl.textContent);


inputEl.addEventListener("input", (event) => {
    event.target.value.length > 0
        ? outputEl.textContent = event.target.value
        : outputEl.textContent = 'Anonymous';
});

