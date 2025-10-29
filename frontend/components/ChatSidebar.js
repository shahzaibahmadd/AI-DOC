// components/ChatSidebar.js
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios'; // Using axios for simplicity, like in your chat.js

// Make sure API_BASE is correctly defined in your .env.local
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export default function ChatSidebar({ onSelectChat, onNewChat, selectedChatId }) {
  const [chats, setChats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { token } = useAuth(); // Get token from context

  const fetchChats = async () => {
    if (!token) return; // Don't fetch if not logged in
    setIsLoading(true);
    setError('');
    try {
      const res = await axios.get(`${API_BASE}/chats`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setChats(res.data);
    } catch (err) {
      console.error("Failed to fetch chats:", err);
      setError('Could not load chats.');
      setChats([]); // Clear chats on error
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch chats when the component mounts or token changes
  useEffect(() => {
    fetchChats();
  }, [token]);

  return (
    <div className="w-[20%] h-full bg-gray-800 border-r border-gray-700 p-4 flex flex-col hidden md:flex">
      <button
        onClick={onNewChat} // Call parent function
        className="mb-4 w-full bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors"
      >
        + New Chat
      </button>

      <h2 className="text-lg font-semibold text-white mb-2">Chat History</h2>
      {isLoading && <p className="text-gray-400 text-sm">Loading chats...</p>}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div className="flex-1 overflow-y-auto space-y-2 pr-1"> {/* Added pr-1 for scrollbar */}
        {chats && chats.length > 0 ? (
          chats.map((chat) => (
            <div
              key={chat._id}
              onClick={() => onSelectChat(chat._id)} // Call parent function with chat ID
              className={`p-2 rounded-md cursor-pointer truncate text-sm transition-colors ${
                selectedChatId === chat._id
                  ? 'bg-green-700 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              {chat.title || `Chat ${chat._id.slice(-6)}`} {/* Fallback title */}
              {/* Optional: Show last message preview */}
              {/* <p className="text-xs text-gray-400 truncate mt-1">{chat.lastMessage || '...'}</p> */}
            </div>
          ))
        ) : (
          !isLoading && !error && <p className="text-gray-400 text-sm">No chats yet.</p>
        )}
      </div>
    </div>
  );
}