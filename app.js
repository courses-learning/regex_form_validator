document.querySelector('#name').addEventListener('blur', validateName);
document.querySelector('#postcode').addEventListener('blur', validatePostcode);
document.querySelector('#email').addEventListener('blur', validateEmail);
document.querySelector('#phone').addEventListener('blur', validatePhone);

function validateName() {
    const name = document.querySelector('#name');
    const re = /^[a-zA-Z]{2,10}$/;

    if (!re.test(name.value)) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
        name.classList.add('is-valid');
    }
}

function validatePostcode() {
    const postcode = document.querySelector('#postcode');
    const re = /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/;

    if (!re.test(postcode.value)) {
        postcode.classList.add('is-invalid');
    } else {
        postcode.classList.remove('is-invalid');
        postcode.classList.add('is-valid');
    }
}

function validateEmail() {
    const email = document.querySelector('#email');
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(email.value)) {
     email.classList.add('is-invalid');
    } else {
     email.classList.remove('is-invalid');
     email.classList.add('is-valid');
    }
}

function validatePhone() {
    const phone = document.querySelector('#phone');
    const re = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;

    if (!re.test(phone.value)) {
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
        phone.classList.add('is-valid');
    }
}
