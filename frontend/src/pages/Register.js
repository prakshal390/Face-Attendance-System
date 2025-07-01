// import React, { useState } from "react";
// import axios from "axios";

// const Register = () => {
//   const [user, setUser] = useState({ name: "", email: "", password: "" });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post(`${process.env.REACT_APP_API_URL}/users/register`, user);
//     alert("Registered Successfully");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Register</h2>
//       <input placeholder="Name" onChange={(e) => setUser({...user, name: e.target.value})} />
//       <input placeholder="Email" onChange={(e) => setUser({...user, email: e.target.value})} />
//       <input placeholder="Password" type="password" onChange={(e) => setUser({...user, password: e.target.value})} />
//       <button type="submit">Register</button>
//     </form>
//   );
// };
// export default Register;





// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState({ name: "", email: "", password: "" });
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       await axios.post(`${process.env.REACT_APP_API_URL}/users/register`, user);
//       alert("Registered Successfully ✅");
//       navigate("/login");
//     } catch (err) {
//       console.error(err);
//       setError("Registration failed! Try again.");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <h2 style={styles.heading}>Register</h2>

//         {error && <p style={styles.error}>{error}</p>}

//         <input
//           type="text"
//           placeholder="Full Name"
//           value={user.name}
//           onChange={(e) => setUser({ ...user, name: e.target.value })}
//           required
//           style={styles.input}
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           value={user.email}
//           onChange={(e) => setUser({ ...user, email: e.target.value })}
//           required
//           style={styles.input}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={user.password}
//           onChange={(e) => setUser({ ...user, password: e.target.value })}
//           required
//           style={styles.input}
//         />

//         <button type="submit" style={styles.button}>Register</button>
//       </form>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     minHeight: "100vh",
//     padding: "20px",
//     boxSizing: "border-box",
//     backgroundColor: "#f5f5f5",
//   },
//   form: {
//     width: "100%",
//     maxWidth: "400px",
//     backgroundColor: "white",
//     padding: "30px",
//     borderRadius: "10px",
//     boxShadow: "0 0 10px rgba(0,0,0,0.1)",
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//   },
//   heading: {
//     marginBottom: "20px",
//     textAlign: "center",
//     fontSize: "24px",
//     color: "#333",
//   },
//   input: {
//     padding: "12px",
//     fontSize: "16px",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//     outline: "none",
//   },
//   button: {
//     padding: "12px",
//     fontSize: "16px",
//     borderRadius: "5px",
//     border: "none",
//     backgroundColor: "#1976d2",
//     color: "white",
//     cursor: "pointer",
//   },
//   error: {
//     color: "red",
//     fontSize: "14px",
//     textAlign: "center",
//   },
// };

// export default Register;








import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/users/register`, user);
      alert("Registered Successfully ✅");
      navigate("/login");
    } catch (err) {
      console.error(err);
      setError("Registration failed! Try again.");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Register</h2>

        {error && <p style={styles.error}>{error}</p>}

        <input
          type="text"
          placeholder="Full Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          required
          style={styles.input}
        />

        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>Register</button>

        <p style={styles.linkText}>
          Already have an account?{" "}
          <Link to="/login" style={styles.link}>Login</Link>
        </p>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
    boxSizing: "border-box",
    backgroundColor: "#f5f5f5",
  },
  form: {
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  heading: {
    marginBottom: "20px",
    textAlign: "center",
    fontSize: "24px",
    color: "#333",
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#1976d2",
    color: "white",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "14px",
    textAlign: "center",
  },
  linkText: {
    textAlign: "center",
    fontSize: "14px",
    marginTop: "10px",
  },
  link: {
    color: "#1976d2",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Register;
