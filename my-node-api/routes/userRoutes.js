const express = require("express");
const auth = require("../middleware/authMiddleware");
const User = require("../models/user");

const router = express.Router();

/**
 * 📌 Get user profile
 */
router.get("/profile", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.error("Error fetching user profile:", err);
    res.status(500).json({ message: "Error fetching user profile" });
  }
});

/**
 * 📌 Update user profile
 */
router.put("/profile", auth, async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = await User.findById(req.user.id);
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (username) user.username = username;
    if (email) user.email = email;

    await user.save();
    
    // Return user without password
    const userResponse = await User.findById(req.user.id).select('-password');
    res.json(userResponse);
  } catch (err) {
    console.error("Error updating user profile:", err);
    res.status(500).json({ message: "Error updating user profile" });
  }
});

/**
 * 📌 Get user statistics
 */
router.get("/stats", auth, async (req, res) => {
  try {
    const Chat = require("../models/Chat");
    const userId = req.user.id;
    
    // Get total chats
    const totalChats = await Chat.countDocuments({ userId });
    
    // Get today's chats
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const todayChats = await Chat.countDocuments({
      userId,
      createdAt: { $gte: today, $lt: tomorrow }
    });
    
    // Get user info
    const user = await User.findById(userId).select('-password');
    
    res.json({
      totalChats,
      todayChats,
      user: user
    });
  } catch (err) {
    console.error("Error fetching user stats:", err);
    res.status(500).json({ message: "Error fetching user statistics" });
  }
});

module.exports = router;
