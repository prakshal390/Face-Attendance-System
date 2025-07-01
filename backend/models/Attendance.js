// const mongoose = require("mongoose");

// const attendanceSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   timestamp: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("Attendance", attendanceSchema);




// models/Attendance.js
const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Attendance", attendanceSchema);
