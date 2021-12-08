const inputEl = document.querySelector('#font-size-control');
inputEl.addEventListener('input', onInputChangeFontSize);

const textEl = document.querySelector('#text');

function onInputChangeFontSize(event) {
    textEl.style.fontSize = inputEl.value + 'px'
}


