<?php
session_start();
include 'db_connect.php'; // Include database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userID = $_POST['userID'];
    $password = $_POST['password'];

    // Hash the password before storing
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Prepare the SQL query
    $sql = "INSERT INTO users (userID, password) VALUES (?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $userID, $hashedPassword);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "User ID created successfully."]);
    } else {
        echo json_encode(["status" => "error", "message" => "User ID already exists or an error occurred."]);
    }
}
?>
