// const Attendance = require("../models/Attendance");

// exports.markAttendance = async (req, res) => {
//   try {
//     const attendance = new Attendance({ userId: req.user.id });
//     await attendance.save();
//     res.status(201).json(attendance);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };







// controllers/attendanceController.js
const Attendance = require("../models/Attendance");
const User = require("../models/User"); // Optional: if you want user name/email
const PDFDocument = require("pdfkit");

exports.markAttendance = async (req, res) => {
  try {
    const attendance = new Attendance({ userId: req.user.id });
    await attendance.save();
    res.status(201).json(attendance);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ New: Get attendance records for logged-in user
exports.getMyAttendance = async (req, res) => {
  try {
    const records = await Attendance.find({ userId: req.user.id })
      .populate("userId", "name email") // fetch user name + email
      .sort({ timestamp: -1 }); // latest first

    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};








// Update attendance timestamp
exports.updateAttendance = async (req, res) => {
  const { id } = req.params;
  const { timestamp } = req.body;

  try {
    const record = await Attendance.findOne({ _id: id, userId: req.user.id });

    if (!record) {
      return res.status(404).json({ error: "Attendance record not found" });
    }

    record.timestamp = timestamp || new Date();
    await record.save();

    res.json({ message: "Attendance updated", record });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete attendance record
exports.deleteAttendance = async (req, res) => {
  const { id } = req.params;

  try {
    const record = await Attendance.findOneAndDelete({
      _id: id,
      userId: req.user.id,
    });

    if (!record) {
      return res.status(404).json({ error: "Record not found or not allowed" });
    }

    res.json({ message: "Attendance deleted", id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.downloadAttendancePdf = async (req, res) => {
  try {
    const records = await Attendance.find({ userId: req.user.id })
      .populate("userId", "name email")
      .sort({ timestamp: -1 });

    const doc = new PDFDocument();
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=attendance.pdf");

    doc.fontSize(18).text("📄 Attendance Report", { align: "center" }).moveDown();

    records.forEach((record, index) => {
      doc
        .fontSize(12)
        .text(
          `${index + 1}. ${record.userId.name} (${record.userId.email}) - ${new Date(
            record.timestamp
          ).toLocaleString()}`
        );
    });

    doc.end();
    doc.pipe(res);
  } catch (err) {
    res.status(500).json({ error: "PDF generation failed" });
  }
};