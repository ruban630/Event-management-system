<?php
header("Content-Type: application/json");

// Database connection
$host = "localhost";
$user = "root";
$password = "";
$database = "event_management";

$conn = new mysqli($host, $user, $password, $database);

// Check database connection
if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "Database connection failed: " . $conn->connect_error]);
    exit();
}

// Check if data is received via POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
    exit();
}

// Ensure all form fields are received
if (!isset($_POST["userID"], $_POST["password"], $_POST["confirmPassword"])) {
    echo json_encode(["status" => "error", "message" => "Missing form data"]);
    exit();
}

// Get and sanitize POST data
$userID = trim($_POST["userID"]);
$password = trim($_POST["password"]);
$confirmPassword = trim($_POST["confirmPassword"]);

// Validate input fields
if (empty($userID) || empty($password) || empty($confirmPassword)) {
    echo json_encode(["status" => "error", "message" => "All fields are required!"]);
    exit();
}

if (strlen($userID) < 4) {
    echo json_encode(["status" => "error", "message" => "User ID must be at least 4 characters long!"]);
    exit();
}

if ($password !== $confirmPassword) {
    echo json_encode(["status" => "error", "message" => "Passwords do not match!"]);
    exit();
}

if (strlen($password) < 6) {
    echo json_encode(["status" => "error", "message" => "Password must be at least 6 characters long!"]);
    exit();
}

// Check if user already exists
$stmt = $conn->prepare("SELECT userID FROM users WHERE userID = ?");
if (!$stmt) {
    echo json_encode(["status" => "error", "message" => "SQL error: " . $conn->error]);
    exit();
}
$stmt->bind_param("s", $userID);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    echo json_encode(["status" => "error", "message" => "User ID already exists!"]);
    $stmt->close();
    $conn->close();
    exit();
}
$stmt->close();

// Hash the password before storing
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Insert new user into the database
$stmt = $conn->prepare("INSERT INTO users (userID, password) VALUES (?, ?)");
if (!$stmt) {
    echo json_encode(["status" => "error", "message" => "SQL error: " . $conn->error]);
    exit();
}
$stmt->bind_param("ss", $userID, $hashedPassword);

if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "Registration successful!"]);
} else {
    echo json_encode(["status" => "error", "message" => "Error registering user!"]);
}

// Close database connections
$stmt->close();
$conn->close();
?>
