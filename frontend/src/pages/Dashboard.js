// import React from "react";
// import Webcam from "react-webcam";
// import axios from "axios";

// const Dashboard = () => {
//   const webcamRef = React.useRef(null);

//   const captureAndMarkAttendance = async () => {
//     const token = localStorage.getItem("token");
//     await axios.post(
//       `${process.env.REACT_APP_API_URL}/attendance/mark`,
//       {},
//       { headers: { Authorization: `Bearer ${token}` } }
//     );
//     alert("Attendance marked!");
//   };

//   return (
//     <div>
//       <h2>Face Attendance</h2>
//       <Webcam ref={webcamRef} screenshotFormat="image/jpeg" />
//       <button onClick={captureAndMarkAttendance}>Mark Attendance</button>
//     </div>
//   );
// };
// export default Dashboard;






// import React, { useRef } from "react";
// import Webcam from "react-webcam";
// import axios from "axios";

// const Dashboard = () => {
//   const webcamRef = useRef(null);

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

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Face Attendance</h2>

//       <Webcam
//         ref={webcamRef}
//         screenshotFormat="image/jpeg"
//         style={styles.webcam}
//         videoConstraints={{
//           width: 350,
//           facingMode: "user",
//         }}
//       />

//       <button style={styles.button} onClick={captureAndMarkAttendance}>
//         Mark Attendance
//       </button>
//       <button
//         onClick={() => (window.location.href = "/my-attendance")}
//         style={styles.button}
//       >
//         View My Attendance
//       </button>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     padding: "20px",
//     minHeight: "100vh",
//     backgroundColor: "#f0f0f0",
//     boxSizing: "border-box",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   heading: {
//     fontSize: "24px",
//     marginBottom: "20px",
//     textAlign: "center",
//   },
//   webcam: {
//     width: "100%",
//     maxWidth: "350px",
//     borderRadius: "10px",
//     marginBottom: "20px",
//   },
//   button: {
//     padding: "12px 24px",
//     fontSize: "16px",
//     borderRadius: "6px",
//     border: "none",
//     backgroundColor: "#1976d2",
//     color: "#fff",
//     cursor: "pointer",
//   },
// };

// export default Dashboard;







import React, { useRef } from "react";
import Webcam from "react-webcam";
import axios from "axios";

const Dashboard = () => {
  const webcamRef = useRef(null);

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

  return (
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
  );
};

const styles = {
  container: {
    padding: "20px",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
