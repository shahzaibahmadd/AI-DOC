const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  username: { type: String, required: true },
  title: { type: String, default: "New Chat" },
  messages: [
    {
      role: { type: String, enum: ["user", "ai"], required: true },
      content: { type: String, required: true },
      timestamp: { type: Date, default: Date.now },
    },
  ],
  lastMessage: { type: String },
  lastChatted: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model("Chat", chatSchema);
