

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import "./Register.css"; // External embedded CSS

// const Register = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState({ name: "", email: "", password: "", confirmPassword: "" });
//   const [error, setError] = useState("");

//   const validateForm = () => {
//     if (user.name.trim().length < 3) {
//       return "Full name must be at least 3 characters long.";
//     }
//     if (!/^\S+@\S+\.\S+$/.test(user.email)) {
//       return "Please enter a valid email address.";
//     }
//     if (user.password.length < 8) {
//       return "Password must be at least 8 characters long.";
//     }
//     if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(user.password)) {
//       return "Password must include uppercase, lowercase, number, and special character.";
//     }
//     if (user.password !== user.confirmPassword) {
//       return "Passwords do not match.";
//     }
//     if (/\s/.test(user.password)) {
//       return "Password cannot contain spaces.";
//     }
//     return "";
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     const validationError = validateForm();
//     if (validationError) {
//       setError(validationError);
//       return;
//     }

//     try {
//       await axios.post(`${process.env.REACT_APP_API_URL}/users/register`, {
//         name: user.name.trim(),
//         email: user.email.trim(),
//         password: user.password
//       });
//       alert("Registered Successfully ✅");
//       navigate("/login");
//     } catch (err) {
//       console.error(err);
//       setError("Registration failed! Try again.");
//     }
//   };

//   return (
//     <div className="register-container">
//       <form onSubmit={handleSubmit} className="register-form">
//         <h2 className="register-heading">Register</h2>

//         {error && <p className="register-error">{error}</p>}

//         <input
//           type="text"
//           placeholder="Full Name"
//           value={user.name}
//           onChange={(e) => setUser({ ...user, name: e.target.value })}
//           required
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           value={user.email}
//           onChange={(e) => setUser({ ...user, email: e.target.value })}
//           required
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={user.password}
//           onChange={(e) => setUser({ ...user, password: e.target.value })}
//           required
//         />

//         <input
//           type="password"
//           placeholder="Confirm Password"
//           value={user.confirmPassword}
//           onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
//           required
//         />

//         <button type="submit">Register</button>

//         <p className="register-link-text">
//           Already have an account?{" "}
//           <Link to="/login" className="register-link">Login</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Register;






import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");

  const validateForm = () => {
    if (user.name.trim().length < 3) {
      return "Full name must be at least 3 characters long.";
    }
    if (!/^\S+@\S+\.\S+$/.test(user.email)) {
      return "Please enter a valid email address.";
    }
    if (user.password.length < 8) {
      return "Password must be at least 8 characters long.";
    }
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(user.password)) {
      return "Password must include uppercase, lowercase, number, and special character.";
    }
    if (user.password !== user.confirmPassword) {
      return "Passwords do not match.";
    }
    if (/\s/.test(user.password)) {
      return "Password cannot contain spaces.";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/users/register`, {
        name: user.name.trim(),
        email: user.email.trim(),
        password: user.password,
      });
      alert("Registered Successfully ✅");
      navigate("/login");
    } catch (err) {
      console.error(err);
      setError("Registration failed! Try again.");
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2 className="register-heading">Register</h2>

        {error && <p className="register-error">{error}</p>}

        <input
          type="text"
          placeholder="Full Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={user.confirmPassword}
          onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
          required
        />

        <button type="submit">Register</button>

        <p className="register-link-text">
          Already have an account?{" "}
          <Link to="/login" className="register-link">
            Login
          </Link>
        </p>

        {/* Back button below the Login link */}
        <button1
          type="button"
          className="back-btn"
          onClick={() => navigate("/")}
          aria-label="Back to Home"
          width="10px"
        >
          ← Back to Home
        </button1>
      </form>
    </div>
  );
};

export default Register;
