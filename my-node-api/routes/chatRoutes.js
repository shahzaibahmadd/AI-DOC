const express = require("express");
const auth = require("../middleware/authMiddleware");
const Chat = require("../models/Chat");
const { getAIAnswer } = require("../services/aiService");

const router = express.Router();

/**
 * 📌 Get all chats for logged-in user
 */
router.get("/", auth, async (req, res) => {
  try {
    const chats = await Chat.find({ userId: req.user.id })
      .sort({ updatedAt: -1 });
    res.json(chats);
  } catch (err) {
    res.status(500).json({ message: "Error fetching chats" });
  }
});

/**
 * 📌 Create a new chat
 */
router.post("/new", auth, async (req, res) => {
  try {
    const chat = await Chat.create({
      userId: req.user.id,
      username: req.user.email,
      title: "New Chat",
      messages: [],
    });
    res.json(chat);
  } catch (err) {
    res.status(500).json({ message: "Error creating new chat" });
  }
});

/**
 * 📌 Get a single chat by ID
 */
router.get("/:chatId", auth, async (req, res) => {
  try {
    const chat = await Chat.findOne({
      _id: req.params.chatId,
      userId: req.user.id,
    });
    if (!chat) return res.status(404).json({ message: "Chat not found" });
    res.json(chat);
  } catch (err) {
    res.status(500).json({ message: "Error fetching chat" });
  }
});

/**
 * 📌 Send a message to AI and store chat
 */
router.post("/:chatId/message", auth, async (req, res) => {
  try {
    const { message } = req.body;
    const chat = await Chat.findOne({
      _id: req.params.chatId,
      userId: req.user.id,
    });

    if (!chat) return res.status(404).json({ message: "Chat not found" });

    // Add user message
    chat.messages.push({ role: "user", content: message });
    chat.lastMessage = message;
    chat.lastChatted = new Date();

    // Get AI response
    // const aiResponse = await getAIAnswer(message);
    // Get AI response (use chatId as sessionId for memory tracking)
    const aiResponse = await getAIAnswer(message, null, req.params.chatId);

    chat.messages.push({ role: "ai", content: aiResponse.answer });
    chat.lastMessage = aiResponse.answer;
    chat.lastChatted = new Date();

    await chat.save();

    res.json({
      reply: aiResponse.answer,
      chatId: chat._id,
    });
  } catch (err) {
    console.error("Chat message error:", err);
    res.status(500).json({ message: "Error sending message" });
  }
});

module.exports = router;
