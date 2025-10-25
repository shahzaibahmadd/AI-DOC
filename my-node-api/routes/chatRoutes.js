// const express = require("express");
// const auth = require("../middleware/authMiddleware");
// const Chat = require("../models/Chat");
// const { getAIAnswer } = require("../services/aiService");

// const router = express.Router();

// /**
//  * 📌 Get all chats for logged-in user
//  */
// router.get("/", auth, async (req, res) => {
//   try {
//     const chats = await Chat.find({ userId: req.user.id })
//       .sort({ updatedAt: -1 });
//     res.json(chats);
//   } catch (err) {
//     res.status(500).json({ message: "Error fetching chats" });
//   }
// });

// /**
//  * 📌 Create a new chat
//  */
// router.post("/new", auth, async (req, res) => {
//   try {
//     const chat = await Chat.create({
//       userId: req.user.id,
//       username: req.user.email,
//       title: "New Chat",
//       messages: [],
//     });
//     res.json(chat);
//   } catch (err) {
//     res.status(500).json({ message: "Error creating new chat" });
//   }
// });

// /**
//  * 📌 Get a single chat by ID
//  */
// router.get("/:chatId", auth, async (req, res) => {
//   try {
//     const chat = await Chat.findOne({
//       _id: req.params.chatId,
//       userId: req.user.id,
//     });
//     if (!chat) return res.status(404).json({ message: "Chat not found" });
//     res.json(chat);
//   } catch (err) {
//     res.status(500).json({ message: "Error fetching chat" });
//   }
// });

// /**
//  * 📌 Send a message to AI and store chat
//  */
// router.post("/:chatId/message", auth, async (req, res) => {
//   try {
//     const { message } = req.body;
//     const chat = await Chat.findOne({
//       _id: req.params.chatId,
//       userId: req.user.id,
//     });

//     if (!chat) return res.status(404).json({ message: "Chat not found" });

//     // Add user message
//     chat.messages.push({ role: "user", content: message });
//     chat.lastMessage = message;
//     chat.lastChatted = new Date();

//     // Get AI response
//     // const aiResponse = await getAIAnswer(message);
//     // Get AI response (use chatId as sessionId for memory tracking)
//     const aiResponse = await getAIAnswer(message, null, req.params.chatId);

//     chat.messages.push({ role: "ai", content: aiResponse.answer });
//     chat.lastMessage = aiResponse.answer;
//     chat.lastChatted = new Date();

//     await chat.save();

//     res.json({
//       reply: aiResponse.answer,
//       chatId: chat._id,
//     });
//   } catch (err) {
//     console.error("Chat message error:", err);
//     res.status(500).json({ message: "Error sending message" });
//   }
// });

// module.exports = router;






//--------------------------------------








// my-node-api/routes/chatRoutes.js
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
    // Select only necessary fields for the list view if needed
    // const chatList = chats.map(c => ({ _id: c._id, title: c.title, lastMessage: c.lastMessage, updatedAt: c.updatedAt }));
    res.json(chats);
  } catch (err) {
    console.error("Error fetching chats:", err); // Log error
    res.status(500).json({ message: "Error fetching chats" });
  }
});

/**
 * 📌 Create a new chat AND get the first AI reply
 */
router.post("/new", auth, async (req, res) => {
  // Get the first message from the request body
  const { message } = req.body;

  if (!message || typeof message !== 'string' || message.trim() === '') {
    return res.status(400).json({ message: "Initial message cannot be empty" });
  }

  try {
    // 1. Create the initial chat document
    let chat = new Chat({ // Use 'new Chat' instead of 'create' to get the _id before saving potentially
      userId: req.user.id,
      username: req.user.email, // Or req.user.name if available
      title: message.substring(0, 30) + (message.length > 30 ? "..." : ""), // Generate initial title from message
      messages: [{ role: "user", content: message }], // Add user's first message
      lastMessage: message, // Set last message
      lastChatted: new Date(),
    });

    // 2. Get the AI's first response using the new chat's ID as sessionId
    // Make sure getAIAnswer can handle a null context if needed for the first message
    const aiResponse = await getAIAnswer(message, null, chat._id.toString()); // Pass chat._id as sessionId

    if (!aiResponse || !aiResponse.answer) {
        throw new Error("AI service did not return a valid response.");
    }

    // 3. Add the AI response to the chat messages
    chat.messages.push({ role: "ai", content: aiResponse.answer });
    chat.lastMessage = aiResponse.answer; // Update last message to AI's reply
    chat.lastChatted = new Date(); // Update timestamp again

    // 4. Save the complete chat document
    await chat.save();

    // 5. Send response including the chat object AND the first reply
    res.status(201).json({ // Use 201 Created status
      chat: chat, // Send the full chat object back
      reply: aiResponse.answer, // Include the AI's reply
    });

  } catch (err) {
    console.error("Error creating new chat:", err); // Log the detailed error
    res.status(500).json({ message: "Error creating new chat or getting initial AI response" });
  }
});

/**
 * 📌 Get a single chat by ID
 */
router.get("/:chatId", auth, async (req, res) => {
  try {
    const chat = await Chat.findOne({
      _id: req.params.chatId,
      userId: req.user.id, // Ensure user owns the chat
    });
    if (!chat) return res.status(404).json({ message: "Chat not found or access denied" });
    res.json(chat);
  } catch (err) {
    console.error(`Error fetching chat ${req.params.chatId}:`, err); // Log error
    if (err.kind === 'ObjectId') { // Handle invalid ObjectId format
        return res.status(400).json({ message: "Invalid chat ID format" });
    }
    res.status(500).json({ message: "Error fetching chat" });
  }
});

/**
 * 📌 Send a message to an EXISTING AI chat and store history
 */
router.post("/:chatId/message", auth, async (req, res) => {
  const { message } = req.body;
  const { chatId } = req.params;

  if (!message || typeof message !== 'string' || message.trim() === '') {
      return res.status(400).json({ message: "Message cannot be empty" });
  }

  try {
    const chat = await Chat.findOne({
      _id: chatId,
      userId: req.user.id, // Ensure user owns the chat
    });

    if (!chat) return res.status(404).json({ message: "Chat not found or access denied" });

    // Add user message
    chat.messages.push({ role: "user", content: message });
    chat.lastMessage = message;
    chat.lastChatted = new Date();

    // Get AI response (use chatId as sessionId for memory tracking)
    // Pass previous messages if getAIAnswer uses them for context (optional, depends on aiService implementation)
    // const history = chat.messages.slice(0, -1); // Example: Pass all messages except the last user one
    const aiResponse = await getAIAnswer(message, null, chatId); // Pass chatId as sessionId

    if (!aiResponse || !aiResponse.answer) {
        throw new Error("AI service did not return a valid response.");
    }

    // Add AI message
    chat.messages.push({ role: "ai", content: aiResponse.answer });
    chat.lastMessage = aiResponse.answer; // Update last message
    chat.lastChatted = new Date(); // Update timestamp

    // If title is still "New Chat", update it
    if (chat.title === "New Chat" && chat.messages.length > 2) {
        chat.title = chat.messages[0].content.substring(0, 30) + (chat.messages[0].content.length > 30 ? "..." : "");
    }

    await chat.save();

    // Only send the reply back, frontend already has the chat context
    res.json({
      reply: aiResponse.answer
      // No need to send chatId back here, frontend already knows it
    });
  } catch (err) {
    console.error(`Error sending message to chat ${chatId}:`, err); // Log error
    if (err.kind === 'ObjectId') { // Handle invalid ObjectId format
        return res.status(400).json({ message: "Invalid chat ID format" });
    }
    res.status(500).json({ message: "Error sending message or getting AI response" });
  }
});

module.exports = router;