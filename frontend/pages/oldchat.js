"use client";
import { useState } from "react";
import LoggedInNavbar from "../components/LoggedInNavbar";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
 const res = await fetch("http://localhost:5000/api/ai/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: userMessage.content }),
});
      const data = await res.json();
      const aiMessage = { role: "ai", content: data.reply };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: "⚠️ Error connecting to AI service." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <>
      <LoggedInNavbar />
      <div className="chat-page">
        <div className="chat-container">
          <div className="chat-box">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`message ${msg.role === "user" ? "user" : "ai"}`}
              >
                {msg.content}
              </div>
            ))}
            {loading && <div className="message ai">Typing...</div>}
          </div>
          <div className="input-box">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .chat-page {
          display: flex;
          justify-content: center;
          padding: 2rem;
          background: #f5f5f5;
          min-height: 90vh;
        }
        .chat-container {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          width: 600px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .chat-box {
          flex: 1;
          padding: 1rem;
          overflow-y: auto;
        }
        .message {
          margin-bottom: 0.75rem;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          max-width: 70%;
        }
        .message.user {
          background: #0070f3;
          color: white;
          margin-left: auto;
        }
        .message.ai {
          background: #e5e7eb;
          color: #333;
          margin-right: auto;
        }
        .input-box {
          display: flex;
          border-top: 1px solid #ddd;
        }
        input {
          flex: 1;
          padding: 1rem;
          border: none;
          outline: none;
          font-size: 1rem;
        }
        button {
          padding: 1rem 1.5rem;
          background: #0070f3;
          color: white;
          border: none;
          cursor: pointer;
          transition: background 0.2s;
        }
        button:hover {
          background: #005bb5;
        }
      `}</style>
    </>
  );
}
