


const express = require("express");
const { register, login, updatePassword,updateProfilePicture } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/upload"); // Multer middleware

const router = express.Router();

router.post("/register", register);
router.post("/login", login);


router.put("/update-password", protect, updatePassword);

// ✅ New: Update Profile Picture
router.put(
  "/profile-picture",
  protect,
  upload.single("profilePicture"),
  updateProfilePicture
);

module.exports = router;
