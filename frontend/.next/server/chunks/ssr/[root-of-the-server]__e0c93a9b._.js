module.exports = [
"[project]/frontend/components/Navbar.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <h1 className="logo">AI Document Guide</h1>
//       </div>
//       <div className="navbar-right">
//         <a href="/login" className="nav-link">Login</a>
//         <a href="/register" className="nav-link">Register</a>
//       </div>
//       <style jsx>{`
//         .navbar {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 1rem 2rem;
//           background: #171717;
//           color: white;
//         }
//         .logo {
//           font-size: 1.5rem;
//           font-weight: bold;
//         }
//         .navbar-right {
//           display: flex;
//           gap: 1rem;
//         }
//         .nav-link {
//           background: #0070f3;
//           padding: 0.5rem 1rem;
//           border-radius: 5px;
//           color: white;
//           text-decoration: none;
//           transition: background 0.2s;
//         }
//         .nav-link:hover {
//           background: #0059c1;
//         }
//       `}</style>
//     </nav>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$context$2f$AuthContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/context/AuthContext.js [ssr] (ecmascript)");
;
;
;
function Navbar() {
    const { isLoggedIn, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$context$2f$AuthContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-10 bg-gray-900/50 backdrop-blur-md border-b border-gray-700",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
            className: "container mx-auto max-w-5xl px-4 py-3 flex justify-between items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "text-xl font-bold text-white",
                    children: "🇵🇰 Awaam AI"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/Navbar.js",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    onClick: logout,
                    className: "bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors",
                    children: "Logout"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/Navbar.js",
                    lineNumber: 58,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/login",
                    className: "bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors",
                    children: "Login"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/Navbar.js",
                    lineNumber: 65,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/Navbar.js",
            lineNumber: 53,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/components/Navbar.js",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/components/Layout.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Layout
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$Navbar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/Navbar.js [ssr] (ecmascript)");
;
;
;
function Layout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: "🇵🇰 Awaam AI"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/Layout.js",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "AI Assistant for Pakistani Documents"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/Layout.js",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/Layout.js",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    " "
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/Layout.js",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "bg-gray-900 text-gray-100 min-h-screen flex flex-col font-sans",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$Navbar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/frontend/components/Layout.js",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                        className: "flex-1 flex flex-col pt-[57px] h-screen",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/Layout.js",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/Layout.js",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[externals]/axios [external] (axios, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("axios");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/frontend/components/ChatSidebar.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// components/ChatSidebar.js
__turbopack_context__.s([
    "default",
    ()=>ChatSidebar
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$context$2f$AuthContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/context/AuthContext.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/axios [external] (axios, esm_import)"); // Using axios for simplicity, like in your chat.js
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
// Make sure API_BASE is correctly defined in your .env.local
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
function ChatSidebar({ onSelectChat, onNewChat, selectedChatId }) {
    const [chats, setChats] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const { token } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$context$2f$AuthContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useAuth"])(); // Get token from context
    const fetchChats = async ()=>{
        if (!token) return; // Don't fetch if not logged in
        setIsLoading(true);
        setError('');
        try {
            const res = await __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__["default"].get(`${API_BASE}/chats`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setChats(res.data);
        } catch (err) {
            console.error("Failed to fetch chats:", err);
            setError('Could not load chats.');
            setChats([]); // Clear chats on error
        } finally{
            setIsLoading(false);
        }
    };
    // Fetch chats when the component mounts or token changes
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        fetchChats();
    }, [
        token
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "w-[20%] h-full bg-gray-800 border-r border-gray-700 p-4 flex flex-col hidden md:flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                onClick: onNewChat,
                className: "mb-4 w-full bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors",
                children: "+ New Chat"
            }, void 0, false, {
                fileName: "[project]/frontend/components/ChatSidebar.js",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                className: "text-lg font-semibold text-white mb-2",
                children: "Chat History"
            }, void 0, false, {
                fileName: "[project]/frontend/components/ChatSidebar.js",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                className: "text-gray-400 text-sm",
                children: "Loading chats..."
            }, void 0, false, {
                fileName: "[project]/frontend/components/ChatSidebar.js",
                lineNumber: 48,
                columnNumber: 21
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                className: "text-red-500 text-sm",
                children: error
            }, void 0, false, {
                fileName: "[project]/frontend/components/ChatSidebar.js",
                lineNumber: 49,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto space-y-2 pr-1",
                children: [
                    " ",
                    chats && chats.length > 0 ? chats.map((chat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            onClick: ()=>onSelectChat(chat._id),
                            className: `p-2 rounded-md cursor-pointer truncate text-sm transition-colors ${selectedChatId === chat._id ? 'bg-green-700 text-white' : 'text-gray-300 hover:bg-gray-700'}`,
                            children: [
                                chat.title || `Chat ${chat._id.slice(-6)}`,
                                " "
                            ]
                        }, chat._id, true, {
                            fileName: "[project]/frontend/components/ChatSidebar.js",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this)) : !isLoading && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 text-sm",
                        children: "No chats yet."
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/ChatSidebar.js",
                        lineNumber: 69,
                        columnNumber: 35
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/ChatSidebar.js",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/ChatSidebar.js",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/frontend/components/ChatWindow.js [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

// // components/ChatWindow.js
// import { useState, useRef, useEffect } from 'react';
// import { useAuth } from '../context/AuthContext';
// import Message from './Message';
// import ChatInput from './ChatInput';
// import axios from 'axios'; // Using axios
// const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
// const examplePrompts = [
//   'How to make a new Passport?',
//   'What documents do I need for a CNIC?',
//   'Summarize the new property tax law.',
// ];
// // Accept chatId and onChatCreated as props
// export default function ChatWindow({ chatId, onChatCreated }) {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [isFetchingMessages, setIsFetchingMessages] = useState(false);
//   const { token } = useAuth();
//   const messagesEndRef = useRef(null);
//   // Scroll to bottom effect
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);
//   // Effect to fetch messages when chatId changes
//   useEffect(() => {
//     const fetchMessages = async () => {
//       if (!chatId || !token) {
//         setMessages([]); // Clear messages if no chat selected or not logged in
//         return;
//       }
//       setIsFetchingMessages(true);
//       setMessages([]); // Clear previous messages immediately
//       try {
//         const res = await axios.get(`${API_BASE}/chats/${chatId}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         // Adapt based on your backend response structure
//         // Assuming res.data.messages is the array
//         const fetchedMessages = res.data.messages.map(msg => ({
//           sender: msg.role === 'user' ? 'user' : 'ai',
//           text: msg.content
//         }));
//         setMessages(fetchedMessages);
//       } catch (error) {
//         console.error("Failed to fetch messages:", error);
//         setMessages([{ sender: 'ai', text: 'Could not load messages for this chat.' }]);
//       } finally {
//         setIsFetchingMessages(false);
//       }
//     };
//     fetchMessages();
//   }, [chatId, token]); // Re-run when chatId or token changes
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!input.trim() || isLoading || !token) return;
//     const userMessage = { sender: 'user', text: input };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput('');
//     setIsLoading(true);
//     try {
//       let replyText;
//       let newChatId = chatId; // Assume existing chat unless created
//       if (!chatId) {
//         // --- Create NEW chat ---
//         const res = await axios.post(
//           `${API_BASE}/chats/new`,
//           { message: input },
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         // Assuming backend returns { chat: { _id: '...' }, reply: '...' }
//         replyText = res.data.reply;
//         newChatId = res.data.chat._id; // Get the ID of the newly created chat
//         // Call the callback to update the parent's state
//         if (onChatCreated) {
//           onChatCreated(newChatId);
//         }
//       } else {
//         // --- Add message to EXISTING chat ---
//         const res = await axios.post(
//           `${API_BASE}/chats/${chatId}/message`,
//           { message: input, sessionId: chatId }, // Send sessionId if needed by backend
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         // Assuming backend returns { reply: '...' }
//         replyText = res.data.reply;
//       }
//       setMessages((prev) => [
//         ...prev,
//         { sender: 'ai', text: replyText },
//       ]);
//     } catch (error) {
//       console.error("Send message failed:", error);
//       const errorMsg = error.response?.data?.message || 'Sorry, could not send message.';
//       setMessages((prev) => [
//         ...prev,
//         { sender: 'ai', text: errorMsg },
//       ]);
//       // Optional: If creating a new chat failed, remove the user's message
//       if (!chatId) {
//          setMessages((prev) => prev.slice(0, -1)); // Remove the optimistic user message
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   const handleExampleClick = (prompt) => {
//     setInput(prompt);
//   };
//   // Decide whether to show welcome screen or chat messages
//   const showWelcome = !chatId && messages.length === 0 && !isFetchingMessages;
//   return (
//     <div className="flex-1 flex flex-col h-full overflow-hidden">
//       <div className="flex-1 overflow-y-auto p-4 space-y-4">
//         <div className="container mx-auto max-w-3xl">
//           {isFetchingMessages ? (
//              <div className="text-center text-gray-400 mt-20">Loading messages...</div>
//           ) : showWelcome ? (
//             <div className="text-center mt-20">
//               <h1 className="text-4xl font-bold text-white mb-4">Awaam AI</h1>
//               <p className="text-lg text-gray-400 mb-12">
//                 Your AI assistant for Pakistani public documents.
//               </p>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 {examplePrompts.map((prompt) => (
//                   <button
//                     key={prompt}
//                     onClick={() => handleExampleClick(prompt)}
//                     className="bg-gray-800 border border-gray-700 p-4 rounded-lg text-left hover:bg-gray-700 transition-colors"
//                   >
//                     <p className="font-semibold text-white">{prompt}</p>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           ) : messages.length === 0 && !isLoading ? (
//              <div className="text-center text-gray-400 mt-20">Send a message to start the chat.</div>
//           ) : (
//             messages.map((msg, index) => (
//               <Message key={index} sender={msg.sender} text={msg.text} />
//             ))
//           )}
//           {isLoading && <Message sender="ai" text="…" />}
//           <div ref={messagesEndRef} />
//         </div>
//       </div>
//       <ChatInput
//         input={input}
//         setInput={setInput}
//         onSubmit={handleSubmit}
//         isLoading={isLoading}
//       />
//     </div>
//   );
// }
// components/ChatWindow.js
// ... (imports and other code)
const handleSubmit = async (e)=>{
    e.preventDefault(); // Prevent default form submission
    // Ensure input has text, not loading, and user is logged in
    if (!input.trim() || isLoading || !token) return;
    const userMessage = {
        sender: 'user',
        text: input
    };
    setMessages((prev)=>[
            ...prev,
            userMessage
        ]);
    setInput('');
    setIsLoading(true);
    try {
        let replyText;
        let newChatId = chatId;
        // This block ONLY runs if no chat is currently selected (chatId is null/undefined)
        if (!chatId) {
            // --- Create NEW chat ---
            console.log("Attempting to create NEW chat..."); // Add log
            const res = await axios.post(`${API_BASE}/chats/new`, {
                message: input
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log("Response from /chats/new:", res.data); // Log response
            // --- Safely access response data ---
            replyText = res.data?.reply;
            newChatId = res.data?.chat?._id; // Use optional chaining
            if (newChatId && onChatCreated) {
                onChatCreated(newChatId); // Notify parent (dashboard)
            } else if (!newChatId) {
                console.error("New chat created, but ID was not returned:", res.data);
                // Optionally, inform parent to just refresh sidebar without selecting
                if (onChatCreated) onChatCreated(null);
            }
        } else {
            // --- Add message to EXISTING chat ---
            console.log(`Adding message to EXISTING chat: ${chatId}`); // Add log
            const res = await axios.post(`${API_BASE}/chats/${chatId}/message`, {
                message: input,
                sessionId: chatId
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            replyText = res.data?.reply; // Optional chaining
        }
        // Add AI reply only if replyText is valid
        if (replyText) {
            setMessages((prev)=>[
                    ...prev,
                    {
                        sender: 'ai',
                        text: replyText
                    }
                ]);
        } else {
            // Handle case where reply is missing
            console.error("No reply text received from backend.");
            setMessages((prev)=>[
                    ...prev,
                    {
                        sender: 'ai',
                        text: "Sorry, I couldn't get a response."
                    }
                ]);
        }
    } catch (error) {
        console.error("Send message failed:", error);
        const errorMsg = error.response?.data?.message || 'Sorry, could not send message.';
        setMessages((prev)=>[
                ...prev,
                {
                    sender: 'ai',
                    text: errorMsg
                }
            ]);
        // If creating a new chat failed, remove the user's optimistic message
        if (!chatId) {
            setMessages((prev)=>prev.slice(0, -1));
        }
    } finally{
        setIsLoading(false);
    }
}; // ... (rest of the component)
}),
"[project]/frontend/pages/dashboard.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// pages/dashboard.js
// import Layout from '../components/Layout';
// import ChatSidebar from '../components/ChatSidebar';
// import ChatWindow from '../components/ChatWindow';
// import { useAuth } from '../context/AuthContext';
// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// export default function Dashboard() {
//   const { isLoggedIn, token } = useAuth(); // Need token to pass to ChatWindow maybe
//   const router = useRouter();
//   const [isCheckingAuth, setIsCheckingAuth] = useState(true);
//   const [selectedChatId, setSelectedChatId] = useState(null); // State for selected chat
//   const [refreshSidebarKey, setRefreshSidebarKey] = useState(0); // State to trigger sidebar refresh
//   useEffect(() => {
//     if (isLoggedIn === null) return;
//     if (!isLoggedIn) {
//       router.push('/login');
//     } else {
//       setIsCheckingAuth(false);
//     }
//   }, [isLoggedIn, router]);
//   const handleSelectChat = (chatId) => {
//     setSelectedChatId(chatId);
//   };
//   const handleNewChat = () => {
//     setSelectedChatId(null); // Set to null for a new chat
//   };
//   // Callback function for ChatWindow to update chat ID after a new chat is created
//   const handleChatCreated = (newChatId) => {
//     setSelectedChatId(newChatId);
//     // Force sidebar refresh by changing its key
//     setRefreshSidebarKey(prevKey => prevKey + 1);
//   };
//   if (isCheckingAuth) {
//     return (
//       <Layout>
//         <div className="flex-1 flex items-center justify-center">
//           <p>Loading...</p>
//         </div>
//       </Layout>
//     );
//   }
//   return (
//     <Layout>
//       <div className="flex-1 flex h-full overflow-hidden">
//         {/* Pass functions and selected ID to Sidebar */}
//         {/* Use key prop to force re-fetch when a new chat is created */}
//         <ChatSidebar
//           key={refreshSidebarKey}
//           onSelectChat={handleSelectChat}
//           onNewChat={handleNewChat}
//           selectedChatId={selectedChatId}
//         />
//         {/* Pass selected ID and creation handler to ChatWindow */}
//         <div className="flex-1 h-full">
//           <ChatWindow
//             chatId={selectedChatId}
//             onChatCreated={handleChatCreated} // Pass the handler
//           />
//         </div>
//       </div>
//     </Layout>
//   );
// }
// pages/dashboard.js
__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$Layout$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/Layout.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ChatSidebar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/ChatSidebar.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ChatWindow$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/ChatWindow.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$context$2f$AuthContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/context/AuthContext.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ChatSidebar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ChatSidebar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
function Dashboard() {
    // Destructure loading state from useAuth
    const { isLoggedIn, token, loading: authLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$context$2f$AuthContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [selectedChatId, setSelectedChatId] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [refreshSidebarKey, setRefreshSidebarKey] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        // Wait until the auth status is determined
        if (authLoading) {
            return; // Do nothing while loading
        }
        // If not loading and not logged in, redirect
        if (!isLoggedIn) {
            router.push('/login');
        }
    }, [
        isLoggedIn,
        authLoading,
        router
    ]); // Add authLoading to dependencies
    const handleSelectChat = (chatId)=>{
        setSelectedChatId(chatId);
    };
    const handleNewChat = ()=>{
        setSelectedChatId(null);
    };
    const handleChatCreated = (newChatId)=>{
        if (newChatId) {
            setSelectedChatId(newChatId);
        }
        setRefreshSidebarKey((prevKey)=>prevKey + 1);
    };
    // Show a loading state while checking auth OR if not logged in yet (before redirect happens)
    if (authLoading || !isLoggedIn) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$Layout$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex-1 flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/frontend/pages/dashboard.js",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this),
                    " "
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/pages/dashboard.js",
                lineNumber: 124,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/pages/dashboard.js",
            lineNumber: 123,
            columnNumber: 7
        }, this);
    }
    // Render the dashboard only if loading is complete and user is logged in
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$Layout$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex-1 flex h-full overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ChatSidebar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onSelectChat: handleSelectChat,
                    onNewChat: handleNewChat,
                    selectedChatId: selectedChatId
                }, refreshSidebarKey, false, {
                    fileName: "[project]/frontend/pages/dashboard.js",
                    lineNumber: 135,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "flex-1 h-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ChatWindow$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        chatId: selectedChatId,
                        onChatCreated: handleChatCreated
                    }, void 0, false, {
                        fileName: "[project]/frontend/pages/dashboard.js",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/pages/dashboard.js",
                    lineNumber: 141,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/pages/dashboard.js",
            lineNumber: 134,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/pages/dashboard.js",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e0c93a9b._.js.map