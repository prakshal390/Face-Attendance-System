



// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");

// const path = require("path"); // Add this line



// dotenv.config();
// connectDB();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Add this line to serve uploads directory statically
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // ✅ Routes
// app.use("/api/users", require("./routes/userRoutes"));
// app.use("/api/attendance", require("./routes/attendanceRoutes"));


// // ✅ Root route for testing server status
// app.get("/", (req, res) => {
//   res.send("✅ Face Attendance API is running...");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const path = require("path");

dotenv.config();
connectDB();

const app = express();

// ✅ CORS Configuration
const allowedOrigins = [
  "https://face-attendance-system-info.vercel.app", // frontend production
  "http://localhost:3000" // local dev
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use(express.json());

// ✅ Serve uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/attendance", require("./routes/attendanceRoutes"));

// ✅ Root route
app.get("/", (req, res) => {
  res.send("✅ Face Attendance API is running...");
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
