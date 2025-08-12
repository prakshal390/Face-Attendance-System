import React, { useState,useEffect  } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Dashboard2.css";

const Dashboard2 = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const [userProfile, setUserProfile] = useState(null);
  
  const handleGetStarted = () => {
    navigate("/dashboard");
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `${process.env.REACT_APP_API_URL}/users/update-password`,
        { oldPassword, newPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Password updated successfully ✅");
      setOldPassword("");
      setNewPassword("");
    } catch (error) {
      console.error(error);
      alert("Failed to update password ❌");
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    if (!profileImage) {
      alert("Please select an image!");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("profilePicture", profileImage); // <-- Changed key here

      const token = localStorage.getItem("token");
      await axios.put(`${process.env.REACT_APP_API_URL}/users/profile-picture`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Profile picture updated successfully ✅");
      setProfileImage(null);
    } catch (error) {
      console.error(error);
      alert("Failed to update profile picture ❌");
    }
  };

  return (
    <div className="dashboard2-container">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">My Dashboard</h2>
        <ul className="nav-links">
          <li onClick={() => setActiveSection("password")}>Update Password</li>
          {/* <li onClick={() => setActiveSection("profile")}>Update Profile Picture</li> */}
        </ul>
      </nav>

      {/* Body */}
      <div className="dashboard-body">
        {!activeSection && (
          <div className="welcome-section">
            <h1>Welcome Back 👋</h1>
            <p>Your one-stop dashboard to manage your account securely.</p>
            <button className="get-started-btn" onClick={handleGetStarted}>
              Get Started 🚀
            </button>
          </div>
        )}

        {activeSection === "password" && (
          <div className="form-wrapper">
            <span className="back-btn" onClick={() => setActiveSection("")}>
              ← Back
            </span>
            <form className="form-card" onSubmit={handlePasswordUpdate}>
              <h3>Update Password</h3>
              <input
                type="password"
                placeholder="Old Password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <button type="submit">Update Password</button>
            </form>
          </div>
        )}

        {activeSection === "profile" && (
          <div className="form-wrapper">
            <span className="back-btn" onClick={() => setActiveSection("")}>
              ← Back
            </span>
            <form className="form-card" onSubmit={handleProfileUpdate}>
              <h3>Update Profile Picture</h3>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setProfileImage(e.target.files[0])}
                required
              />
              <button type="submit">Upload Picture</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard2;
