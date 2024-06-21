js for home,login,register pages

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".login-form");
    const registerForm = document.querySelector(".register-form form");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
            let emailError = document.getElementById("email-error");
            let passwordError = document.getElementById("password-error");
            let isValid = true;

            emailError.textContent = "";
            passwordError.textContent = "";

            if (!validateEmail(email)) {
                emailError.textContent = "Please enter a valid email address.";
                isValid = false;
            }

            if (password.length < 6) {
                passwordError.textContent = "Password must be at least 6 characters.";
                isValid = false;
            }

            if (!isValid) {
                event.preventDefault();
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", function(event) {
            let email = document.getElementById("new-email").value;
            let password = document.getElementById("new-password").value;
            let confirmPassword = document.getElementById("confirm-password").value;
            let emailError = document.getElementById("new-email-error");
            let passwordError = document.getElementById("new-password-error");
            let confirmPasswordError = document.getElementById("confirm-password-error");
            let isValid = true;

            emailError.textContent = "";
            passwordError.textContent = "";
            confirmPasswordError.textContent = "";

            if (!validateEmail(email)) {
                emailError.textContent = "Please enter a valid email address.";
                isValid = false;
            }

            if (password.length < 6) {
                passwordError.textContent = "Password must be at least 6 characters.";
                isValid = false;
            }

            if (password !== confirmPassword) {
                confirmPasswordError.textContent = "Passwords do not match.";
                isValid = false;
            }

            if (!isValid) {
                event.preventDefault();
            } else {
                event.preventDefault(); // Prevent form submission to show pop-up
                popup.style.display = "block";
            }
        });
    }

    closePopup.addEventListener("click", function() {
        popup.style.display = "none";
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
