document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const userIdInput = document.getElementById("User ID").value.trim();
        const passwordInput = document.getElementById("password").value.trim();
        const messageDiv = document.getElementById("message");

        // Set valid credentials (for testing purposes)
        const validUserId = "admin";
        const validPassword = "password123";

        if (userIdInput === "" || passwordInput === "") {
            messageDiv.innerHTML = "<p style='color: red;'>User ID and Password cannot be empty.</p>";
            return;
        }

        if (userIdInput !== validUserId || passwordInput !== validPassword) {
            messageDiv.innerHTML = "<p style='color: red;'>Invalid User ID or Password!</p>";
            return;
        }

        // If login is successful
        messageDiv.innerHTML = "<p style='color: green;'>Login Successful! Redirecting...</p>";

        // Redirect after 2 seconds (example)
        setTimeout(() => {
            window.location.href = "dashboard.html"; // Change to your actual redirect page
        }, 2000);
    });
});
