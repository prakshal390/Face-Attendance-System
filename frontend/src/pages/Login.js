// import React, { useState } from "react";
// import axios from "axios";

// const Login = () => {
//   const [user, setUser] = useState({ email: "", password: "" });

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const res = await axios.post(`${process.env.REACT_APP_API_URL}/users/login`, user);
//     localStorage.setItem("token", res.data.token);
//     alert("Login Success");
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <h2>Login</h2>
//       <input placeholder="Email" onChange={(e) => setUser({...user, email: e.target.value})} />
//       <input placeholder="Password" type="password" onChange={(e) => setUser({...user, password: e.target.value})} />
//       <button type="submit">Login</button>
//     </form>
//   );
// };
// export default Login;


// import React, { useState } from "react";
// import axios from "axios";

// const Login = () => {
//   const [user, setUser] = useState({ email: "", password: "" });

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(`${process.env.REACT_APP_API_URL}/users/login`, user);
//       localStorage.setItem("token", res.data.token);
//       alert("Login Success");
//       // window.location.href = "/dashboard"; // Optional redirect
//     } catch (err) {
//       alert("Login Failed");
//       console.error(err);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <form onSubmit={handleLogin} style={styles.form}>
//         <h2 style={styles.heading}>Login</h2>

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

//         <button type="submit" style={styles.button}>Login</button>
//       </form>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     padding: "20px",
//     boxSizing: "border-box",
//     backgroundColor: "#f5f5f5",
//   },
//   form: {
//     width: "100%",
//     maxWidth: "400px",
//     padding: "30px",
//     backgroundColor: "white",
//     borderRadius: "10px",
//     boxShadow: "0 0 10px rgba(0,0,0,0.1)",
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//   },
//   heading: {
//     margin: "0 0 20px",
//     fontSize: "24px",
//     textAlign: "center",
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
//     backgroundColor: "#1976d2",
//     color: "white",
//     border: "none",
//     cursor: "pointer",
//   },
// };

// export default Login;





// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError(""); // Clear previous error

//     try {
//       const res = await axios.post(`${process.env.REACT_APP_API_URL}/users/login`, user);

//       // Store token if returned by backend
//       if (res.data.token) {
//         localStorage.setItem("token", res.data.token);
//       }

//       alert("Login Success ✅");
//       navigate("/dashboard"); // Redirect to dashboard
//     } catch (err) {
//       console.error(err);
//       setError("Login failed! Please check your credentials.");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <form onSubmit={handleLogin} style={styles.form}>
//         <h2 style={styles.heading}>Login</h2>

//         {error && <p style={styles.error}>{error}</p>}

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

//         <button type="submit" style={styles.button}>Login</button>
//       </form>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     padding: "20px",
//     backgroundColor: "#f5f5f5",
//   },
//   form: {
//     width: "100%",
//     maxWidth: "400px",
//     padding: "30px",
//     backgroundColor: "white",
//     borderRadius: "10px",
//     boxShadow: "0 0 10px rgba(0,0,0,0.1)",
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//   },
//   heading: {
//     margin: "0 0 20px",
//     fontSize: "24px",
//     textAlign: "center",
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
//     backgroundColor: "#1976d2",
//     color: "white",
//     border: "none",
//     cursor: "pointer",
//   },
//   error: {
//     color: "red",
//     fontSize: "14px",
//     textAlign: "center",
//   },
// };

// export default Login;





import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/users/login`, user);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }

      alert("Login Success ✅");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Login failed! Please check your credentials.");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.form}>
        <h2 style={styles.heading}>Login</h2>

        {error && <p style={styles.error}>{error}</p>}

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

        <button type="submit" style={styles.button}>Login</button>

        <p style={styles.linkText}>
          Don't have an account?{" "}
          <Link to="/register" style={styles.link}>Create one</Link>
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
    height: "100vh",
    padding: "20px",
    backgroundColor: "#f5f5f5",
  },
  form: {
    width: "100%",
    maxWidth: "400px",
    padding: "30px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  heading: {
    margin: "0 0 20px",
    fontSize: "24px",
    textAlign: "center",
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
    backgroundColor: "#1976d2",
    color: "white",
    border: "none",
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

export default Login;
