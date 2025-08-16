



import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const validateForm = () => {
    if (!user.email.trim() || !user.password.trim()) {
      return "All fields are required.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
      return "Please enter a valid email address.";
    }
    if (user.password.length < 5) {
      return "Password must be at least 5 characters long.";
    }
    if (user.password !== user.password.trim()) {
      return "Password cannot start or end with spaces.";
    }
    return "";
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/users/login`,
        user
      );

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }

      alert("Login Success ✅");
      navigate("/dashboard2");
    } catch (err) {
      console.error(err);
      setError("Login failed! Please check your credentials.");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2 className="login-heading">Login</h2>

        {error && <p className="error-msg">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="login-input"
        />

        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="login-input"
        />

        <button type="submit" className="login-btn">
          Login
        </button>

        <p className="login-link-text">
          Don't have an account?{" "}
          <Link to="/register" className="login-link">
            Create one
          </Link>
        </p>

        {/* Back button below the create link */}
        <button
          type="button"
          className="back-btn"
          onClick={() => navigate("/")}
          aria-label="Back to Home"
        >
          ← Back to Home
        </button>
      </form>
    </div>
  );
};

export default Login;
