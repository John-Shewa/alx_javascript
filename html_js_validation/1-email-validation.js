function validateEmail(email) {
    const  regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

const form = document.getElementById('emailForm');
const email = document.getElementById('email');
const error = document.getElementById('error');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (validateEmail(email.value)){
        event.target.submit();
    } else{
        error.textContent = 'please enter a valid email address.';
    }
})