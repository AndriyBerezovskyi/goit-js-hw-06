const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const emailInput = event.currentTarget.elements.email.value;
    const passwordInput = event.currentTarget.elements.password.value;

    const formObj = {
        email: emailInput,
        password: passwordInput,
    }

    if (emailInput === '' || passwordInput === '') {
        alert ('Все поля должны быть заполнены')
    }
    else {
        formEl.reset();
        console.log(formObj);
    }
}
