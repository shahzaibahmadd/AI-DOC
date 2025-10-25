
  require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const { initAll } = require("./services/initService");
const aiRoutes = require("./routes/aiRoutes");
const chatRoutes = require("./routes/chatRoutes");


// --- Connect to MongoDB ---
connectDB();

const app = express();
  // --- CORS configuration ---
  const corsOptions = {
    origin: ["http://localhost:3000"], // frontend URL(s)
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  };
  app.use(cors(corsOptions));
  app.use(express.json());

// --- Initialize Gemini + Qdrant ---
initAll();

// --- Routes ---
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/ai", require("./routes/aiRoutes"));
app.use("/api/chats", chatRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
