// const express = require("express");
// const { markAttendance } = require("../controllers/attendanceController");
// const jwt = require("jsonwebtoken");

// const auth = (req, res, next) => {
//   const token = req.headers.authorization;
//   if (!token) return res.status(401).json({ error: "Unauthorized" });

//   try {
//     const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch {
//     res.status(401).json({ error: "Invalid token" });
//   }
// };

// const router = express.Router();
// router.post("/mark", auth, markAttendance);

// module.exports = router;





// const express = require("express");
// const { markAttendance } = require("../controllers/attendanceController");
// const jwt = require("jsonwebtoken");

// const router = express.Router();

// // ✅ JWT Middleware (auth)
// const auth = (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ error: "Unauthorized: No token provided" });
//   }

//   try {
//     const token = authHeader.split(" ")[1]; // Extract token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // Save decoded info (e.g., userId)
//     next();
//   } catch (err) {
//     return res.status(401).json({ error: "Unauthorized: Invalid token" });
//   }
// };

// // 👇 Protected route
// router.post("/mark", auth, markAttendance);

// module.exports = router;







// routes/attendanceRoutes.js
// const express = require("express");
// const { markAttendance, getMyAttendance } = require("../controllers/attendanceController");
// const jwt = require("jsonwebtoken");

// const router = express.Router();

// // ✅ JWT Auth Middleware
// const auth = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ error: "Unauthorized: No token" });
//   }

//   try {
//     const token = authHeader.split(" ")[1];
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // Save user info to req
//     next();
//   } catch (err) {
//     return res.status(401).json({ error: "Invalid token" });
//   }
// };

// // ✅ Routes
// router.post("/mark", auth, markAttendance);
// router.get("/my", auth, getMyAttendance); // 👈 New: Get my attendance



// module.exports = router;







const express = require("express");
const {
  markAttendance,
  getMyAttendance,
  updateAttendance,
  deleteAttendance,
  downloadAttendancePdf,
} = require("../controllers/attendanceController");
const jwt = require("jsonwebtoken");

const router = express.Router();

// ✅ JWT middleware
const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized: No token" });
  }

  try {
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

// Routes
router.post("/mark", auth, markAttendance);
router.get("/my", auth, getMyAttendance);
router.put("/update/:id", auth, updateAttendance); // 👈 Update
router.delete("/delete/:id", auth, deleteAttendance); // 👈 Delete
router.get("/pdf", auth, downloadAttendancePdf); // ✅ NEW route

module.exports = router;


