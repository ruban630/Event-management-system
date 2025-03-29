import React, { useState } from "react";

const AdminLogin = ({ onLogin }) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const correctUserId = "admin";
  const correctPassword = "password123";

  const handleLogin = () => {
    if (userId === correctUserId && password === correctPassword) {
      onLogin(true);
    } else {
      alert("Invalid User ID or Password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
};

const AdminEditor = () => {
  const [htmlContent, setHtmlContent] = useState("<h1>Welcome to the Admin Panel</h1>");

  const handleSave = () => {
    alert("Changes Saved Successfully!");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Edit Index.html</h2>
      <textarea
        className="w-full h-64 border p-2"
        value={htmlContent}
        onChange={(e) => setHtmlContent(e.target.value)}
      ></textarea>
      <button
        onClick={handleSave}
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        Save Changes
      </button>
    </div>
  );
};

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? <AdminEditor /> : <AdminLogin onLogin={setIsLoggedIn} />;
};

export default AdminPage;
