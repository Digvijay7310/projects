import React, { useState } from "react";
import { useUser } from "./context/UserContext";

const Login = () => {
  const { user, login, logout } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Enter both email and password");
      return;
    }
    login(email, password);
  };

  if (user) {
    return (
      <div className="p-8">
        <h2 className="text-2xl mb-2">Welcome, {user.email}!</h2>
        <p>Your password is: {user.password}</p>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded mt-4"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleLogin}
      className="max-w-md mx-auto mt-10 p-8 bg-white rounded shadow"
    >
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
