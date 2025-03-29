document.getElementById("createIdForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let userID = document.getElementById("user-id").value.trim();
    let password = document.getElementById("new-password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        document.getElementById("message").innerHTML = "<p style='color:red;'>Passwords do not match!</p>";
        return;
    }

    fetch("create_id.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `userID=${encodeURIComponent(userID)}&password=${encodeURIComponent(password)}`
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "success") {
            alert("User ID created successfully!");
            window.location.href = "login.html"; // Redirect to login
        } else {
            document.getElementById("message").innerHTML = `<p style='color:red;'>${data.message}</p>`;
        }
    })
    .catch(error => console.error("Error:", error));
});
