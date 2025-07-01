// import React from "react";
// const Home = () => <h2>Welcome to Face Attendance System</h2>;
// export default Home;

// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Welcome to Face Attendance System</h2>
//       <div style={styles.buttonContainer}>
//         <button style={styles.button} onClick={() => navigate("/login")}>
//           Login
//         </button>
//         <button style={styles.button} onClick={() => navigate("/register")}>
//           Register
//         </button>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     textAlign: "center",
//     marginTop: "20vh",
//   },
//   heading: {
//     fontSize: "28px",
//     marginBottom: "20px",
//   },
//   buttonContainer: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "20px",
//   },
//   button: {
//     padding: "10px 20px",
//     fontSize: "16px",
//     cursor: "pointer",
//     borderRadius: "8px",
//     backgroundColor: "#1976d2",
//     color: "white",
//     border: "none",
//   },
// };

// export default Home;








// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Welcome to Face Attendance System</h2>

//       <div style={styles.buttonContainer}>
//         <button style={styles.button} onClick={() => navigate("/login")}>
//           Login
//         </button>
//         <button style={styles.button} onClick={() => navigate("/register")}>
//           Register
//         </button>
//       </div>

//       <div style={styles.footer}>
//         <p style={styles.madeBy}>
//           Made by <strong>Prakshal Jain</strong>
//         </p>
//         <div style={styles.icons}>
//           <a
//             href="https://github.com/prakshaljain"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{ color: "#000" }} // GitHub black
//           >
//             <FaGithub size={24} />
//           </a>
//           <a
//             href="https://instagram.com/prakshaljain"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{ color: "#e1306c" }} // Instagram red/pink
//           >
//             <FaInstagram size={24} />
//           </a>
//           <a
//             href="https://linkedin.com/in/prakshaljain"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{ color: "#0077b5" }} // LinkedIn blue
//           >
//             <FaLinkedin size={24} />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: "flex", // flex layout
//     flexDirection: "column", // stack elements vertically
//     justifyContent: "flex-start",
//     minHeight: "100vh", // full height
//     boxSizing: "border-box",
//     padding: "20px",
//     backgroundColor: "#f9f9f9",
//   },
//   heading: {
//     fontSize: "28px",
//     marginBottom: "30px",
//     textAlign: "center",
//     color: "#333",
//   },
//   buttonContainer: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "20px",
//     flexWrap: "wrap",
//     marginBottom: "40px",
//   },
//   button: {
//     padding: "12px 24px",
//     fontSize: "16px",
//     cursor: "pointer",
//     borderRadius: "8px",
//     backgroundColor: "#1976d2",
//     color: "#fff",
//     border: "none",
//     transition: "0.3s",
//   },
//   footer: {
//     marginTop: "auto", // ✅ pushes footer to bottom
//     textAlign: "center",
//     paddingTop: "30px",
//   },
//   madeBy: {
//     fontSize: "16px",
//     color: "#555",
//     marginBottom: "10px",
//   },
//   icons: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "20px",
//   },
//   icon: {
//     color: "#1976d2",
//     textDecoration: "none",
//   },
// };

// export default Home;






import React from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Welcome to Face Attendance System</h2>

      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => navigate("/login")}>
          Login
        </button>
        <button style={styles.button} onClick={() => navigate("/register")}>
          Register
        </button>
      </div>

      <div style={styles.footer}>
        <p style={styles.madeBy}>
          Made by <strong>Prakshal Jain</strong>
        </p>
        <div style={styles.icons}>
          <a
            href="https://github.com/prakshal390"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#000" }}
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://instagram.com/developerpj"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#e1306c" }}
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/prakshal-jain-0679a4286/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0077b5" }}
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "100vh",
    boxSizing: "border-box",
    padding: "20px",
    backgroundColor: "#f9f9f9",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "30px",
    textAlign: "center",
    color: "#333",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginBottom: "40px",
  },
  button: {
    padding: "12px 24px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "8px",
    backgroundColor: "#1976d2",
    color: "#fff",
    border: "none",
    width: "150px",
    textAlign: "center",
    transition: "0.3s",
  },
  footer: {
    marginTop: "auto",
    textAlign: "center",
    paddingTop: "30px",
  },
  madeBy: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "10px",
  },
  icons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
};

export default Home;
