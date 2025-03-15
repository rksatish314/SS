// validation.js - Form validation for Signup, Login, and Forgot Password

// Function to validate the signup form
function validateSignupForm() {
    let name = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (name === "" || email === "" || password === "") {
        alert("All fields are required!");
        return false;
    }
    
    if (!validateEmail(email)) {
        alert("Please enter a valid email address!");
        return false;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long!");
        return false;
    }

    return true;
}

// Function to validate the login form
function validateLoginForm() {
    let email = document.getElementById("login-email").value.trim();
    let password = document.getElementById("login-password").value.trim();

    if (email === "" || password === "") {
        alert("Both fields are required!");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address!");
        return false;
    }

    return true;
}

// Function to validate the forgot password form
function validateForgotPasswordForm() {
    let email = document.getElementById("forgot-email").value.trim();

    if (email === "") {
        alert("Email is required!");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address!");
        return false;
    }

    return true;
}

// Helper function to validate email format
function validateEmail(email) {
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return emailPattern.test(email);
}
