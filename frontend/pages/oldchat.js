"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import api from "../lib/api";
import { getToken } from "../lib/auth";
import LoggedInNavbar from "../components/LoggedInNavbar";

export default function ChatPage() {
  const router = useRouter();
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Protect route
  useEffect(() => {
    const token = getToken();
    if (!token) router.push("/login");
    fetchChats();
  }, []);

  const fetchChats = async () => {
    const res = await api.get("/chats", {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    setChats(res.data);
  };

 const startNewChat = () => {
  setSelectedChat({ _id: null, title: "New Chat (unsaved)" });
  setMessages([]);
};

  const openChat = async (chat) => {
    const res = await api.get(`/chats/${chat._id}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    setSelectedChat(res.data);
    setMessages(res.data.messages);
  };

//   const sendMessage = async () => {
//   if (!input.trim()) return;

//   const userMsg = { role: "user", content: input };
//   setMessages((prev) => [...prev, userMsg]);
//   setInput("");
//   setLoading(true);

//   try {
//     let reply;

//     // if chat not yet created
//     if (!selectedChat || !selectedChat._id) {
//       const res = await api.post(
//         "/chats/new",
//         { message: input }, // send first message here
//         { headers: { Authorization: `Bearer ${getToken()}` } }
//       );
//       setSelectedChat(res.data.chat);
//       reply = res.data.reply;
//     } else {
//       const res = await api.post(
//         `/chats/${selectedChat._id}/message`,
//         { message: input },
//         { headers: { Authorization: `Bearer ${getToken()}` } }
//       );
//       reply = res.data.reply;
//     }

//     setMessages((prev) => [...prev, { role: "ai", content: reply }]);
//     fetchChats(); // refresh sidebar
//   } catch (err) {
//     console.error("Send message failed:", err);
//   } finally {
//     setLoading(false);
//   }
// };

const sendMessage = async () => {
  if (!input.trim()) return;

  const userMsg = { role: "user", content: input };
  setMessages((prev) => [...prev, userMsg]);
  setInput("");
  setLoading(true);

  try {
    let reply;

    if (!selectedChat || !selectedChat._id) {
      const res = await api.post(
        "/chats/new",
        { message: input },
        { headers: { Authorization: `Bearer ${getToken()}` } }
      );
      setSelectedChat(res.data.chat);
      reply = res.data.reply;
    } else {
      const res = await api.post(
        `/chats/${selectedChat._id}/message`,
        { message: input, sessionId: selectedChat._id }, // 👈 send sessionId
        { headers: { Authorization: `Bearer ${getToken()}` } }
      );
      reply = res.data.reply;
    }

    setMessages((prev) => [...prev, { role: "ai", content: reply }]);
    fetchChats();
  } catch (err) {
    console.error("Send message failed:", err);
  } finally {
    setLoading(false);
  }
};



  return (
    <>
      <LoggedInNavbar />
      <div className="page">
        <div className="sidebar">
          <button onClick={startNewChat} className="new-btn">+ New Chat</button>
          <div className="chat-list">
            {chats.map((chat) => (
              <div
                key={chat._id}
                onClick={() => openChat(chat)}
                className={`chat-item ${selectedChat?._id === chat._id ? "active" : ""}`}
              >
                <strong>{chat.title}</strong>
                <p>{chat.lastMessage?.slice(0, 30) || "No messages yet"}</p>
                <small>{new Date(chat.updatedAt).toLocaleString()}</small>
              </div>
            ))}
          </div>
        </div>

        <div className="chat-area">
          {selectedChat ? (
            <>
              <div className="messages">
                {messages.map((msg, i) => (
                  <div key={i} className={`msg ${msg.role}`}>
                    {msg.content}
                  </div>
                ))}
                {loading && <div className="msg ai">Typing...</div>}
              </div>
              <div className="input-box">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Type your message..."
                />
                <button onClick={sendMessage}>Send</button>
              </div>
            </>
          ) : (
            <div className="no-chat">Select a chat or start a new one</div>
          )}
        </div>
      </div>

      <style jsx>{`
        .page {
          display: flex;
          height: 90vh;
        }
        .sidebar {
          width: 25%;
          background: #f8f8f8;
          padding: 1rem;
          border-right: 1px solid #ddd;
          display: flex;
          flex-direction: column;
        }
        .new-btn {
          background: #0070f3;
          color: white;
          border: none;
          border-radius: 6px;
          padding: 0.5rem;
          cursor: pointer;
          margin-bottom: 1rem;
        }
        .chat-item {
          padding: 0.5rem;
          margin-bottom: 0.5rem;
          border-radius: 6px;
          cursor: pointer;
        }
        .chat-item.active {
          background: #e0e7ff;
        }
        .chat-area {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .messages {
          flex: 1;
          padding: 1rem;
          overflow-y: auto;
        }
        .msg {
          margin-bottom: 0.75rem;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          max-width: 70%;
        }
        .msg.user {
          background: #0070f3;
          color: white;
          margin-left: auto;
        }
        .msg.ai {
          background: #e5e7eb;
          color: #333;
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
        }
        button {
          background: #0070f3;
          color: white;
          border: none;
          padding: 1rem 1.5rem;
          cursor: pointer;
        }
        .no-chat {
          margin: auto;
          color: #777;
        }
      `}</style>
    </>
  );
}
