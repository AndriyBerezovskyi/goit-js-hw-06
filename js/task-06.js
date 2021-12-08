const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onInputCheckSymbols);


function onInputCheckSymbols(event) {
    if (event.currentTarget.value.length === 6) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid')
    }
    else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('433965499valid')
    }
}