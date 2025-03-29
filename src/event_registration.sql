CREATE DATABASE event_registration;
USE event_registration;



CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userID VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL  -- Store hashed passwords for security
);


INSERT INTO users (userID, password) VALUES 
('admin', '1234'),
('user1', 'pass1'),
('user2', 'pass2');


