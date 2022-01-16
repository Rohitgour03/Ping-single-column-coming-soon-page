const form = document.querySelector('.email-form');
const input = form.querySelector('#email');
const error = form.querySelector('.error-msg');
const submit = form.querySelector('.cta-btn');

function validate() {
    let allValid = true;
    if (email.value.trim() == "") {
        form.classList.add('error');
        error.textContent = "Email cannot be Empty";
        allValid = false;
    } else if (!validateEmail(email.value)) {
        form.classList.add('error');
        error.textContent = "Provide a valid email address";
        allValid = false;
    } else {
        form.classList.remove('error');
    }

    if (allValid) {
        form.submit();
    }
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

submit.addEventListener('click', (e) => {
    e.preventDefault();
    validate();
});