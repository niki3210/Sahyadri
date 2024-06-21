// js for home,login,register pages

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

// dashboard.js

document.addEventListener("DOMContentLoaded", function() {
    // Simulating data update
    setInterval(function() {
        updateSalesData();
    }, 5000); // Update every 5 seconds

    function updateSalesData() {
        // Example: Fetch new data from server and update the table
        // This function can fetch JSON data from an API and update the table rows
        // For simplicity, here we just update the sample data
        const salesData = [
            { product: "Product 1", unitsSold: 180, revenue: 27000 },
            { product: "Product 2", unitsSold: 100, revenue: 25000 },
            { product: "Product 3", unitsSold: 140, revenue: 35000 }
        ];

        const tableBody = document.querySelector(".sales-table tbody");
        tableBody.innerHTML = "";

        salesData.forEach(function(item) {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.product}</td>
                <td>${item.unitsSold}</td>
                <td>${item.revenue}</td>
            `;
            tableBody.appendChild(row);
        });
    }
});
