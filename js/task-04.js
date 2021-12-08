let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const spanValue = document.querySelector('#value');

incrementBtn.addEventListener('click', () => {
    spanValue.textContent = counterValue += 1;
});

decrementBtn.addEventListener('click', () => {
    spanValue.textContent = counterValue -= 1;
});