module.exports = [
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("styled-jsx/style.js", () => require("styled-jsx/style.js"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/fyp/lib/auth.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getToken",
    ()=>getToken,
    "isLoggedIn",
    ()=>isLoggedIn,
    "removeToken",
    ()=>removeToken,
    "setToken",
    ()=>setToken
]);
const setToken = (token)=>{
    localStorage.setItem("token", token);
};
const getToken = ()=>{
    return localStorage.getItem("token");
};
const removeToken = ()=>{
    localStorage.removeItem("token");
};
const isLoggedIn = ()=>{
    return !!getToken();
};
}),
"[project]/fyp/components/LoggedInNavbar.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoggedInNavbar
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fyp$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fyp/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fyp$2f$lib$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fyp/lib/auth.js [ssr] (ecmascript)");
;
;
;
;
function LoggedInNavbar() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$fyp$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const logout = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$fyp$2f$lib$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["removeToken"])();
        router.push("/login");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
        className: "jsx-25d55ed785513dd0" + " " + "navbar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "jsx-25d55ed785513dd0" + " " + "navbar-left",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                    className: "jsx-25d55ed785513dd0" + " " + "logo",
                    children: "AI Document Guide"
                }, void 0, false, {
                    fileName: "[project]/fyp/components/LoggedInNavbar.js",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/fyp/components/LoggedInNavbar.js",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "jsx-25d55ed785513dd0" + " " + "navbar-right",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                        href: "/dashboard",
                        className: "jsx-25d55ed785513dd0" + " " + "nav-link",
                        children: "Dashboard"
                    }, void 0, false, {
                        fileName: "[project]/fyp/components/LoggedInNavbar.js",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                        href: "/chat",
                        className: "jsx-25d55ed785513dd0" + " " + "nav-link",
                        children: "Chat"
                    }, void 0, false, {
                        fileName: "[project]/fyp/components/LoggedInNavbar.js",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: logout,
                        className: "jsx-25d55ed785513dd0" + " " + "btn-logout",
                        children: "Logout"
                    }, void 0, false, {
                        fileName: "[project]/fyp/components/LoggedInNavbar.js",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/fyp/components/LoggedInNavbar.js",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "25d55ed785513dd0",
                children: ".navbar.jsx-25d55ed785513dd0{color:#fff;background:#171717;justify-content:space-between;align-items:center;padding:1rem 2rem;display:flex}.logo.jsx-25d55ed785513dd0{font-size:1.5rem;font-weight:700}.navbar-right.jsx-25d55ed785513dd0{align-items:center;gap:1rem;display:flex}.nav-link.jsx-25d55ed785513dd0{color:#fff;background:#0070f3;border-radius:5px;padding:.5rem 1rem;text-decoration:none;transition:background .2s}.nav-link.jsx-25d55ed785513dd0:hover{background:#0059c1}.btn-logout.jsx-25d55ed785513dd0{cursor:pointer;color:#fff;background:#dc2626;border:none;border-radius:5px;padding:.5rem 1rem;transition:background .2s}.btn-logout.jsx-25d55ed785513dd0:hover{background:#b91c1c}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/fyp/components/LoggedInNavbar.js",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/fyp/pages/chat.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Chat
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$fyp$2f$components$2f$LoggedInNavbar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/fyp/components/LoggedInNavbar.js [ssr] (ecmascript)");
"use client";
;
;
;
;
function Chat() {
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const sendMessage = async ()=>{
        if (!input.trim()) return;
        const userMessage = {
            role: "user",
            content: input
        };
        setMessages((prev)=>[
                ...prev,
                userMessage
            ]);
        setInput("");
        setLoading(true);
        try {
            const res = await fetch("http://localhost:5000/api/ai/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: userMessage.content
                })
            });
            const data = await res.json();
            const aiMessage = {
                role: "ai",
                content: data.reply
            };
            setMessages((prev)=>[
                    ...prev,
                    aiMessage
                ]);
        } catch (err) {
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: "ai",
                        content: "⚠️ Error connecting to AI service."
                    }
                ]);
        } finally{
            setLoading(false);
        }
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter") sendMessage();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$fyp$2f$components$2f$LoggedInNavbar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/fyp/pages/chat.js",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "jsx-567fe0b8ee61ab24" + " " + "chat-page",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "jsx-567fe0b8ee61ab24" + " " + "chat-container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "jsx-567fe0b8ee61ab24" + " " + "chat-box",
                            children: [
                                messages.map((msg, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "jsx-567fe0b8ee61ab24" + " " + `message ${msg.role === "user" ? "user" : "ai"}`,
                                        children: msg.content
                                    }, idx, false, {
                                        fileName: "[project]/fyp/pages/chat.js",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this)),
                                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "jsx-567fe0b8ee61ab24" + " " + "message ai",
                                    children: "Typing..."
                                }, void 0, false, {
                                    fileName: "[project]/fyp/pages/chat.js",
                                    lineNumber: 55,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/fyp/pages/chat.js",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "jsx-567fe0b8ee61ab24" + " " + "input-box",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                    value: input,
                                    onChange: (e)=>setInput(e.target.value),
                                    onKeyDown: handleKeyDown,
                                    placeholder: "Type your message...",
                                    className: "jsx-567fe0b8ee61ab24"
                                }, void 0, false, {
                                    fileName: "[project]/fyp/pages/chat.js",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: sendMessage,
                                    className: "jsx-567fe0b8ee61ab24",
                                    children: "Send"
                                }, void 0, false, {
                                    fileName: "[project]/fyp/pages/chat.js",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/fyp/pages/chat.js",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/fyp/pages/chat.js",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/fyp/pages/chat.js",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "567fe0b8ee61ab24",
                children: ".chat-page.jsx-567fe0b8ee61ab24{background:#f5f5f5;justify-content:center;min-height:90vh;padding:2rem;display:flex}.chat-container.jsx-567fe0b8ee61ab24{background:#fff;border-radius:12px;flex-direction:column;width:600px;display:flex;overflow:hidden;box-shadow:0 4px 15px #0000001a}.chat-box.jsx-567fe0b8ee61ab24{flex:1;padding:1rem;overflow-y:auto}.message.jsx-567fe0b8ee61ab24{border-radius:8px;max-width:70%;margin-bottom:.75rem;padding:.75rem 1rem}.message.user.jsx-567fe0b8ee61ab24{color:#fff;background:#0070f3;margin-left:auto}.message.ai.jsx-567fe0b8ee61ab24{color:#333;background:#e5e7eb;margin-right:auto}.input-box.jsx-567fe0b8ee61ab24{border-top:1px solid #ddd;display:flex}input.jsx-567fe0b8ee61ab24{border:none;outline:none;flex:1;padding:1rem;font-size:1rem}button.jsx-567fe0b8ee61ab24{color:#fff;cursor:pointer;background:#0070f3;border:none;padding:1rem 1.5rem;transition:background .2s}button.jsx-567fe0b8ee61ab24:hover{background:#005bb5}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__92d1ce91._.js.map