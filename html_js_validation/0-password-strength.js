function validatePassword() {
    const password = document.getElementById('password').value;

    if (password.length < 8){
        document.getElementById('error').innerHTML = 'password must be at least 8 characters long';
        return false;
    }

    if (!/[A-Z]/.test(password)) {
        document.getElementById('error').innerHTML = 'The password must contain at least one uppercase letter';
        return false;
    }

    if (!/[a-z]/.test(password)) {
        document.getElementById('error').innerHTML = 'The password must contain at least one lowercase letter';
        return false;
    }

    if (!/[0-9]/.test(password)) {
        document.getElementById('error').innerHTML = 'The password must contain at least number';
        return false;
    }

    if (!/[^A-Za-z0-9]/.test(password)) {
        document.getElementById('error').innerHTML = 'The password must contain at least one special character (e.g., !@#$%^&*)';
        return false;
    }

    return true;
}

document.addEventListener('DOMContentLoaded', () => {
    const passwordForm = document.getElementById('passwordForm');
    if (passwordForm) {
        passwordForm.addEventListener('submit', (event) => {
            event.preventDefault();
            if (!validatePassword()) {
                event.target.submit();
            }
        })
    }
});