"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import api from "../lib/api";
import { getToken } from "../lib/auth";
import Layout from "../components/Layout";
import ChatSubnav from "../components/ChatSubnav";
import TypewriterText from "../components/TypewriterText";

export default function ChatPage() {
  const router = useRouter();
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [typingMessageId, setTypingMessageId] = useState(null);

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
        { message: input, sessionId: selectedChat._id },
        { headers: { Authorization: `Bearer ${getToken()}` } }
      );
      reply = res.data.reply;
    }

    // Add AI message with typing animation
    const aiMessageId = Date.now().toString();
    setMessages((prev) => [...prev, { 
      role: "ai", 
      content: reply, 
      id: aiMessageId,
      isTyping: true 
    }]);
    setTypingMessageId(aiMessageId);
    fetchChats();
  } catch (err) {
    console.error("Send message failed:", err);
  } finally {
    setLoading(false);
  }
};



  return (
    <Layout>
      <ChatSubnav onSelect={(dept)=>setInput(`${dept}: `)} />
      <div className="mx-auto max-w-6xl px-4 py-4 grid grid-cols-1 md:grid-cols-[300px_1fr] gap-4 w-full">
        {/* Sidebar */}
        <aside className="rounded-2xl border border-emerald-900/40 bg-gray-900/60 p-3 flex flex-col h-[72vh]">
          <button onClick={startNewChat} className="mb-2 button-primary w-full">+ New Chat</button>
          <div className="space-y-2 overflow-y-auto pr-1 flex-1">
            {chats.map((chat) => (
              <button
                key={chat._id}
                onClick={() => openChat(chat)}
                className={`w-full text-left rounded-xl p-3 transition-colors border ${selectedChat?._id === chat._id ? 'border-emerald-700 bg-emerald-900/20' : 'border-gray-800 hover:border-emerald-800 bg-gray-900/50'}`}
              >
                <div className="text-sm font-medium text-gray-100">{chat.title}</div>
                <div className="text-xs text-gray-500">{chat.lastMessage?.slice(0, 52) || 'No messages yet'}</div>
                <div className="text-[10px] text-gray-600">{new Date(chat.updatedAt).toLocaleString()}</div>
              </button>
            ))}
          </div>
        </aside>

        {/* Chat area */}
        <section className="rounded-2xl border border-emerald-900/40 bg-gray-900/60 flex flex-col h-[72vh]">
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {selectedChat ? (
              <>
                {messages.map((msg, i) => (
                  <div key={msg.id || i} className={`max-w-[80%] rounded-2xl px-4 py-3 ${msg.role === 'user' ? 'ml-auto bg-emerald-600 text-white' : 'bg-gray-800 text-gray-100'}`}>
                    {msg.role === 'ai' && msg.isTyping ? (
                      <TypewriterText 
                        text={msg.content} 
                        speed={25}
                        onComplete={() => {
                          setMessages(prev => prev.map(m => 
                            m.id === msg.id ? { ...m, isTyping: false } : m
                          ));
                          setTypingMessageId(null);
                        }}
                      />
                    ) : (
                      msg.content
                    )}
                  </div>
                ))}
                {loading && <div className="rounded-2xl bg-gray-800 text-gray-400 px-4 py-3 inline-block">Typing...</div>}
              </>
            ) : (
              <div className="h-full grid place-items-center text-gray-500">Select a chat or start a new one</div>
            )}
          </div>
          <div className="border-t border-gray-800 p-3 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
              className="flex-1 rounded-xl bg-gray-950/60 px-3 py-3 text-sm text-gray-200 outline-none ring-1 ring-gray-800 focus:ring-emerald-700"
            />
            <button onClick={sendMessage} className="button-primary">Send</button>
          </div>
        </section>
      </div>
      <style jsx>{`
        .button-primary { 
          @apply px-4 py-2 rounded-md text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-500 transition-colors; 
        }
      `}</style>
    </Layout>
  );
}
