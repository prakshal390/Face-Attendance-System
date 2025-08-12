



const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const path = require("path"); // Add this line



dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Add this line to serve uploads directory statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/attendance", require("./routes/attendanceRoutes"));


// ✅ Root route for testing server status
app.get("/", (req, res) => {
  res.send("✅ Face Attendance API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



