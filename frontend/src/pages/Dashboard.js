



// import React from "react";
// import Webcam from "react-webcam";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const navigate = useNavigate();

//   const captureAndMarkAttendance = async () => {
//     const token = localStorage.getItem("token");

//     const screenshot = webcamRef.current.getScreenshot();
//     if (!screenshot) {
//       alert("⚠️ Unable to capture image. Please allow camera access.");
//       return;
//     }

//     try {
//       await axios.post(
//         `${process.env.REACT_APP_API_URL}/attendance/mark`,
//         { image: screenshot },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       alert("✅ Attendance marked successfully!");
//     } catch (error) {
//       console.error(error);
//       alert("❌ Failed to mark attendance.");
//     }
//   };

//   const webcamRef = React.useRef(null);

//   // Logout handler
//   const handleLogout = () => {
//     // You can also clear tokens or do other logout logic here
//     localStorage.removeItem("token");
//     navigate("/"); // Redirect to Home Page
//   };

//   return (
//     <>
//       {/* Responsive Navbar */}
//       <nav style={styles.navbar}>
//         <div style={styles.logo}>Attendance App</div>

//         {/* Logout button on right */}
//         <button style={styles.logoutBtn} onClick={handleLogout}>
//           Logout
//         </button>
//       </nav>

//       <div style={styles.container}>
//         <h2 style={styles.heading}>📸 Face Attendance</h2>

//         <Webcam
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           style={styles.webcam}
//           videoConstraints={{
//             width: 350,
//             facingMode: "user",
//           }}
//         />

//         <div style={styles.buttonContainer}>
//           <button style={styles.button} onClick={captureAndMarkAttendance}>
//             Mark Attendance
//           </button>
//           <button
//             style={{ ...styles.button, backgroundColor: "#444" }}
//             onClick={() => (window.location.href = "/my-attendance")}
//           >
//             View My Attendance
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };


// const styles = {
//   navbar: {
//     width: "100%",            // full width but inside maxWidth container
//     maxWidth: "980px",        // max width to center on large screens
//     margin: "0 auto",         // center horizontally
//     padding: "10px 20px",
//     backgroundColor: "#1976d2",
//     color: "#fff",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     position: "sticky",
//     top: 0,
//     zIndex: 1000,
//     boxSizing: "border-box",  // include padding in width calc
//   },
//   logo: {
//     fontSize: "clamp(16px, 2vw, 20px)",
//     fontWeight: "bold",
//   },
//   logoutBtn: {
//     backgroundColor: "transparent",
//     border: "2px solid white",
//     color: "white",
//     padding: "8px 14px",
//     borderRadius: "6px",
//     cursor: "pointer",
//     fontSize: "clamp(14px, 2vw, 16px)",
//     transition: "background-color 0.3s, color 0.3s",
//   },
//   container: {
//     width: "100%",            // use full container width, not 100vw
//     maxWidth: "980px",        // max width to center on large screens
//     minHeight: "100vh",
//     backgroundColor: "#f5f5f5",
//     boxSizing: "border-box",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: "20px",
//     margin: "0 auto",         // center horizontally
//   },
//   heading: {
//     fontSize: "clamp(20px, 5vw, 28px)",
//     textAlign: "center",
//     marginBottom: "20px",
//     color: "#222",
//   },
//   webcam: {
//     width: "100%",
//     maxWidth: "350px",
//     borderRadius: "10px",
//     marginBottom: "20px",
//     boxShadow: "0 0 10px rgba(0,0,0,0.1)",
//   },
//   buttonContainer: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//     width: "100%",
//     maxWidth: "350px",
//   },
//   button: {
//     width: "100%",
//     padding: "12px",
//     fontSize: "clamp(14px, 2.5vw, 16px)",
//     borderRadius: "6px",
//     border: "none",
//     backgroundColor: "#1976d2",
//     color: "#fff",
//     cursor: "pointer",
//     transition: "background 0.3s",
//   },
// };




// export default Dashboard;








import React from "react";
import Webcam from "react-webcam";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const captureAndMarkAttendance = async () => {
    const token = localStorage.getItem("token");

    const screenshot = webcamRef.current.getScreenshot();
    if (!screenshot) {
      alert("⚠️ Unable to capture image. Please allow camera access.");
      return;
    }

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/attendance/mark`,
        { image: screenshot },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      alert("✅ Attendance marked successfully!");
    } catch (error) {
      console.error(error);
      alert("❌ Failed to mark attendance.");
    }
  };

  const webcamRef = React.useRef(null);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // Redirect to Home Page
  };

  // Back button handler
  const handleBack = () => {
    navigate("/dashboard2");
  };

  return (
    <>
      {/* Responsive Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>Attendance App</div>

        {/* Logout button on right */}
        <button style={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      </nav>

      {/* Back button below navbar */}
      <div style={styles.backBtnContainer}>
        <button style={styles.backBtn} onClick={handleBack}>
          ← Back
        </button>
      </div>

      <div style={styles.container}>
        <h2 style={styles.heading}>📸 Face Attendance</h2>

        <Webcam
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          style={styles.webcam}
          videoConstraints={{
            width: 350,
            facingMode: "user",
          }}
        />

        <div style={styles.buttonContainer}>
          <button style={styles.button} onClick={captureAndMarkAttendance}>
            Mark Attendance
          </button>
          <button
            style={{ ...styles.button, backgroundColor: "#444" }}
            onClick={() => (window.location.href = "/my-attendance")}
          >
            View My Attendance
          </button>
        </div>
      </div>
    </>
  );
};

const styles = {
  navbar: {
    width: "100%",
    maxWidth: "980px",
    margin: "0 auto",
    padding: "10px 20px",
    backgroundColor: "#1976d2",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxSizing: "border-box",
  },
  logo: {
    fontSize: "clamp(16px, 2vw, 20px)",
    fontWeight: "bold",
  },
  logoutBtn: {
    backgroundColor: "transparent",
    border: "2px solid white",
    color: "white",
    padding: "8px 14px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "clamp(14px, 2vw, 16px)",
    transition: "background-color 0.3s, color 0.3s",
  },
  backBtnContainer: {
    width: "100%",
    maxWidth: "980px",
    margin: "10px auto 0 auto",
    padding: " 30px",
    boxSizing: "border-box",
  },
  backBtn: {
    backgroundColor: "#1976d2",
    border: "none",
    color: "#fff",
    padding: "8px 18px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "clamp(14px, 2vw, 16px)",
    transition: "background-color 0.3s",
  },
  container: {
    width: "100%",
    maxWidth: "980px",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "clamp(20px, 5vw, 28px)",
    textAlign: "center",
    marginBottom: "20px",
    color: "#222",
  },
  webcam: {
    width: "100%",
    maxWidth: "350px",
    borderRadius: "10px",
    marginBottom: "20px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "100%",
    maxWidth: "350px",
  },
  button: {
    width: "100%",
    padding: "12px",
    fontSize: "clamp(14px, 2.5vw, 16px)",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#1976d2",
    color: "#fff",
    cursor: "pointer",
    transition: "background 0.3s",
  },
};

export default Dashboard;
