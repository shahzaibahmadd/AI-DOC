const Chat = require("../models/Chat");

// Update chat (title, archived status)
const updateChat = async (req, res) => {
  const { chatId } = req.params;
  const { title, archived } = req.body;

  try {
    const chat = await Chat.findOne({
      _id: chatId,
      userId: req.user.id, // Ensure user owns the chat
    });

    if (!chat) {
      return res.status(404).json({ message: "Chat not found or access denied" });
    }

    // Update fields if provided
    if (title !== undefined) chat.title = title;
    if (archived !== undefined) chat.archived = archived;

    await chat.save();
    res.json(chat);
  } catch (err) {
    console.error(`Error updating chat ${chatId}:`, err);
    if (err.kind === 'ObjectId') {
      return res.status(400).json({ message: "Invalid chat ID format" });
    }
    res.status(500).json({ message: "Error updating chat" });
  }
};

// Delete chat
const deleteChat = async (req, res) => {
  const { chatId } = req.params;

  try {
    const chat = await Chat.findOneAndDelete({
      _id: chatId,
      userId: req.user.id, // Ensure user owns the chat
    });

    if (!chat) {
      return res.status(404).json({ message: "Chat not found or access denied" });
    }

    res.json({ message: "Chat deleted successfully" });
  } catch (err) {
    console.error(`Error deleting chat ${chatId}:`, err);
    if (err.kind === 'ObjectId') {
      return res.status(400).json({ message: "Invalid chat ID format" });
    }
    res.status(500).json({ message: "Error deleting chat" });
  }
};

module.exports = {
  updateChat,
  deleteChat,
};