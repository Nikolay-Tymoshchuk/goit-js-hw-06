const decrementBtn = document.querySelector('button[data-action="decrement"]');
console.log(decrementBtn.dataset.action);
const incrementBtn = document.querySelector('button[data-action="increment"]');
console.log(incrementBtn.dataset.action);
const valueEL = document.querySelector('#value');


const counterValue = {
    value: 0,
    increment () {
        this.value += 1;
    },
    decrement () {
        this.value -= 1;
    }
};

decrementBtn.addEventListener('click', () => { 
    counterValue.decrement();
    console.log('counterValue :>> ', counterValue.value);
    valueEL.textContent = counterValue.value;
}
);

incrementBtn.addEventListener('click', () => {
    counterValue.increment();
    console.log('counterValue :>> ', counterValue.value);
    valueEL.textContent = counterValue.value;
});


