

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const MyAttendance = () => {
//   const [records, setRecords] = useState([]);

//   const fetchAttendance = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await axios.get(`${process.env.REACT_APP_API_URL}/attendance/my`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setRecords(res.data);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to fetch attendance records");
//     }
//   };

//   useEffect(() => {
//     fetchAttendance();
//   }, []);

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure to delete this record?")) return;

//     try {
//       const token = localStorage.getItem("token");
//       await axios.delete(`${process.env.REACT_APP_API_URL}/attendance/delete/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setRecords(records.filter((r) => r._id !== id));
//       alert("✅ Deleted successfully");
//     } catch (err) {
//       console.error(err);
//       alert("❌ Failed to delete");
//     }
//   };

//   const handleUpdate = async (id) => {
//     const newDate = prompt("Enter new date-time (e.g., 2025/07/01 & 9:30):");
//     if (!newDate) return;

//     try {
//       const token = localStorage.getItem("token");
//       await axios.put(
//         `${process.env.REACT_APP_API_URL}/attendance/update/${id}`,
//         { timestamp: new Date(newDate) },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       fetchAttendance();
//       alert("✅ Updated successfully");
//     } catch (err) {
//       console.error(err);
//       alert("❌ Failed to update");
//     }
//   };


//   const handleDownloadPDF = async () => {
//   const token = localStorage.getItem("token");

//   try {
//     const response = await fetch(`${process.env.REACT_APP_API_URL}/attendance/pdf`, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     if (!response.ok) {
//       throw new Error("Failed to download PDF");
//     }

//     const blob = await response.blob();
//     const url = window.URL.createObjectURL(new Blob([blob]));
//     const link = document.createElement("a");
//     link.href = url;
//     link.setAttribute("download", "attendance.pdf");
//     document.body.appendChild(link);
//     link.click();
//     link.remove();
//   } catch (err) {
//     console.error(err);
//     alert("❌ PDF download failed. Please try again.");
//   }
// };



//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>My Attendance Records</h2>
//       {records.length === 0 ? (
//         <p style={styles.noData}>No attendance marked yet.</p>
//       ) : (
//         <ul style={styles.list}>
//           {records.map((record) => (
//             <li key={record._id} style={styles.item}>
//               <div>
//                 <strong>{record.userId.name}</strong> ({record.userId.email}) <br />
//                 <span>{new Date(record.timestamp).toLocaleString()}</span>
//               </div>
//               <div style={styles.buttons}>
//                 <button style={styles.edit} onClick={() => handleUpdate(record._id)}>✏️ Edit</button>
//                 <button style={styles.delete} onClick={() => handleDelete(record._id)}>🗑️ Delete</button>
//               </div>
//             </li>
//           ))}
//         </ul>

        
//       )}
//       <button
//   onClick={handleDownloadPDF}
//   style={{
//     padding: "10px 20px",
//     margin: "20px auto",
//     display: "block",
//     backgroundColor: "#28a745",
//     color: "#fff",
//     border: "none",
//     borderRadius: "6px",
//     cursor: "pointer",
//   }}
// >
//   📥 Download Attendance as PDF
// </button>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     padding: "20px",
//     maxWidth: "600px",
//     margin: "auto",
//   },
//   heading: {
//     textAlign: "center",
//     marginBottom: "20px",
//   },
//   noData: {
//     textAlign: "center",
//     color: "#777",
//   },
//   list: {
//     listStyleType: "none",
//     padding: 0,
//   },
//   item: {
//     padding: "12px",
//     marginBottom: "12px",
//     border: "1px solid #ccc",
//     borderRadius: "8px",
//     backgroundColor: "#f9f9f9",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     flexWrap: "wrap",
//   },
//   buttons: {
//     display: "flex",
//     gap: "8px",
//     marginTop: "10px",
//   },
//   edit: {
//     backgroundColor: "#ffc107",
//     color: "#000",
//     border: "none",
//     padding: "6px 10px",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
//   delete: {
//     backgroundColor: "#dc3545",
//     color: "#fff",
//     border: "none",
//     padding: "6px 10px",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
// };

// export default MyAttendance;







import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyAttendance = () => {
  const navigate = useNavigate();
  const [records, setRecords] = useState([]);

  const fetchAttendance = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/attendance/my`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRecords(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch attendance records");
    }
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete this record?")) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${process.env.REACT_APP_API_URL}/attendance/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRecords(records.filter((r) => r._id !== id));
      alert("✅ Deleted successfully");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to delete");
    }
  };

  const handleUpdate = async (id) => {
    const newDate = prompt("Enter new date-time (e.g., 2025/07/01 & 9:30):");
    if (!newDate) return;

    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `${process.env.REACT_APP_API_URL}/attendance/update/${id}`,
        { timestamp: new Date(newDate) },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchAttendance();
      alert("✅ Updated successfully");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to update");
    }
  };

  const handleDownloadPDF = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/attendance/pdf`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to download PDF");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "attendance.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error(err);
      alert("❌ PDF download failed. Please try again.");
    }
  };

  // Back handler
  const handleBack = () => {
    navigate("/dashboard");
  };

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={styles.pageWrapper}>
      {/* Header with Back and Logout */}
      <header style={styles.header}>
        <button style={styles.backBtn} onClick={handleBack}>
          ← Back
        </button>
        <h2 style={styles.heading}>My Attendance Records</h2>
        <button style={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      </header>

      {records.length === 0 ? (
        <p style={styles.noData}>No attendance marked yet.</p>
      ) : (
        <ul style={styles.list}>
          {records.map((record) => (
            <li key={record._id} style={styles.item}>
              <div>
                <strong>{record.userId.name}</strong> ({record.userId.email}) <br />
                <span>{new Date(record.timestamp).toLocaleString()}</span>
              </div>
              <div style={styles.buttons}>
                <button style={styles.edit} onClick={() => handleUpdate(record._id)}>
                  ✏️ Edit
                </button>
                <button style={styles.delete} onClick={() => handleDelete(record._id)}>
                  🗑️ Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <button style={styles.downloadBtn} onClick={handleDownloadPDF}>
        📥 Download Attendance as PDF
      </button>
    </div>
  );
};

const styles = {
  pageWrapper: {
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    boxSizing: "border-box",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    gap: "10px",
    flexWrap: "wrap",
  },
  backBtn: {
    backgroundColor: "#1976d2",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "clamp(14px, 2vw, 16px)",
    flex: "1 1 100px",
    minWidth: "90px",
    textAlign: "center",
  },
  heading: {
    flex: "2 1 200px",
    textAlign: "center",
    margin: 0,
    fontSize: "clamp(20px, 4vw, 28px)",
  },
  logoutBtn: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "clamp(14px, 2vw, 16px)",
    flex: "1 1 100px",
    minWidth: "90px",
    textAlign: "center",
  },
  noData: {
    textAlign: "center",
    color: "#777",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  item: {
    padding: "12px",
    marginBottom: "12px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  buttons: {
    display: "flex",
    gap: "8px",
    marginTop: "10px",
  },
  edit: {
    backgroundColor: "#ffc107",
    color: "#000",
    border: "none",
    padding: "6px 10px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  delete: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "6px 10px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  downloadBtn: {
    padding: "10px 20px",
    margin: "20px auto",
    display: "block",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default MyAttendance;
