module.exports = [
"[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("styled-jsx/style.js", () => require("styled-jsx/style.js"));

module.exports = mod;
}),
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
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$context$2f$AuthContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/context/AuthContext.js [ssr] (ecmascript)");
;
;
;
;
;
function Navbar() {
    const { isLoggedIn, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$context$2f$AuthContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
        className: "jsx-e01be3b81df3d987" + " " + "fixed top-0 left-0 right-0 z-20 border-b border-emerald-900/40 bg-gradient-to-b from-gray-900/80 to-gray-900/40 backdrop-blur-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                className: "jsx-e01be3b81df3d987" + " " + "mx-auto max-w-6xl px-4 py-3 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "jsx-e01be3b81df3d987" + " " + "flex items-center justify-between w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "inline-flex items-center gap-3 group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "jsx-e01be3b81df3d987" + " " + "relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 ring-1 ring-emerald-500/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "jsx-e01be3b81df3d987" + " " + "absolute inset-0 rounded-xl blur-md bg-emerald-500/30 group-hover:bg-emerald-400/40 transition-colors"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/Navbar.js",
                                                lineNumber: 59,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "jsx-e01be3b81df3d987" + " " + "text-lg font-bold text-emerald-300",
                                                children: "AI"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/Navbar.js",
                                                lineNumber: 60,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/Navbar.js",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "jsx-e01be3b81df3d987" + " " + "text-lg sm:text-xl font-semibold tracking-tight text-gray-100",
                                        children: "Awaam AI"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/Navbar.js",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/Navbar.js",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "jsx-e01be3b81df3d987" + " " + "hidden md:flex items-center gap-3",
                                children: [
                                    !isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "nav-link",
                                                children: "Home"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/Navbar.js",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/info",
                                                className: "nav-link",
                                                children: "About"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/Navbar.js",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/get-started",
                                                className: "button-primary",
                                                children: "Get Started"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/Navbar.js",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/dashboard",
                                                className: "nav-link",
                                                children: "Dashboard"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/Navbar.js",
                                                lineNumber: 77,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/chat",
                                                className: "nav-link",
                                                children: "Chat"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/Navbar.js",
                                                lineNumber: 78,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: logout,
                                                className: "jsx-e01be3b81df3d987" + " " + "button-danger",
                                                children: "Logout"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/Navbar.js",
                                                lineNumber: 79,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/Navbar.js",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/Navbar.js",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        "aria-label": "Menu",
                        onClick: ()=>setMenuOpen((v)=>!v),
                        className: "jsx-e01be3b81df3d987" + " " + "md:hidden text-gray-200 hover:text-white transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            className: "jsx-e01be3b81df3d987" + " " + "w-6 h-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                fillRule: "evenodd",
                                d: "M3.75 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z",
                                clipRule: "evenodd",
                                className: "jsx-e01be3b81df3d987"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/Navbar.js",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/Navbar.js",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/Navbar.js",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/Navbar.js",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "jsx-e01be3b81df3d987" + " " + `md:hidden origin-top transition-all duration-300 ${menuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'} bg-gray-900/80 backdrop-blur-xl border-t border-gray-800`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "jsx-e01be3b81df3d987" + " " + "px-4 py-3 flex flex-col gap-2",
                    children: [
                        !isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "nav-link w-full",
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/Navbar.js",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/info",
                                    className: "nav-link w-full",
                                    children: "About"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/Navbar.js",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/get-started",
                                    className: "button-primary w-full text-center",
                                    children: "Get Started"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/Navbar.js",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true),
                        isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/dashboard",
                                    className: "nav-link w-full",
                                    children: "Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/Navbar.js",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/chat",
                                    className: "nav-link w-full",
                                    children: "Chat"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/Navbar.js",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: logout,
                                    className: "jsx-e01be3b81df3d987" + " " + "button-danger w-full",
                                    children: "Logout"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/Navbar.js",
                                    lineNumber: 106,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/Navbar.js",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/Navbar.js",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "e01be3b81df3d987",
                children: "@apply px-3 py-2 text-sm md:text-[18px]rounded-md text-gray-300 hover:text-white hover:bg-gray-800/60 transition-all duration-200 hover:scale-105;@apply px-4 py-2 rounded-md text-sm md:text-[18px]font-medium bg-emerald-600 text-white hover:bg-emerald-500 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25;@apply px-4 py-2 rounded-md text-sm md:text-[18px]font-medium bg-gray-800 text-gray-200 hover:bg-gray-700 transition-all duration-200 hover:scale-105;@apply px-4 py-2 rounded-md text-sm md:text-[18px]font-medium bg-red-600 text-white hover:bg-red-500 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25;"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/Navbar.js",
        lineNumber: 54,
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
                className: "relative bg-gray-900 text-gray-100 min-h-screen flex flex-col font-sans",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 -z-10",
                        "aria-hidden": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "absolute left-0 right-0 top-[-10%] mx-auto h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/Layout.js",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/Layout.js",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$Navbar$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/frontend/components/Layout.js",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                        className: "flex-1 flex flex-col pt-[57px] h-screen",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/Layout.js",
                        lineNumber: 21,
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
"[project]/frontend/lib/api.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/axios [external] (axios, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const api = __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__["default"].create({
    baseURL: "http://localhost:5000/api"
});
const __TURBOPACK__default__export__ = api;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/frontend/lib/auth.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// export const setToken = (token) => {
//   localStorage.setItem("token", token);
// };
// export const getToken = () => {
//   return localStorage.getItem("token");
// };
// export const removeToken = () => {
//   localStorage.removeItem("token");
// };
// export const isLoggedIn = () => {
//   return !!getToken();
// };
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
const isLoggedIn = ()=>!!getToken();
}),
"[project]/frontend/components/LiquidEther.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import styles from './LiquidEther.module.css';
// export default function LiquidEther({
//   mouseForce = 20,
//   cursorSize = 70,
//   isViscous = false,
//   viscous = 15,
//   iterationsViscous = 8,
//   iterationsPoisson = 8,
//   dt = 0.014,
//   BFECC = true,
//   resolution = 0.1,
//   isBounce = false,
//   colors = ['#10B981', '#34D399', '#065F46'],
//   style = {},
//   className = '',
//   autoDemo = true,
//   autoSpeed = 0.2,
//   autoIntensity = 1.2,
//   takeoverDuration = 0.25,
//   autoResumeDelay = 1000,
//   autoRampDuration = 0.6
// }) {
//   const mountRef = useRef(null);
//   const webglRef = useRef(null);
//   const resizeObserverRef = useRef(null);
//   const rafRef = useRef(null);
//   const intersectionObserverRef = useRef(null);
//   const isVisibleRef = useRef(true);
//   const resizeRafRef = useRef(null);
//   useEffect(() => {
//     if (!mountRef.current) return;
//     function makePaletteTexture(stops) {
//       let arr;
//       if (Array.isArray(stops) && stops.length > 0) {
//         if (stops.length === 1) {
//           arr = [stops[0], stops[0]];
//         } else {
//           arr = stops;
//         }
//       } else {
//         arr = ['#ffffff', '#ffffff'];
//       }
//       const w = arr.length;
//       const data = new Uint8Array(w * 4);
//       for (let i = 0; i < w; i++) {
//         const c = new THREE.Color(arr[i]);
//         data[i * 4 + 0] = Math.round(c.r * 255);
//         data[i * 4 + 1] = Math.round(c.g * 255);
//         data[i * 4 + 2] = Math.round(c.b * 255);
//         data[i * 4 + 3] = 255;
//       }
//       const tex = new THREE.DataTexture(data, w, 1, THREE.RGBAFormat);
//       tex.magFilter = THREE.LinearFilter;
//       tex.minFilter = THREE.LinearFilter;
//       tex.wrapS = THREE.ClampToEdgeWrapping;
//       tex.wrapT = THREE.ClampToEdgeWrapping;
//       tex.generateMipmaps = false;
//       tex.needsUpdate = true;
//       return tex;
//     }
//     const paletteTex = makePaletteTexture(colors);
//     const bgVec4 = new THREE.Vector4(0, 0, 0, 0);
//     class CommonClass {
//       constructor() {
//         this.width = 0;
//         this.height = 0;
//         this.aspect = 1;
//         this.pixelRatio = 1;
//         this.isMobile = false;
//         this.breakpoint = 768;
//         this.fboWidth = null;
//         this.fboHeight = null;
//         this.time = 0;
//         this.delta = 0;
//         this.container = null;
//         this.renderer = null;
//         this.clock = null;
//       }
//       init(container) {
//         this.container = container;
//         this.pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
//         this.resize();
//         this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//         this.renderer.autoClear = false;
//         this.renderer.setClearColor(new THREE.Color(0x000000), 0);
//         this.renderer.setPixelRatio(this.pixelRatio);
//         this.renderer.setSize(this.width, this.height);
//         this.renderer.domElement.style.width = '100%';
//         this.renderer.domElement.style.height = '100%';
//         this.renderer.domElement.style.display = 'block';
//         this.clock = new THREE.Clock();
//         this.clock.start();
//       }
//       resize() {
//         if (!this.container) return;
//         const rect = this.container.getBoundingClientRect();
//         this.width = Math.max(1, Math.floor(rect.width));
//         this.height = Math.max(1, Math.floor(rect.height));
//         this.aspect = this.width / this.height;
//         if (this.renderer) this.renderer.setSize(this.width, this.height, false);
//       }
//       update() {
//         this.delta = this.clock.getDelta();
//         this.time += this.delta;
//       }
//     }
//     const Common = new CommonClass();
//     class MouseClass {
//       constructor() {
//         this.mouseMoved = false;
//         this.coords = new THREE.Vector2();
//         this.coords_old = new THREE.Vector2();
//         this.diff = new THREE.Vector2();
//         this.timer = null;
//         this.container = null;
//         this._onMouseMove = this.onDocumentMouseMove.bind(this);
//         this._onTouchStart = this.onDocumentTouchStart.bind(this);
//         this._onTouchMove = this.onDocumentTouchMove.bind(this);
//         this._onMouseEnter = this.onMouseEnter.bind(this);
//         this._onMouseLeave = this.onMouseLeave.bind(this);
//         this._onTouchEnd = this.onTouchEnd.bind(this);
//         this.isHoverInside = false;
//         this.hasUserControl = false;
//         this.isAutoActive = false;
//         this.autoIntensity = 2.0;
//         this.takeoverActive = false;
//         this.takeoverStartTime = 0;
//         this.takeoverDuration = 0.25;
//         this.takeoverFrom = new THREE.Vector2();
//         this.takeoverTo = new THREE.Vector2();
//         this.onInteract = null;
//       }
//       init(container) {
//         this.container = container;
//         container.addEventListener('mousemove', this._onMouseMove, false);
//         container.addEventListener('touchstart', this._onTouchStart, false);
//         container.addEventListener('touchmove', this._onTouchMove, false);
//         container.addEventListener('mouseenter', this._onMouseEnter, false);
//         container.addEventListener('mouseleave', this._onMouseLeave, false);
//         container.addEventListener('touchend', this._onTouchEnd, false);
//       }
//       dispose() {
//         if (!this.container) return;
//         this.container.removeEventListener('mousemove', this._onMouseMove, false);
//         this.container.removeEventListener('touchstart', this._onTouchStart, false);
//         this.container.removeEventListener('touchmove', this._onTouchMove, false);
//         this.container.removeEventListener('mouseenter', this._onMouseEnter, false);
//         this.container.removeEventListener('mouseleave', this._onMouseLeave, false);
//         this.container.removeEventListener('touchend', this._onTouchEnd, false);
//       }
//       setCoords(x, y) {
//         if (!this.container) return;
//         if (this.timer) clearTimeout(this.timer);
//         const rect = this.container.getBoundingClientRect();
//         const nx = (x - rect.left) / rect.width;
//         const ny = (y - rect.top) / rect.height;
//         this.coords.set(nx * 2 - 1, -(ny * 2 - 1));
//         this.mouseMoved = true;
//         this.timer = setTimeout(() => {
//           this.mouseMoved = false;
//         }, 100);
//       }
//       setNormalized(nx, ny) {
//         this.coords.set(nx, ny);
//         this.mouseMoved = true;
//       }
//       onDocumentMouseMove(event) {
//         if (this.onInteract) this.onInteract();
//         const rect = this.container.getBoundingClientRect();
//         const nx = (event.clientX - rect.left) / rect.width;
//         const ny = (event.clientY - rect.top) / rect.height;
//         this.takeoverFrom.copy(this.coords);
//         this.takeoverTo.set(nx * 2 - 1, -(ny * 2 - 1));
//         this.takeoverStartTime = performance.now();
//         this.takeoverActive = true;
//         this.hasUserControl = true;
//         this.isAutoActive = false;
//       }
//       onDocumentTouchStart(event) {
//         if (event.touches.length === 1) {
//           const t = event.touches[0];
//           if (this.onInteract) this.onInteract();
//           this.setCoords(t.pageX, t.pageY);
//           this.hasUserControl = true;
//         }
//       }
//       onDocumentTouchMove(event) {
//         if (event.touches.length === 1) {
//           const t = event.touches[0];
//           if (this.onInteract) this.onInteract();
//           this.setCoords(t.pageX, t.pageY);
//         }
//       }
//       onTouchEnd() { this.isHoverInside = false; }
//       onMouseEnter() { this.isHoverInside = true; }
//       onMouseLeave() { this.isHoverInside = false; }
//       update() {
//         if (this.takeoverActive) {
//           const t = (performance.now() - this.takeoverStartTime) / (this.takeoverDuration * 1000);
//           if (t >= 1) {
//             this.takeoverActive = false;
//             this.coords.copy(this.takeoverTo);
//             this.coords_old.copy(this.coords);
//             this.diff.set(0, 0);
//           } else {
//             const k = t * t * (3 - 2 * t);
//             this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo, k);
//           }
//         }
//         this.diff.subVectors(this.coords, this.coords_old);
//         this.coords_old.copy(this.coords);
//         if (this.coords_old.x === 0 && this.coords_old.y === 0) this.diff.set(0, 0);
//         if (this.isAutoActive && !this.takeoverActive) this.diff.multiplyScalar(this.autoIntensity);
//       }
//     }
//     const Mouse = new MouseClass();
//     class AutoDriver {
//       constructor(mouse, manager, opts) {
//         this.mouse = mouse;
//         this.manager = manager;
//         this.enabled = opts.enabled;
//         this.speed = opts.speed;
//         this.resumeDelay = opts.resumeDelay || 3000;
//         this.rampDurationMs = (opts.rampDuration || 0) * 1000;
//         this.active = false;
//         this.current = new THREE.Vector2(0, 0);
//         this.target = new THREE.Vector2();
//         this.lastTime = performance.now();
//         this.activationTime = 0;
//         this.margin = 0.2;
//         this._tmpDir = new THREE.Vector2();
//         this.pickNewTarget();
//       }
//       pickNewTarget() {
//         const r = Math.random;
//         this.target.set((r() * 2 - 1) * (1 - this.margin), (r() * 2 - 1) * (1 - this.margin));
//       }
//       forceStop() { this.active = false; this.mouse.isAutoActive = false; }
//       update() {
//         if (!this.enabled) return;
//         const now = performance.now();
//         const idle = now - this.manager.lastUserInteraction;
//         if (idle < this.resumeDelay) { if (this.active) this.forceStop(); return; }
//         if (this.mouse.isHoverInside) { if (this.active) this.forceStop(); return; }
//         if (!this.active) { this.active = true; this.current.copy(this.mouse.coords); this.lastTime = now; this.activationTime = now; }
//         this.mouse.isAutoActive = true;
//         let dtSec = (now - this.lastTime) / 1000; this.lastTime = now; if (dtSec > 0.2) dtSec = 0.016;
//         const dir = this._tmpDir.subVectors(this.target, this.current); const dist = dir.length();
//         if (dist < 0.01) { this.pickNewTarget(); return; }
//         dir.normalize();
//         let ramp = 1; if (this.rampDurationMs > 0) { const t = Math.min(1, (now - this.activationTime) / this.rampDurationMs); ramp = t * t * (3 - 2 * t); }
//         const step = this.speed * dtSec * ramp; const move = Math.min(step, dist); this.current.addScaledVector(dir, move); this.mouse.setNormalized(this.current.x, this.current.y);
//       }
//     }
//     const face_vert = `attribute vec3 position; uniform vec2 px; uniform vec2 boundarySpace; varying vec2 uv; precision highp float; void main(){ vec3 pos = position; vec2 scale = 1.0 - boundarySpace * 2.0; pos.xy = pos.xy * scale; uv = vec2(0.5)+(pos.xy)*0.5; gl_Position = vec4(pos, 1.0); }`;
//     const line_vert = `attribute vec3 position; uniform vec2 px; precision highp float; varying vec2 uv; void main(){ vec3 pos = position; uv = 0.5 + pos.xy * 0.5; vec2 n = sign(pos.xy); pos.xy = abs(pos.xy) - px * 1.0; pos.xy *= n; gl_Position = vec4(pos, 1.0); }`;
//     const mouse_vert = `precision highp float; attribute vec3 position; attribute vec2 uv; uniform vec2 center; uniform vec2 scale; uniform vec2 px; varying vec2 vUv; void main(){ vec2 pos = position.xy * scale * 2.0 * px + center; vUv = uv; gl_Position = vec4(pos, 0.0, 1.0); }`;
//     const advection_frag = `precision highp float; uniform sampler2D velocity; uniform float dt; uniform bool isBFECC; uniform vec2 fboSize; uniform vec2 px; varying vec2 uv; void main(){ vec2 ratio = max(fboSize.x, fboSize.y) / fboSize; if(isBFECC == false){ vec2 vel = texture2D(velocity, uv).xy; vec2 uv2 = uv - vel * dt * ratio; vec2 newVel = texture2D(velocity, uv2).xy; gl_FragColor = vec4(newVel, 0.0, 0.0);} else { vec2 spot_new = uv; vec2 vel_old = texture2D(velocity, uv).xy; vec2 spot_old = spot_new - vel_old * dt * ratio; vec2 vel_new1 = texture2D(velocity, spot_old).xy; vec2 spot_new2 = spot_old + vel_new1 * dt * ratio; vec2 error = spot_new2 - spot_new; vec2 spot_new3 = spot_new - error / 2.0; vec2 vel_2 = texture2D(velocity, spot_new3).xy; vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio; vec2 newVel2 = texture2D(velocity, spot_old2).xy; gl_FragColor = vec4(newVel2, 0.0, 0.0);} }`;
//     const color_frag = `precision highp float; uniform sampler2D velocity; uniform sampler2D palette; uniform vec4 bgColor; varying vec2 uv; void main(){ vec2 vel = texture2D(velocity, uv).xy; float lenv = clamp(length(vel), 0.0, 1.0); vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb; vec3 outRGB = mix(bgColor.rgb, c, lenv); float outA = mix(bgColor.a, 1.0, lenv); gl_FragColor = vec4(outRGB, outA);} `;
//     const divergence_frag = `precision highp float; uniform sampler2D velocity; uniform float dt; uniform vec2 px; varying vec2 uv; void main(){ float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x; float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x; float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y; float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y; float divergence = (x1 - x0 + y1 - y0) / 2.0; gl_FragColor = vec4(divergence / dt);} `;
//     const externalForce_frag = `precision highp float; uniform vec2 force; uniform vec2 center; uniform vec2 scale; uniform vec2 px; varying vec2 vUv; void main(){ vec2 circle = (vUv - 0.5) * 2.0; float d = 1.0 - min(length(circle), 1.0); d *= d; gl_FragColor = vec4(force * d, 0.0, 1.0);} `;
//     const poisson_frag = `precision highp float; uniform sampler2D pressure; uniform sampler2D divergence; uniform vec2 px; varying vec2 uv; void main(){ float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r; float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r; float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r; float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r; float div = texture2D(divergence, uv).r; float newP = (p0 + p1 + p2 + p3) / 4.0 - div; gl_FragColor = vec4(newP);} `;
//     const pressure_frag = `precision highp float; uniform sampler2D pressure; uniform sampler2D velocity; uniform vec2 px; uniform float dt; varying vec2 uv; void main(){ float step = 1.0; float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r; float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r; float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r; float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r; vec2 v = texture2D(velocity, uv).xy; vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5; v = v - gradP * dt; gl_FragColor = vec4(v, 0.0, 1.0);} `;
//     const viscous_frag = `precision highp float; uniform sampler2D velocity; uniform sampler2D velocity_new; uniform float v; uniform vec2 px; uniform float dt; varying vec2 uv; void main(){ vec2 old = texture2D(velocity, uv).xy; vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy; vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy; vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy; vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy; vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3); newv /= 4.0 * (1.0 + v * dt); gl_FragColor = vec4(newv, 0.0, 0.0);} `;
//     class ShaderPass {
//       constructor(props) {
//         this.props = props || {};
//         this.uniforms = this.props.material?.uniforms;
//         this.scene = null; this.camera = null; this.material = null; this.geometry = null; this.plane = null;
//       }
//       init() {
//         this.scene = new THREE.Scene(); this.camera = new THREE.Camera();
//         if (this.uniforms) { this.material = new THREE.RawShaderMaterial(this.props.material); this.geometry = new THREE.PlaneGeometry(2.0, 2.0); this.plane = new THREE.Mesh(this.geometry, this.material); this.scene.add(this.plane); }
//       }
//       update() { Common.renderer.setRenderTarget(this.props.output || null); Common.renderer.render(this.scene, this.camera); Common.renderer.setRenderTarget(null); }
//     }
//     class Advection extends ShaderPass {
//       constructor(simProps) {
//         super({ material: { vertexShader: face_vert, fragmentShader: advection_frag, uniforms: { boundarySpace: { value: simProps.cellScale }, px: { value: simProps.cellScale }, fboSize: { value: simProps.fboSize }, velocity: { value: simProps.src.texture }, dt: { value: simProps.dt }, isBFECC: { value: true } } }, output: simProps.dst });
//         this.uniforms = this.props.material.uniforms; this.init(); this.createBoundary();
//       }
//       createBoundary() {
//         const boundaryG = new THREE.BufferGeometry();
//         const vertices_boundary = new Float32Array([ -1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0 ]);
//         boundaryG.setAttribute('position', new THREE.BufferAttribute(vertices_boundary, 3));
//         const boundaryM = new THREE.RawShaderMaterial({ vertexShader: line_vert, fragmentShader: advection_frag, uniforms: this.uniforms });
//         this.line = new THREE.LineSegments(boundaryG, boundaryM); this.scene.add(this.line);
//       }
//       update({ dt, isBounce, BFECC }) { this.uniforms.dt.value = dt; this.line.visible = isBounce; this.uniforms.isBFECC.value = BFECC; super.update(); }
//     }
//     class ExternalForce extends ShaderPass {
//       constructor(simProps) { super({ output: simProps.dst }); this.init(simProps); }
//       init(simProps) {
//         super.init();
//         const mouseG = new THREE.PlaneGeometry(1,1);
//         const mouseM = new THREE.RawShaderMaterial({ vertexShader: mouse_vert, fragmentShader: externalForce_frag, blending: THREE.AdditiveBlending, depthWrite: false, uniforms: { px: { value: simProps.cellScale }, force: { value: new THREE.Vector2(0.0,0.0) }, center: { value: new THREE.Vector2(0.0,0.0) }, scale: { value: new THREE.Vector2(simProps.cursor_size, simProps.cursor_size) } } });
//         this.mouse = new THREE.Mesh(mouseG, mouseM); this.scene.add(this.mouse);
//       }
//       update(props) {
//         const forceX = (Mouse.diff.x / 2) * props.mouse_force; const forceY = (Mouse.diff.y / 2) * props.mouse_force;
//         const cursorSizeX = props.cursor_size * props.cellScale.x; const cursorSizeY = props.cursor_size * props.cellScale.y;
//         const centerX = Math.min(Math.max(Mouse.coords.x, -1 + cursorSizeX + props.cellScale.x * 2), 1 - cursorSizeX - props.cellScale.x * 2);
//         const centerY = Math.min(Math.max(Mouse.coords.y, -1 + cursorSizeY + props.cellScale.y * 2), 1 - cursorSizeY - props.cellScale.y * 2);
//         const uniforms = this.mouse.material.uniforms; uniforms.force.value.set(forceX, forceY); uniforms.center.value.set(centerX, centerY); uniforms.scale.value.set(props.cursor_size, props.cursor_size); super.update();
//       }
//     }
//     class Viscous extends ShaderPass {
//       constructor(simProps) { super({ material: { vertexShader: face_vert, fragmentShader: viscous_frag, uniforms: { boundarySpace: { value: simProps.boundarySpace }, velocity: { value: simProps.src.texture }, velocity_new: { value: simProps.dst_.texture }, v: { value: simProps.viscous }, px: { value: simProps.cellScale }, dt: { value: simProps.dt } } }, output: simProps.dst, output0: simProps.dst_, output1: simProps.dst }); this.init(); }
//       update({ viscous, iterations, dt }) { let fbo_in, fbo_out; this.uniforms.v.value = viscous; for (let i = 0; i < iterations; i++) { if (i % 2 === 0) { fbo_in = this.props.output0; fbo_out = this.props.output1; } else { fbo_in = this.props.output1; fbo_out = this.props.output0; } this.uniforms.velocity_new.value = fbo_in.texture; this.props.output = fbo_out; this.uniforms.dt.value = dt; super.update(); } return fbo_out; }
//     }
//     class Divergence extends ShaderPass {
//       constructor(simProps) { super({ material: { vertexShader: face_vert, fragmentShader: divergence_frag, uniforms: { boundarySpace: { value: simProps.boundarySpace }, velocity: { value: simProps.src.texture }, px: { value: simProps.cellScale }, dt: { value: simProps.dt } } }, output: simProps.dst }); this.init(); }
//       update({ vel }) { this.uniforms.velocity.value = vel.texture; super.update(); }
//     }
//     class Poisson extends ShaderPass {
//       constructor(simProps) { super({ material: { vertexShader: face_vert, fragmentShader: poisson_frag, uniforms: { boundarySpace: { value: simProps.boundarySpace }, pressure: { value: simProps.dst_.texture }, divergence: { value: simProps.src.texture }, px: { value: simProps.cellScale } } }, output: simProps.dst, output0: simProps.dst_, output1: simProps.dst }); this.init(); }
//       update({ iterations }) { let p_in, p_out; for (let i = 0; i < iterations; i++) { if (i % 2 === 0) { p_in = this.props.output0; p_out = this.props.output1; } else { p_in = this.props.output1; p_out = this.props.output0; } this.uniforms.pressure.value = p_in.texture; this.props.output = p_out; super.update(); } return p_out; }
//     }
//     class Pressure extends ShaderPass {
//       constructor(simProps) { super({ material: { vertexShader: face_vert, fragmentShader: pressure_frag, uniforms: { boundarySpace: { value: simProps.boundarySpace }, pressure: { value: simProps.src_p.texture }, velocity: { value: simProps.src_v.texture }, px: { value: simProps.cellScale }, dt: { value: simProps.dt } } }, output: simProps.dst }); this.init(); }
//       update({ vel, pressure }) { this.uniforms.velocity.value = vel.texture; this.uniforms.pressure.value = pressure.texture; super.update(); }
//     }
//     class Simulation {
//       constructor(options) {
//         this.options = { iterations_poisson: 32, iterations_viscous: 32, mouse_force: 20, resolution: 0.5, cursor_size: 100, viscous: 30, isBounce: false, dt: 0.014, isViscous: false, BFECC: true, ...options };
//         this.fbos = { vel_0: null, vel_1: null, vel_viscous0: null, vel_viscous1: null, div: null, pressure_0: null, pressure_1: null };
//         this.fboSize = new THREE.Vector2(); this.cellScale = new THREE.Vector2(); this.boundarySpace = new THREE.Vector2(); this.init();
//       }
//       init() { this.calcSize(); this.createAllFBO(); this.createShaderPass(); }
//       getFloatType() { const isIOS = /(iPad|iPhone|iPod)/i.test(navigator.userAgent); return isIOS ? THREE.HalfFloatType : THREE.FloatType; }
//       createAllFBO() { const type = this.getFloatType(); const opts = { type, depthBuffer: false, stencilBuffer: false, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping }; for (let key in this.fbos) { this.fbos[key] = new THREE.WebGLRenderTarget(this.fboSize.x, this.fboSize.y, opts); } }
//       createShaderPass() {
//         this.advection = new Advection({ cellScale: this.cellScale, fboSize: this.fboSize, dt: this.options.dt, src: this.fbos.vel_0, dst: this.fbos.vel_1 });
//         this.externalForce = new ExternalForce({ cellScale: this.cellScale, cursor_size: this.options.cursor_size, dst: this.fbos.vel_1 });
//         this.viscous = new Viscous({ cellScale: this.cellScale, boundarySpace: this.boundarySpace, viscous: this.options.viscous, src: this.fbos.vel_1, dst: this.fbos.vel_viscous1, dst_: this.fbos.vel_viscous0, dt: this.options.dt });
//         this.divergence = new Divergence({ cellScale: this.cellScale, boundarySpace: this.boundarySpace, src: this.fbos.vel_viscous0, dst: this.fbos.div, dt: this.options.dt });
//         this.poisson = new Poisson({ cellScale: this.cellScale, boundarySpace: this.boundarySpace, src: this.fbos.div, dst: this.fbos.pressure_1, dst_: this.fbos.pressure_0 });
//         this.pressure = new Pressure({ cellScale: this.cellScale, boundarySpace: this.boundarySpace, src_p: this.fbos.pressure_0, src_v: this.fbos.vel_viscous0, dst: this.fbos.vel_0, dt: this.options.dt });
//       }
//       calcSize() { const width = Math.max(1, Math.round(this.options.resolution * Common.width)); const height = Math.max(1, Math.round(this.options.resolution * Common.height)); const px_x = 1.0 / width; const px_y = 1.0 / height; this.cellScale.set(px_x, px_y); this.fboSize.set(width, height); }
//       resize() { this.calcSize(); for (let key in this.fbos) { this.fbos[key].setSize(this.fboSize.x, this.fboSize.y); } }
//       update() {
//         if (this.options.isBounce) { this.boundarySpace.set(0,0); } else { this.boundarySpace.copy(this.cellScale); }
//         this.advection.update({ dt: this.options.dt, isBounce: this.options.isBounce, BFECC: this.options.BFECC });
//         this.externalForce.update({ cursor_size: this.options.cursor_size, mouse_force: this.options.mouse_force, cellScale: this.cellScale });
//         let vel = this.fbos.vel_1;
//         if (this.options.isViscous) { vel = this.viscous.update({ viscous: this.options.viscous, iterations: this.options.iterations_viscous, dt: this.options.dt }); }
//         this.divergence.update({ vel });
//         const pressure = this.poisson.update({ iterations: this.options.iterations_poisson });
//         this.pressure.update({ vel, pressure });
//       }
//     }
//     class Output { constructor(){ this.init(); }
//       init(){ this.simulation = new Simulation(); this.scene = new THREE.Scene(); this.camera = new THREE.Camera(); this.output = new THREE.Mesh(new THREE.PlaneGeometry(2,2), new THREE.RawShaderMaterial({ vertexShader: face_vert, fragmentShader: color_frag, transparent: true, depthWrite: false, uniforms: { velocity: { value: this.simulation.fbos.vel_0.texture }, boundarySpace: { value: new THREE.Vector2() }, palette: { value: paletteTex }, bgColor: { value: bgVec4 } } })); this.scene.add(this.output); }
//       resize(){ this.simulation.resize(); }
//       render(){ Common.renderer.setRenderTarget(null); Common.renderer.render(this.scene, this.camera); }
//       update(){ this.simulation.update(); this.render(); }
//     }
//     class WebGLManager {
//       constructor(props){ this.props = props; Common.init(props.$wrapper); Mouse.init(props.$wrapper); Mouse.autoIntensity = props.autoIntensity; Mouse.takeoverDuration = props.takeoverDuration; this.lastUserInteraction = performance.now(); Mouse.onInteract = () => { this.lastUserInteraction = performance.now(); if (this.autoDriver) this.autoDriver.forceStop(); }; this.autoDriver = new AutoDriver(Mouse, this, { enabled: props.autoDemo, speed: props.autoSpeed, resumeDelay: props.autoResumeDelay, rampDuration: props.autoRampDuration }); this.init(); this._loop = this.loop.bind(this); this._resize = this.resize.bind(this); window.addEventListener('resize', this._resize); this._onVisibility = () => { const hidden = document.hidden; if (hidden) { this.pause(); } else if (isVisibleRef.current) { this.start(); } }; document.addEventListener('visibilitychange', this._onVisibility); this.running = false; }
//       init(){ this.props.$wrapper.prepend(Common.renderer.domElement); this.output = new Output(); }
//       resize(){ Common.resize(); this.output.resize(); }
//       render(){ if (this.autoDriver) this.autoDriver.update(); Mouse.update(); Common.update(); this.output.update(); }
//       loop(){ if (!this.running) return; this.render(); rafRef.current = requestAnimationFrame(this._loop); }
//       start(){ if (this.running) return; this.running = true; this._loop(); }
//       pause(){ this.running = false; if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null; } }
//       dispose(){ try { window.removeEventListener('resize', this._resize); document.removeEventListener('visibilitychange', this._onVisibility); Mouse.dispose(); if (Common.renderer) { const canvas = Common.renderer.domElement; if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas); Common.renderer.dispose(); } } catch(e){ void 0; } }
//     }
//     const container = mountRef.current; container.style.position = container.style.position || 'relative'; container.style.overflow = container.style.overflow || 'hidden';
//     const webgl = new WebGLManager({ $wrapper: container, autoDemo, autoSpeed, autoIntensity, takeoverDuration, autoResumeDelay, autoRampDuration }); webglRef.current = webgl;
//     const applyOptionsFromProps = () => { if (!webglRef.current) return; const sim = webglRef.current.output?.simulation; if (!sim) return; const prevRes = sim.options.resolution; Object.assign(sim.options, { mouse_force: mouseForce, cursor_size: cursorSize, isViscous, viscous, iterations_viscous: iterationsViscous, iterations_poisson: iterationsPoisson, dt, BFECC, resolution, isBounce }); if (resolution !== prevRes) { sim.resize(); } };
//     applyOptionsFromProps();
//     webgl.start();
//     const io = new IntersectionObserver(entries => { const entry = entries[0]; const isVisible = entry.isIntersecting && entry.intersectionRatio > 0; isVisibleRef.current = isVisible; if (!webglRef.current) return; if (isVisible && !document.hidden) { webglRef.current.start(); } else { webglRef.current.pause(); } }, { threshold: [0, 0.01, 0.1] });
//     io.observe(container); intersectionObserverRef.current = io;
//     const ro = new ResizeObserver(() => { if (!webglRef.current) return; if (resizeRafRef.current) cancelAnimationFrame(resizeRafRef.current); resizeRafRef.current = requestAnimationFrame(() => { if (!webglRef.current) return; webglRef.current.resize(); }); });
//     ro.observe(container); resizeObserverRef.current = ro;
//     return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); if (resizeObserverRef.current) { try { resizeObserverRef.current.disconnect(); } catch(e){ void 0; } } if (intersectionObserverRef.current) { try { intersectionObserverRef.current.disconnect(); } catch(e){ void 0; } } if (webglRef.current) { webglRef.current.dispose(); } webglRef.current = null; };
//   }, [BFECC, cursorSize, dt, isBounce, isViscous, iterationsPoisson, iterationsViscous, mouseForce, resolution, viscous, colors, autoDemo, autoSpeed, autoIntensity, takeoverDuration, autoResumeDelay, autoRampDuration]);
//   useEffect(() => {
//     const webgl = webglRef.current; if (!webgl) return; const sim = webgl.output?.simulation; if (!sim) return; const prevRes = sim.options.resolution; Object.assign(sim.options, { mouse_force: mouseForce, cursor_size: cursorSize, isViscous, viscous, iterations_viscous: iterationsViscous, iterations_poisson: iterationsPoisson, dt, BFECC, resolution, isBounce }); if (webgl.autoDriver) { webgl.autoDriver.enabled = autoDemo; webgl.autoDriver.speed = autoSpeed; webgl.autoDriver.resumeDelay = autoResumeDelay; webgl.autoDriver.rampDurationMs = autoRampDuration * 1000; if (webgl.autoDriver.mouse) { webgl.autoDriver.mouse.autoIntensity = autoIntensity; webgl.autoDriver.mouse.takeoverDuration = takeoverDuration; } } if (resolution !== prevRes) { sim.resize(); }
//   }, [mouseForce, cursorSize, isViscous, viscous, iterationsViscous, iterationsPoisson, dt, BFECC, resolution, isBounce, autoDemo, autoSpeed, autoIntensity, takeoverDuration, autoResumeDelay, autoRampDuration]);
//   return <div ref={mountRef} className={`${styles.liquidEtherContainer} ${className || ''}`} style={style} />;
// }
// pages/dashboard.js
__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dynamic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dynamic.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$Layout$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/Layout.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$context$2f$AuthContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/context/AuthContext.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/api.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/auth.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
// Lazy-load LiquidEther on client only
const LiquidEther = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dynamic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/frontend/components/LiquidEther.js [ssr] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/frontend/components/LiquidEther.js [client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>null
});
function Dashboard() {
    const { isLoggedIn, loading: authLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$context$2f$AuthContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [chatStats, setChatStats] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        total: 0,
        today: 0
    });
    const [recentChats, setRecentChats] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    // control whether to mount heavy background (client-only and wide screens)
    const [showBackground, setShowBackground] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!authLoading && !isLoggedIn) router.push('/login');
    }, [
        authLoading,
        isLoggedIn,
        router
    ]);
    // show background only on client & wide screens
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const MIN_WIDTH = undefined; // adjust if you want background on smaller screens
        const set = undefined;
    }, []);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (isLoggedIn) {
            fetchDashboardData();
        }
    }, [
        isLoggedIn
    ]);
    const fetchDashboardData = async ()=>{
        setLoading(true);
        try {
            const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getToken"])();
            const headers = {
                Authorization: `Bearer ${token}`
            };
            // fetch in parallel to reduce wait time
            const [statsRes, chatsRes] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].get('/user/stats', {
                    headers
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].get('/chats', {
                    headers
                })
            ]);
            setUserData(statsRes.data.user);
            setChatStats({
                total: statsRes.data.totalChats,
                today: statsRes.data.todayChats
            });
            setRecentChats(Array.isArray(chatsRes.data) ? chatsRes.data.slice(0, 5) : []);
        } catch (error) {
            console.error('Failed to fetch dashboard data:', error);
            setUserData({
                username: 'Guest',
                email: 'guest@example.com',
                createdAt: new Date()
            });
            setChatStats({
                total: 0,
                today: 0
            });
            setRecentChats([]);
        } finally{
            setLoading(false);
        }
    };
    if (authLoading || !isLoggedIn) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$Layout$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex-1 grid place-items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    className: "text-gray-400",
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/frontend/components/LiquidEther.js",
                    lineNumber: 495,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/LiquidEther.js",
                lineNumber: 494,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/components/LiquidEther.js",
            lineNumber: 493,
            columnNumber: 7
        }, this);
    }
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$Layout$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex-1 grid place-items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500 mx-auto mb-2"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/LiquidEther.js",
                            lineNumber: 506,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "text-gray-400",
                            children: "Loading dashboard..."
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/LiquidEther.js",
                            lineNumber: 507,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/LiquidEther.js",
                    lineNumber: 505,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/LiquidEther.js",
                lineNumber: 504,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/components/LiquidEther.js",
            lineNumber: 503,
            columnNumber: 7
        }, this);
    }
    const demoLinks = [
        {
            title: 'Start a new chat',
            href: '/chat'
        },
        {
            title: 'See information',
            href: '/info'
        },
        {
            title: 'DLIMS status',
            href: '/chat'
        },
        {
            title: 'NADRA services',
            href: '/chat'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$Layout$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                showBackground && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 -z-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(LiquidEther, {
                        colors: [
                            '#0EA5A3',
                            '#10B981',
                            '#065F46'
                        ],
                        mouseForce: 18,
                        cursorSize: 80,
                        isViscous: false,
                        viscous: 15,
                        iterationsViscous: 8,
                        iterationsPoisson: 8,
                        resolution: 0.35,
                        isBounce: false,
                        autoDemo: true,
                        autoSpeed: 0.35,
                        autoIntensity: 1.6,
                        takeoverDuration: 0.25,
                        autoResumeDelay: 3000,
                        autoRampDuration: 0.6,
                        maxPixelRatio: 1,
                        style: {
                            width: '100%',
                            height: '100%'
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/LiquidEther.js",
                        lineNumber: 527,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/components/LiquidEther.js",
                    lineNumber: 526,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "relative z-10 mx-auto max-w-6xl px-4 py-8 space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl md:text-3xl font-bold text-gray-100",
                                    children: [
                                        "Welcome back, ",
                                        userData?.username || 'Guest',
                                        "!"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                    lineNumber: 552,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-gray-400",
                                    children: "Here's your personalized dashboard with insights and quick access."
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                    lineNumber: 555,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/LiquidEther.js",
                            lineNumber: 551,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                            className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-emerald-900/40 bg-gray-900/60 p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-gray-100",
                                            children: "Total Chats"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/LiquidEther.js",
                                            lineNumber: 561,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-2xl font-bold text-emerald-400",
                                            children: chatStats.total
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/LiquidEther.js",
                                            lineNumber: 562,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                    lineNumber: 560,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-emerald-900/40 bg-gray-900/60 p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-gray-100",
                                            children: "Today's Chats"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/LiquidEther.js",
                                            lineNumber: 566,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-2xl font-bold text-emerald-400",
                                            children: chatStats.today
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/LiquidEther.js",
                                            lineNumber: 567,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                    lineNumber: 565,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-emerald-900/40 bg-gray-900/60 p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-gray-100",
                                            children: "Account Status"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/LiquidEther.js",
                                            lineNumber: 571,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm text-emerald-400",
                                            children: "✓ Active"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/LiquidEther.js",
                                            lineNumber: 572,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                    lineNumber: 570,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-emerald-900/40 bg-gray-900/60 p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-gray-100",
                                            children: "Member Since"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/LiquidEther.js",
                                            lineNumber: 576,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm text-gray-400",
                                            children: userData?.createdAt ? new Date(userData.createdAt).toLocaleDateString() : '2025'
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/LiquidEther.js",
                                            lineNumber: 577,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                    lineNumber: 575,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/LiquidEther.js",
                            lineNumber: 559,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                            className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-emerald-900/40 bg-gray-900/60 p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-gray-100",
                                            children: "Your Profile"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/LiquidEther.js",
                                            lineNumber: 586,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("dl", {
                                            className: "mt-3 space-y-1 text-sm text-gray-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("dt", {
                                                            children: "Username"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/components/LiquidEther.js",
                                                            lineNumber: 588,
                                                            columnNumber: 55
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("dd", {
                                                            className: "text-gray-200",
                                                            children: userData?.username || 'Guest'
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/components/LiquidEther.js",
                                                            lineNumber: 588,
                                                            columnNumber: 72
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                                    lineNumber: 588,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("dt", {
                                                            children: "Email"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/components/LiquidEther.js",
                                                            lineNumber: 589,
                                                            columnNumber: 55
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("dd", {
                                                            className: "text-gray-200",
                                                            children: userData?.email || 'guest@example.com'
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/components/LiquidEther.js",
                                                            lineNumber: 589,
                                                            columnNumber: 69
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                                    lineNumber: 589,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("dt", {
                                                            children: "Status"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/components/LiquidEther.js",
                                                            lineNumber: 590,
                                                            columnNumber: 55
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("dd", {
                                                            className: "text-emerald-400",
                                                            children: "Online"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/components/LiquidEther.js",
                                                            lineNumber: 590,
                                                            columnNumber: 70
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                                    lineNumber: 590,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/LiquidEther.js",
                                            lineNumber: 587,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                    lineNumber: 585,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-emerald-900/40 bg-gray-900/60 p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-gray-100",
                                            children: "Usage Insights"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/LiquidEther.js",
                                            lineNumber: 595,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm text-gray-400",
                                            children: chatStats.today > 0 ? `You've been active today with ${chatStats.today} chat${chatStats.today > 1 ? 's' : ''}.` : 'Start your first chat today to get personalized insights.'
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/LiquidEther.js",
                                            lineNumber: 596,
                                            columnNumber: 15
                                        }, this),
                                        chatStats.total > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-xs text-gray-500",
                                            children: [
                                                "Average: ",
                                                Math.round(chatStats.total / Math.max(1, Math.floor((Date.now() - new Date(userData?.createdAt || Date.now()).getTime()) / (1000 * 60 * 60 * 24)))),
                                                " chats/day"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/LiquidEther.js",
                                            lineNumber: 603,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                    lineNumber: 594,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-emerald-900/40 bg-gray-900/60 p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-gray-100",
                                            children: "Tips & Tricks"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/LiquidEther.js",
                                            lineNumber: 610,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                            className: "mt-2 list-disc pl-5 text-sm text-gray-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "Ask in Urdu or English"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                                    lineNumber: 612,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: 'Prefix with department: "NADRA: family registration"'
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                                    lineNumber: 613,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "Use specific keywords for better results"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                                    lineNumber: 614,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/LiquidEther.js",
                                            lineNumber: 611,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                    lineNumber: 609,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/LiquidEther.js",
                            lineNumber: 584,
                            columnNumber: 11
                        }, this),
                        recentChats.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold text-gray-100 mb-4",
                                    children: "Recent Activity"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                    lineNumber: 622,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: recentChats.map((chat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl border border-emerald-900/40 bg-gray-900/60 p-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-start",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                                className: "text-sm font-medium text-gray-100",
                                                                children: chat.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/components/LiquidEther.js",
                                                                lineNumber: 628,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-500 mt-1",
                                                                children: [
                                                                    chat.lastMessage?.slice(0, 60) || 'No messages yet',
                                                                    "..."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend/components/LiquidEther.js",
                                                                lineNumber: 629,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/components/LiquidEther.js",
                                                        lineNumber: 627,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-gray-600",
                                                        children: chat.updatedAt ? new Date(chat.updatedAt).toLocaleDateString() : ''
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/LiquidEther.js",
                                                        lineNumber: 631,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/components/LiquidEther.js",
                                                lineNumber: 626,
                                                columnNumber: 21
                                            }, this)
                                        }, chat._id || index, false, {
                                            fileName: "[project]/frontend/components/LiquidEther.js",
                                            lineNumber: 625,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                    lineNumber: 623,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/LiquidEther.js",
                            lineNumber: 621,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold text-gray-100 mb-4",
                                    children: "Government Services"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                    lineNumber: 643,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
                                    children: [
                                        'DLIMS',
                                        'NADRA',
                                        'DGIP',
                                        'Zameen',
                                        'ECP',
                                        'FBR',
                                        'SECP',
                                        'PSP'
                                    ].map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl border border-emerald-900/40 bg-gray-900/60 p-4 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-100",
                                                    children: service
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                                    lineNumber: 647,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: "Government Service"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                                    lineNumber: 648,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                    href: "/chat",
                                                    className: "text-xs text-emerald-400 hover:text-emerald-300 mt-2 inline-block",
                                                    children: [
                                                        "Ask about ",
                                                        service,
                                                        " →"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                                    lineNumber: 649,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, service, true, {
                                            fileName: "[project]/frontend/components/LiquidEther.js",
                                            lineNumber: 646,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                    lineNumber: 644,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/LiquidEther.js",
                            lineNumber: 642,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold text-gray-100 mb-4",
                                    children: "Quick Actions"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                    lineNumber: 659,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "grid gap-3 sm:grid-cols-2 md:grid-cols-3",
                                    children: demoLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                            href: link.href,
                                            className: "rounded-xl border border-emerald-900/40 bg-gray-900/60 p-4 text-sm text-gray-300 hover:border-emerald-800 hover:text-white transition-colors",
                                            children: link.title
                                        }, link.title, false, {
                                            fileName: "[project]/frontend/components/LiquidEther.js",
                                            lineNumber: 662,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                    lineNumber: 660,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/LiquidEther.js",
                            lineNumber: 658,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold text-gray-100 mb-4",
                                    children: "Latest Updates"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                    lineNumber: 671,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl border border-emerald-900/40 bg-gray-900/60 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-100",
                                                    children: "New DLIMS Features"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                                    lineNumber: 674,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-400 mt-1",
                                                    children: "Updated information about DLIMS services and requirements."
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                                    lineNumber: 675,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-600",
                                                    children: "2 days ago"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                                    lineNumber: 676,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/LiquidEther.js",
                                            lineNumber: 673,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl border border-emerald-900/40 bg-gray-900/60 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-100",
                                                    children: "NADRA Process Updates"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                                    lineNumber: 679,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-400 mt-1",
                                                    children: "Streamlined procedures for CNIC applications."
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                                    lineNumber: 680,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-600",
                                                    children: "1 week ago"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                                    lineNumber: 681,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/LiquidEther.js",
                                            lineNumber: 678,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl border border-emerald-900/40 bg-gray-900/60 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-100",
                                                    children: "System Maintenance"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                                    lineNumber: 684,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-400 mt-1",
                                                    children: "Scheduled maintenance completed successfully."
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                                    lineNumber: 685,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-600",
                                                    children: "2 weeks ago"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                                    lineNumber: 686,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/LiquidEther.js",
                                            lineNumber: 683,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/LiquidEther.js",
                                    lineNumber: 672,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/LiquidEther.js",
                            lineNumber: 670,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/LiquidEther.js",
                    lineNumber: 549,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/LiquidEther.js",
            lineNumber: 523,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/components/LiquidEther.js",
        lineNumber: 522,
        columnNumber: 5
    }, this);
} //======================================================
 // // components/LiquidEther.js
 // import { useEffect, useRef } from 'react';
 // import * as THREE from 'three';
 // import styles from './LiquidEther.module.css';
 // export default function LiquidEther({
 //   mouseForce = 20,
 //   cursorSize = 70,
 //   isViscous = false,
 //   viscous = 15,
 //   iterationsViscous = 8,
 //   iterationsPoisson = 8,
 //   dt = 0.014,
 //   BFECC = true,
 //   resolution = 0.12,
 //   isBounce = false,
 //   colors = ['#10B981', '#34D399', '#065F46'],
 //   style = {},
 //   className = '',
 //   autoDemo = true,
 //   autoSpeed = 0.2,
 //   autoIntensity = 1.2,
 //   takeoverDuration = 0.25,
 //   autoResumeDelay = 1000,
 //   autoRampDuration = 0.6,
 //   maxPixelRatio = 1 // clamp devicePixelRatio (important for perf)
 // }) {
 //   const mountRef = useRef(null);
 //   const webglRef = useRef(null);
 //   const resizeObserverRef = useRef(null);
 //   const rafRef = useRef(null);
 //   const intersectionObserverRef = useRef(null);
 //   const isVisibleRef = useRef(true);
 //   const resizeRafRef = useRef(null);
 //   // Helper: make palette texture
 //   function makePaletteTexture(stops) {
 //     let arr;
 //     if (Array.isArray(stops) && stops.length > 0) {
 //       arr = stops.length === 1 ? [stops[0], stops[0]] : stops;
 //     } else arr = ['#ffffff', '#ffffff'];
 //     const w = arr.length;
 //     const data = new Uint8Array(w * 4);
 //     for (let i = 0; i < w; i++) {
 //       const c = new THREE.Color(arr[i]);
 //       data[i * 4 + 0] = Math.round(c.r * 255);
 //       data[i * 4 + 1] = Math.round(c.g * 255);
 //       data[i * 4 + 2] = Math.round(c.b * 255);
 //       data[i * 4 + 3] = 255;
 //     }
 //     const tex = new THREE.DataTexture(data, w, 1, THREE.RGBAFormat);
 //     tex.magFilter = THREE.LinearFilter;
 //     tex.minFilter = THREE.LinearFilter;
 //     tex.wrapS = THREE.ClampToEdgeWrapping;
 //     tex.wrapT = THREE.ClampToEdgeWrapping;
 //     tex.generateMipmaps = false;
 //     tex.needsUpdate = true;
 //     return tex;
 //   }
 //   useEffect(() => {
 //     if (!mountRef.current) return;
 //     const paletteTex = makePaletteTexture(colors);
 //     const bgVec4 = new THREE.Vector4(0, 0, 0, 0);
 //     /* ---------------------
 //        Minimal Common wrapper (renderer + size handling)
 //        --------------------- */
 //     class CommonClass {
 //       constructor() {
 //         this.width = 0;
 //         this.height = 0;
 //         this.aspect = 1;
 //         this.pixelRatio = 1;
 //         this.container = null;
 //         this.renderer = null;
 //         this.clock = null;
 //       }
 //       init(container) {
 //         this.container = container;
 //         // clamp pixel ratio to avoid expensive hi-dpi rendering
 //         this.pixelRatio = Math.min(window.devicePixelRatio || 1, maxPixelRatio);
 //         this.resize();
 //         this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
 //         this.renderer.autoClear = false;
 //         this.renderer.setClearColor(new THREE.Color(0x000000), 0);
 //         this.renderer.setPixelRatio(this.pixelRatio);
 //         this.renderer.setSize(this.width, this.height);
 //         this.renderer.domElement.style.width = '100%';
 //         this.renderer.domElement.style.height = '100%';
 //         this.renderer.domElement.style.display = 'block';
 //         this.clock = new THREE.Clock();
 //         this.clock.start();
 //       }
 //       resize() {
 //         if (!this.container) return;
 //         const rect = this.container.getBoundingClientRect();
 //         this.width = Math.max(1, Math.floor(rect.width));
 //         this.height = Math.max(1, Math.floor(rect.height));
 //         this.aspect = this.width / this.height;
 //         if (this.renderer) this.renderer.setSize(this.width, this.height, false);
 //       }
 //       update() {
 //         this.delta = this.clock.getDelta();
 //         this.time += this.delta;
 //       }
 //     }
 //     const Common = new CommonClass();
 //     /* ---------------------
 //        Mouse / AutoDriver (unchanged logic but kept simple)
 //        --------------------- */
 //     class MouseClass {
 //       constructor() {
 //         this.coords = new THREE.Vector2();
 //         this.coords_old = new THREE.Vector2();
 //         this.diff = new THREE.Vector2();
 //         this.timer = null;
 //         this.container = null;
 //         this._onMouseMove = this.onDocumentMouseMove.bind(this);
 //         this._onTouchStart = this.onDocumentTouchStart.bind(this);
 //         this._onTouchMove = this.onDocumentTouchMove.bind(this);
 //         this._onMouseEnter = this.onMouseEnter.bind(this);
 //         this._onMouseLeave = this.onMouseLeave.bind(this);
 //         this._onTouchEnd = this.onTouchEnd.bind(this);
 //         this.isHoverInside = false;
 //         this.hasUserControl = false;
 //         this.isAutoActive = false;
 //         this.autoIntensity = 2.0;
 //         this.takeoverActive = false;
 //         this.takeoverStartTime = 0;
 //         this.takeoverDuration = 0.25;
 //         this.takeoverFrom = new THREE.Vector2();
 //         this.takeoverTo = new THREE.Vector2();
 //         this.onInteract = null;
 //       }
 //       init(container) {
 //         this.container = container;
 //         container.addEventListener('mousemove', this._onMouseMove, false);
 //         container.addEventListener('touchstart', this._onTouchStart, false);
 //         container.addEventListener('touchmove', this._onTouchMove, false);
 //         container.addEventListener('mouseenter', this._onMouseEnter, false);
 //         container.addEventListener('mouseleave', this._onMouseLeave, false);
 //         container.addEventListener('touchend', this._onTouchEnd, false);
 //       }
 //       dispose() {
 //         if (!this.container) return;
 //         this.container.removeEventListener('mousemove', this._onMouseMove, false);
 //         this.container.removeEventListener('touchstart', this._onTouchStart, false);
 //         this.container.removeEventListener('touchmove', this._onTouchMove, false);
 //         this.container.removeEventListener('mouseenter', this._onMouseEnter, false);
 //         this.container.removeEventListener('mouseleave', this._onMouseLeave, false);
 //         this.container.removeEventListener('touchend', this._onTouchEnd, false);
 //       }
 //       setCoords(x, y) {
 //         if (!this.container) return;
 //         if (this.timer) clearTimeout(this.timer);
 //         const rect = this.container.getBoundingClientRect();
 //         const nx = (x - rect.left) / rect.width;
 //         const ny = (y - rect.top) / rect.height;
 //         this.coords.set(nx * 2 - 1, -(ny * 2 - 1));
 //         this.timer = setTimeout(() => {
 //           // no-op: used to mark movement end
 //         }, 100);
 //       }
 //       setNormalized(nx, ny) {
 //         this.coords.set(nx, ny);
 //       }
 //       onDocumentMouseMove(event) {
 //         if (this.onInteract) this.onInteract();
 //         const rect = this.container.getBoundingClientRect();
 //         const nx = (event.clientX - rect.left) / rect.width;
 //         const ny = (event.clientY - rect.top) / rect.height;
 //         this.takeoverFrom.copy(this.coords);
 //         this.takeoverTo.set(nx * 2 - 1, -(ny * 2 - 1));
 //         this.takeoverStartTime = performance.now();
 //         this.takeoverActive = true;
 //         this.hasUserControl = true;
 //         this.isAutoActive = false;
 //       }
 //       onDocumentTouchStart(event) {
 //         if (event.touches.length === 1) {
 //           const t = event.touches[0];
 //           if (this.onInteract) this.onInteract();
 //           this.setCoords(t.pageX, t.pageY);
 //           this.hasUserControl = true;
 //         }
 //       }
 //       onDocumentTouchMove(event) {
 //         if (event.touches.length === 1) {
 //           const t = event.touches[0];
 //           if (this.onInteract) this.onInteract();
 //           this.setCoords(t.pageX, t.pageY);
 //         }
 //       }
 //       onTouchEnd() { this.isHoverInside = false; }
 //       onMouseEnter() { this.isHoverInside = true; }
 //       onMouseLeave() { this.isHoverInside = false; }
 //       update() {
 //         if (this.takeoverActive) {
 //           const t = (performance.now() - this.takeoverStartTime) / (this.takeoverDuration * 1000);
 //           if (t >= 1) {
 //             this.takeoverActive = false;
 //             this.coords.copy(this.takeoverTo);
 //             this.coords_old.copy(this.coords);
 //             this.diff.set(0, 0);
 //           } else {
 //             const k = t * t * (3 - 2 * t);
 //             this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo, k);
 //           }
 //         }
 //         this.diff.subVectors(this.coords, this.coords_old);
 //         this.coords_old.copy(this.coords);
 //         if (this.isAutoActive && !this.takeoverActive) this.diff.multiplyScalar(this.autoIntensity);
 //       }
 //     }
 //     const Mouse = new MouseClass();
 //     class AutoDriver {
 //       constructor(mouse, manager, opts) {
 //         this.mouse = mouse;
 //         this.manager = manager;
 //         this.enabled = opts.enabled;
 //         this.speed = opts.speed;
 //         this.resumeDelay = opts.resumeDelay || 3000;
 //         this.rampDurationMs = (opts.rampDuration || 0) * 1000;
 //         this.active = false;
 //         this.current = new THREE.Vector2(0, 0);
 //         this.target = new THREE.Vector2();
 //         this.lastTime = performance.now();
 //         this.activationTime = 0;
 //         this.margin = 0.2;
 //         this._tmpDir = new THREE.Vector2();
 //         this.pickNewTarget();
 //       }
 //       pickNewTarget() {
 //         const r = Math.random;
 //         this.target.set((r() * 2 - 1) * (1 - this.margin), (r() * 2 - 1) * (1 - this.margin));
 //       }
 //       forceStop() { this.active = false; this.mouse.isAutoActive = false; }
 //       update() {
 //         if (!this.enabled) return;
 //         const now = performance.now();
 //         const idle = now - this.manager.lastUserInteraction;
 //         if (idle < this.resumeDelay) { if (this.active) this.forceStop(); return; }
 //         if (this.mouse.isHoverInside) { if (this.active) this.forceStop(); return; }
 //         if (!this.active) { this.active = true; this.current.copy(this.mouse.coords); this.lastTime = now; this.activationTime = now; }
 //         this.mouse.isAutoActive = true;
 //         let dtSec = (now - this.lastTime) / 1000; this.lastTime = now; if (dtSec > 0.2) dtSec = 0.016;
 //         const dir = this._tmpDir.subVectors(this.target, this.current); const dist = dir.length();
 //         if (dist < 0.01) { this.pickNewTarget(); return; }
 //         dir.normalize();
 //         let ramp = 1; if (this.rampDurationMs > 0) { const t = Math.min(1, (now - this.activationTime) / this.rampDurationMs); ramp = t * t * (3 - 2 * t); }
 //         const step = this.speed * dtSec * ramp; const move = Math.min(step, dist); this.current.addScaledVector(dir, move); this.mouse.setNormalized(this.current.x, this.current.y);
 //       }
 //     }
 //     /* ---------------------
 //        Shader strings omitted here for brevity — same as original
 //        (use your complex shader strings from previous file)
 //        --------------------- */
 //     // For brevity in this snippet, reuse your shader strings from original code:
 //     const face_vert = `attribute vec3 position; uniform vec2 px; uniform vec2 boundarySpace; varying vec2 uv; precision highp float; void main(){ vec3 pos = position; vec2 scale = 1.0 - boundarySpace * 2.0; pos.xy = pos.xy * scale; uv = vec2(0.5)+(pos.xy)*0.5; gl_Position = vec4(pos, 1.0); }`;
 //     const line_vert = `attribute vec3 position; uniform vec2 px; precision highp float; varying vec2 uv; void main(){ vec3 pos = position; uv = 0.5 + pos.xy * 0.5; vec2 n = sign(pos.xy); pos.xy = abs(pos.xy) - px * 1.0; pos.xy *= n; gl_Position = vec4(pos, 1.0); }`;
 //     const mouse_vert = `precision highp float; attribute vec3 position; attribute vec2 uv; uniform vec2 center; uniform vec2 scale; uniform vec2 px; varying vec2 vUv; void main(){ vec2 pos = position.xy * scale * 2.0 * px + center; vUv = uv; gl_Position = vec4(pos, 0.0, 1.0); }`;
 //     const advection_frag = /* long shader */ `precision highp float; uniform sampler2D velocity; uniform float dt; uniform bool isBFECC; uniform vec2 fboSize; uniform vec2 px; varying vec2 uv; void main(){ vec2 ratio = max(fboSize.x, fboSize.y) / fboSize; if(isBFECC == false){ vec2 vel = texture2D(velocity, uv).xy; vec2 uv2 = uv - vel * dt * ratio; vec2 newVel = texture2D(velocity, uv2).xy; gl_FragColor = vec4(newVel, 0.0, 0.0);} else { vec2 spot_new = uv; vec2 vel_old = texture2D(velocity, uv).xy; vec2 spot_old = spot_new - vel_old * dt * ratio; vec2 vel_new1 = texture2D(velocity, spot_old).xy; vec2 spot_new2 = spot_old + vel_new1 * dt * ratio; vec2 error = spot_new2 - spot_new; vec2 spot_new3 = spot_new - error / 2.0; vec2 vel_2 = texture2D(velocity, spot_new3).xy; vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio; vec2 newVel2 = texture2D(velocity, spot_old2).xy; gl_FragColor = vec4(newVel2, 0.0, 0.0);} }`;
 //     const color_frag = `precision highp float; uniform sampler2D velocity; uniform sampler2D palette; uniform vec4 bgColor; varying vec2 uv; void main(){ vec2 vel = texture2D(velocity, uv).xy; float lenv = clamp(length(vel), 0.0, 1.0); vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb; vec3 outRGB = mix(bgColor.rgb, c, lenv); float outA = mix(bgColor.a, 1.0, lenv); gl_FragColor = vec4(outRGB, outA);} `;
 //     const divergence_frag = `precision highp float; uniform sampler2D velocity; uniform float dt; uniform vec2 px; varying vec2 uv; void main(){ float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x; float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x; float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y; float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y; float divergence = (x1 - x0 + y1 - y0) / 2.0; gl_FragColor = vec4(divergence / dt);} `;
 //     const externalForce_frag = `precision highp float; uniform vec2 force; uniform vec2 center; uniform vec2 scale; uniform vec2 px; varying vec2 vUv; void main(){ vec2 circle = (vUv - 0.5) * 2.0; float d = 1.0 - min(length(circle), 1.0); d *= d; gl_FragColor = vec4(force * d, 0.0, 1.0);} `;
 //     const poisson_frag = `precision highp float; uniform sampler2D pressure; uniform sampler2D divergence; uniform vec2 px; varying vec2 uv; void main(){ float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r; float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r; float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r; float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r; float div = texture2D(divergence, uv).r; float newP = (p0 + p1 + p2 + p3) / 4.0 - div; gl_FragColor = vec4(newP);} `;
 //     const pressure_frag = `precision highp float; uniform sampler2D pressure; uniform sampler2D velocity; uniform vec2 px; uniform float dt; varying vec2 uv; void main(){ float step = 1.0; float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r; float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r; float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r; float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r; vec2 v = texture2D(velocity, uv).xy; vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5; v = v - gradP * dt; gl_FragColor = vec4(v, 0.0, 1.0);} `;
 //     const viscous_frag = `precision highp float; uniform sampler2D velocity; uniform sampler2D velocity_new; uniform float v; uniform vec2 px; uniform float dt; varying vec2 uv; void main(){ vec2 old = texture2D(velocity, uv).xy; vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy; vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy; vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy; vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy; vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3); newv /= 4.0 * (1.0 + v * dt); gl_FragColor = vec4(newv, 0.0, 0.0);} `;
 //     /* ---------------------
 //        ShaderPass / Simulation / Output / WebGLManager classes
 //        (same structure as your original but safely organized)
 //        --------------------- */
 //     // For brevity I keep logic compact but it's the same pipeline you had.
 //     // Create lightweight abstraction ShaderPass, Advection, ExternalForce, Viscous, Divergence, Poisson, Pressure
 //     // Create Simulation -> Output -> WebGLManager
 //     // Implementation mirrors your original code, with same functionality.
 //     // ... (implement classes exactly as in your original file, using above shader strings)
 //     // To keep this snippet readable I won't duplicate every line here, but in your project
 //     // paste your existing class implementations (Advection, Viscous, Poisson, etc.)
 //     // ensuring they reference the shader constants above and the Common, Mouse, and other instances.
 //     // --- BEGIN minimal functional wiring using your existing classes ---
 //     // We'll implement a simple wrapper that creates a Simulation-like loop with reduced cost.
 //     // If you want the full exact original code, paste your previous heavy functions here,
 //     // but keep these two critical perf changes:
 //     // 1) Common.init uses maxPixelRatio (done above)
 //     // 2) initialize inside requestIdleCallback (done below)
 //     // --- END wiring ---
 //     /* --------------
 //        Initialize webgl manager but defer to idle so first paint is fast
 //        -------------- */
 //     let canceled = false;
 //     let idleId = null;
 //     const initWebgl = () => {
 //       if (canceled) return;
 //       // reuse your original WebGLManager creation but ensure it's only called once
 //       // Minimal simplified manager for example (replace with your full manager implementation)
 //       class WebGLManager {
 //         constructor(props) {
 //           this.props = props;
 //           Common.init(props.$wrapper);
 //           Mouse.init(props.$wrapper);
 //           Mouse.autoIntensity = props.autoIntensity;
 //           Mouse.takeoverDuration = props.takeoverDuration;
 //           this.lastUserInteraction = performance.now();
 //           Mouse.onInteract = () => { this.lastUserInteraction = performance.now(); if (this.autoDriver) this.autoDriver.forceStop(); };
 //           this.autoDriver = new AutoDriver(Mouse, this, { enabled: props.autoDemo, speed: props.autoSpeed, resumeDelay: props.autoResumeDelay, rampDuration: props.autoRampDuration });
 //           this.init();
 //           this._loop = this.loop.bind(this);
 //           this._resize = this.resize.bind(this);
 //           window.addEventListener('resize', this._resize);
 //           this._onVisibility = () => {
 //             const hidden = document.hidden;
 //             if (hidden) { this.pause(); } else if (isVisibleRef.current) { this.start(); }
 //           };
 //           document.addEventListener('visibilitychange', this._onVisibility);
 //           this.running = false;
 //         }
 //         init() {
 //           this.props.$wrapper.prepend(Common.renderer.domElement);
 //           // create a tiny simulation that uses paletteTex and bgVec4
 //           this.scene = new THREE.Scene();
 //           this.camera = new THREE.Camera();
 //           this.outputMesh = new THREE.Mesh(
 //             new THREE.PlaneGeometry(2, 2),
 //             new THREE.RawShaderMaterial({
 //               vertexShader: face_vert,
 //               fragmentShader: color_frag,
 //               transparent: true,
 //               depthWrite: false,
 //               uniforms: {
 //                 velocity: { value: null },
 //                 boundarySpace: { value: new THREE.Vector2() },
 //                 palette: { value: paletteTex },
 //                 bgColor: { value: bgVec4 }
 //               }
 //             })
 //           );
 //           this.scene.add(this.outputMesh);
 //         }
 //         resize() { Common.resize(); }
 //         render() {
 //           Common.update();
 //           Common.renderer.setRenderTarget(null);
 //           Common.renderer.render(this.scene, this.camera);
 //         }
 //         loop() {
 //           if (!this.running) return;
 //           // update minimal state:
 //           Mouse.update();
 //           Common.update();
 //           this.render();
 //           rafRef.current = requestAnimationFrame(this._loop);
 //         }
 //         start() { if (this.running) return; this.running = true; this._loop(); }
 //         pause() { this.running = false; if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null; } }
 //         dispose() {
 //           try {
 //             window.removeEventListener('resize', this._resize);
 //             document.removeEventListener('visibilitychange', this._onVisibility);
 //             Mouse.dispose();
 //             if (Common.renderer) {
 //               const canvas = Common.renderer.domElement;
 //               if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas);
 //               Common.renderer.dispose();
 //             }
 //           } catch (e) { /* ignore */ }
 //         }
 //       }
 //       const container = mountRef.current;
 //       container.style.position = container.style.position || 'relative';
 //       container.style.overflow = container.style.overflow || 'hidden';
 //       const webgl = new WebGLManager({ $wrapper: container, autoDemo, autoSpeed, autoIntensity, takeoverDuration, autoResumeDelay, autoRampDuration });
 //       webglRef.current = webgl;
 //       // resize observer
 //       const ro = new ResizeObserver(() => {
 //         if (!webglRef.current) return;
 //         if (resizeRafRef.current) cancelAnimationFrame(resizeRafRef.current);
 //         resizeRafRef.current = requestAnimationFrame(() => {
 //           if (!webglRef.current) return;
 //           webglRef.current.resize();
 //         });
 //       });
 //       ro.observe(container);
 //       resizeObserverRef.current = ro;
 //       // intersection observer to pause when offscreen
 //       const io = new IntersectionObserver(entries => {
 //         const entry = entries[0];
 //         const isVisible = entry.isIntersecting && entry.intersectionRatio > 0;
 //         isVisibleRef.current = isVisible;
 //         if (!webglRef.current) return;
 //         if (isVisible && !document.hidden) { webglRef.current.start(); } else { webglRef.current.pause(); }
 //       }, { threshold: [0, 0.01, 0.1] });
 //       io.observe(container);
 //       intersectionObserverRef.current = io;
 //       // start after init
 //       webgl.start();
 //     };
 //     // prefer requestIdleCallback to avoid blocking first paint
 //     if ('requestIdleCallback' in window) {
 //       idleId = window.requestIdleCallback(() => initWebgl(), { timeout: 300 });
 //     } else {
 //       idleId = setTimeout(initWebgl, 200);
 //     }
 //     // cleanup
 //     return () => {
 //       canceled = true;
 //       if (idleId) {
 //         if ('cancelIdleCallback' in window) window.cancelIdleCallback?.(idleId);
 //         else clearTimeout(idleId);
 //       }
 //       if (rafRef.current) cancelAnimationFrame(rafRef.current);
 //       if (resizeObserverRef.current) {
 //         try { resizeObserverRef.current.disconnect(); } catch (e) {}
 //       }
 //       if (intersectionObserverRef.current) {
 //         try { intersectionObserverRef.current.disconnect(); } catch (e) {}
 //       }
 //       if (webglRef.current) {
 //         try { webglRef.current.dispose(); } catch (e) {}
 //       }
 //       webglRef.current = null;
 //     };
 //     // NOTE: this effect runs once on mount; don't re-create on prop changes
 //     // eslint-disable-next-line react-hooks/exhaustive-deps
 //   }, []); // run once
 //   // apply options when props change (no heavy re-initialization)
 //   useEffect(() => {
 //     const webgl = webglRef.current;
 //     if (!webgl) return;
 //     // if your real implementation exposes simulation options, update them here:
 //     try {
 //       if (webgl.autoDriver) {
 //         webgl.autoDriver.enabled = autoDemo;
 //         webgl.autoDriver.speed = autoSpeed;
 //         webgl.autoDriver.resumeDelay = autoResumeDelay;
 //         webgl.autoDriver.rampDurationMs = autoRampDuration * 1000;
 //         if (webgl.autoDriver.mouse) {
 //           webgl.autoDriver.mouse.autoIntensity = autoIntensity;
 //           webgl.autoDriver.mouse.takeoverDuration = takeoverDuration;
 //         }
 //       }
 //       // if you have sim.options, assign them:
 //       if (webgl.output && webgl.output.simulation && webgl.output.simulation.options) {
 //         Object.assign(webgl.output.simulation.options, {
 //           mouse_force: mouseForce,
 //           cursor_size: cursorSize,
 //           isViscous,
 //           viscous,
 //           iterations_viscous: iterationsViscous,
 //           iterations_poisson: iterationsPoisson,
 //           dt,
 //           BFECC,
 //           resolution,
 //           isBounce
 //         });
 //         // if resolution changed, ask simulation to resize
 //         if (webgl.output.simulation.resize) webgl.output.simulation.resize();
 //       }
 //     } catch (e) {
 //       // ignore, best-effort
 //     }
 //   }, [mouseForce, cursorSize, isViscous, viscous, iterationsViscous, iterationsPoisson, dt, BFECC, resolution, isBounce, autoDemo, autoSpeed, autoIntensity, takeoverDuration, autoResumeDelay, autoRampDuration]);
 //   return <div ref={mountRef} className={`${styles.liquidEtherContainer || ''} ${className || ''}`} style={style} />;
 // }
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/frontend/pages/dashboard.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

// // pages/dashboard.js
// import dynamic from 'next/dynamic';
// import Layout from '../components/Layout';
// import LiquidEther from '../components/LiquidEther';
// import { useAuth } from '../context/AuthContext';
// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// import api from '../lib/api';
// import { getToken } from '../lib/auth';
// export default function Dashboard() {
//   const { isLoggedIn, loading: authLoading } = useAuth();
//   const router = useRouter();
//   const [userData, setUserData] = useState(null);
//   const [chatStats, setChatStats] = useState({ total: 0, today: 0 });
//   const [recentChats, setRecentChats] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     if (!authLoading && !isLoggedIn) router.push('/login');
//   }, [authLoading, isLoggedIn, router]);
//   useEffect(() => {
//     if (isLoggedIn) {
//       fetchDashboardData();
//     }
//   }, [isLoggedIn]);
//   const fetchDashboardData = async () => {
//     try {
//       const token = getToken();
//       const headers = { Authorization: `Bearer ${token}` };
//       // Fetch user stats (includes user data and chat stats)
//       const statsRes = await api.get('/user/stats', { headers });
//       setUserData(statsRes.data.user);
//       setChatStats({
//         total: statsRes.data.totalChats,
//         today: statsRes.data.todayChats
//       }); 
//       // Fetch recent chats separately
//       const chatsRes = await api.get('/chats', { headers });
//       setRecentChats(chatsRes.data.slice(0, 5));
//     } catch (error) {
//       console.error('Failed to fetch dashboard data:', error);
//       // Fallback data if API fails
//       setUserData({ username: 'Guest', email: 'guest@example.com', createdAt: new Date() });
//       setChatStats({ total: 0, today: 0 });
//     } finally {
//       setLoading(false);
//     }
//   };
//   if (authLoading || !isLoggedIn) {
//     return (
//       <Layout>
//         <div className="flex-1 grid place-items-center">
//           <p className="text-gray-400">Loading...</p>
//         </div>
//       </Layout>
//     );
//   }
//   if (loading) {
//   return (
//     <Layout>
//         <div className="flex-1 grid place-items-center">
//           <div className="text-center">
//             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500 mx-auto mb-2"></div>
//             <p className="text-gray-400">Loading dashboard...</p>
//           </div>
//         </div>
//       </Layout>
//     );
//   }
//   const demoLinks = [
//     { title: 'Start a new chat', href: '/chat' },
//     { title: 'See information', href: '/info' },
//     { title: 'DLIMS status', href: '/chat' },
//     { title: 'NADRA services', href: '/chat' },
//   ];
//   return (
//     <Layout>
//       <div className="relative">
//         {/* Liquid Ether background */}
//         <div className="absolute inset-0 -z-0">
//           <LiquidEther
//             colors={[ '#0EA5A3', '#10B981', '#065F46' ]}
//             mouseForce={20}
//             cursorSize={100}
//             isViscous={false}
//             viscous={30}
//             iterationsViscous={32}
//             iterationsPoisson={32}
//             resolution={0.6}
//             isBounce={false}
//             autoDemo={true}
//             autoSpeed={0.5}
//             autoIntensity={2.2}
//             takeoverDuration={0.25}
//             autoResumeDelay={3000}
//             autoRampDuration={0.6}
//             style={{ width:'100%', height:'100%' }}
//           />
//         </div>
//         <div className="relative z-10 mx-auto max-w-6xl px-4 py-8 space-y-8">
//         {/* Welcome Section */}
//         <section>
//           <h1 className="text-2xl md:text-3xl font-bold text-gray-100">
//             Welcome back, {userData?.username || 'Guest'}!
//           </h1>
//           <p className="mt-1 text-gray-400">Here's your personalized dashboard with insights and quick access.</p>
//         </section>
//         {/* Stats Cards */}
//         <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//           <div className="rounded-2xl border border-emerald-900/40 bg-gray-900/60 p-5">
//             <h3 className="text-lg font-semibold text-gray-100">Total Chats</h3>
//             <p className="mt-2 text-2xl font-bold text-emerald-400">{chatStats.total}</p>
//           </div>
//           <div className="rounded-2xl border border-emerald-900/40 bg-gray-900/60 p-5">
//             <h3 className="text-lg font-semibold text-gray-100">Today's Chats</h3>
//             <p className="mt-2 text-2xl font-bold text-emerald-400">{chatStats.today}</p>
//           </div>
//           <div className="rounded-2xl border border-emerald-900/40 bg-gray-900/60 p-5">
//             <h3 className="text-lg font-semibold text-gray-100">Account Status</h3>
//             <p className="mt-2 text-sm text-emerald-400">✓ Active</p>
//           </div>
//           <div className="rounded-2xl border border-emerald-900/40 bg-gray-900/60 p-5">
//             <h3 className="text-lg font-semibold text-gray-100">Member Since</h3>
//             <p className="mt-2 text-sm text-gray-400">
//               {userData?.createdAt ? new Date(userData.createdAt).toLocaleDateString() : '2025'}
//             </p>
//           </div>
//         </section>
//         {/* Profile & Usage Section */}
//         <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           <div className="rounded-2xl border border-emerald-900/40 bg-gray-900/60 p-5">
//             <h3 className="text-lg font-semibold text-gray-100">Your Profile</h3>
//             <dl className="mt-3 space-y-1 text-sm text-gray-400">
//               <div className="flex justify-between"><dt>Username</dt><dd className="text-gray-200">{userData?.username || 'Guest'}</dd></div>
//               <div className="flex justify-between"><dt>Email</dt><dd className="text-gray-200">{userData?.email || 'guest@example.com'}</dd></div>
//               <div className="flex justify-between"><dt>Status</dt><dd className="text-emerald-400">Online</dd></div>
//             </dl>
//           </div>
//           <div className="rounded-2xl border border-emerald-900/40 bg-gray-900/60 p-5">
//             <h3 className="text-lg font-semibold text-gray-100">Usage Insights</h3>
//             <p className="mt-2 text-sm text-gray-400">
//               {chatStats.today > 0 
//                 ? `You've been active today with ${chatStats.today} chat${chatStats.today > 1 ? 's' : ''}.`
//                 : 'Start your first chat today to get personalized insights.'
//               }
//             </p>
//             {chatStats.total > 0 && (
//               <p className="mt-2 text-xs text-gray-500">
//                 Average: {Math.round(chatStats.total / Math.max(1, Math.floor((Date.now() - new Date(userData?.createdAt || Date.now()).getTime()) / (1000 * 60 * 60 * 24))))} chats/day
//               </p>
//             )}
//           </div>
//           <div className="rounded-2xl border border-emerald-900/40 bg-gray-900/60 p-5">
//             <h3 className="text-lg font-semibold text-gray-100">Tips & Tricks</h3>
//             <ul className="mt-2 list-disc pl-5 text-sm text-gray-400">
//               <li>Ask in Urdu or English</li>
//               <li>Prefix with department: "NADRA: family registration"</li>
//               <li>Use specific keywords for better results</li>
//             </ul>
//           </div>
//         </section>
//         {/* Recent Activity */}
//         {recentChats.length > 0 && (
//           <section>
//             <h2 className="text-xl font-semibold text-gray-100 mb-4">Recent Activity</h2>
//             <div className="space-y-3">
//               {recentChats.map((chat, index) => (
//                 <div key={chat._id || index} className="rounded-xl border border-emerald-900/40 bg-gray-900/60 p-4">
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h4 className="text-sm font-medium text-gray-100">{chat.title}</h4>
//                       <p className="text-xs text-gray-500 mt-1">{chat.lastMessage?.slice(0, 60) || 'No messages yet'}...</p>
//                     </div>
//                     <span className="text-xs text-gray-600">
//                       {new Date(chat.updatedAt).toLocaleDateString()}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}
//         {/* Government Services Overview */}
//         <section>
//           <h2 className="text-xl font-semibold text-gray-100 mb-4">Government Services</h2>
//           <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//             {['DLIMS', 'NADRA', 'DGIP', 'Zameen', 'ECP', 'FBR', 'SECP', 'PSP'].map((service) => (
//               <div key={service} className="rounded-xl border border-emerald-900/40 bg-gray-900/60 p-4 text-center">
//                 <h4 className="text-sm font-medium text-gray-100">{service}</h4>
//                 <p className="text-xs text-gray-500 mt-1">Government Service</p>
//                 <a href="/chat" className="text-xs text-emerald-400 hover:text-emerald-300 mt-2 inline-block">
//                   Ask about {service} →
//                 </a>
//               </div>
//             ))}
//           </div>
//         </section>
//         {/* Quick Actions */}
//         <section>
//           <h2 className="text-xl font-semibold text-gray-100 mb-4">Quick Actions</h2>
//           <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
//             {demoLinks.map(link => (
//               <a key={link.title} href={link.href} className="rounded-xl border border-emerald-900/40 bg-gray-900/60 p-4 text-sm text-gray-300 hover:border-emerald-800 hover:text-white transition-colors">
//                 {link.title}
//               </a>
//             ))}
//           </div>
//         </section>
//         {/* News & Updates */}
//         <section>
//           <h2 className="text-xl font-semibold text-gray-100 mb-4">Latest Updates</h2>
//           <div className="space-y-3">
//             <div className="rounded-xl border border-emerald-900/40 bg-gray-900/60 p-4">
//               <h4 className="text-sm font-medium text-gray-100">New DLIMS Features</h4>
//               <p className="text-xs text-gray-400 mt-1">Updated information about DLIMS services and requirements.</p>
//               <span className="text-xs text-gray-600">2 days ago</span>
//             </div>
//             <div className="rounded-xl border border-emerald-900/40 bg-gray-900/60 p-4">
//               <h4 className="text-sm font-medium text-gray-100">NADRA Process Updates</h4>
//               <p className="text-xs text-gray-400 mt-1">Streamlined procedures for CNIC applications.</p>
//               <span className="text-xs text-gray-600">1 week ago</span>
//             </div>
//             <div className="rounded-xl border border-emerald-900/40 bg-gray-900/60 p-4">
//               <h4 className="text-sm font-medium text-gray-100">System Maintenance</h4>
//               <p className="text-xs text-gray-400 mt-1">Scheduled maintenance completed successfully.</p>
//               <span className="text-xs text-gray-600">2 weeks ago</span>
//             </div>
//         </div>
//         </section>
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
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$LiquidEther$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/LiquidEther.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$context$2f$AuthContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/context/AuthContext.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/api.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/auth.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$LiquidEther$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$LiquidEther$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
function Dashboard() {
    const { isLoggedIn, loading: authLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$context$2f$AuthContext$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [chatStats, setChatStats] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        total: 0,
        today: 0
    });
    const [recentChats, setRecentChats] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!authLoading && !isLoggedIn) router.push('/login');
    }, [
        authLoading,
        isLoggedIn,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (isLoggedIn) {
            fetchDashboardData();
        }
    }, [
        isLoggedIn
    ]);
    const fetchDashboardData = async ()=>{
        try {
            const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getToken"])();
            const headers = {
                Authorization: `Bearer ${token}`
            };
            // Fetch user stats (includes user data and chat stats)
            const statsRes = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].get('/user/stats', {
                headers
            });
            setUserData(statsRes.data.user);
            setChatStats({
                total: statsRes.data.totalChats,
                today: statsRes.data.todayChats
            });
            // Fetch recent chats separately
            const chatsRes = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].get('/chats', {
                headers
            });
            setRecentChats(chatsRes.data.slice(0, 5));
        } catch (error) {
            console.error('Failed to fetch dashboard data:', error);
            // Fallback data if API fails
            setUserData({
                username: 'Guest',
                email: 'guest@example.com',
                createdAt: new Date()
            });
            setChatStats({
                total: 0,
                today: 0
            });
        } finally{
            setLoading(false);
        }
    };
    if (authLoading || !isLoggedIn) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$Layout$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex-1 grid place-items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    className: "text-gray-400",
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/frontend/pages/dashboard.js",
                    lineNumber: 324,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/pages/dashboard.js",
                lineNumber: 323,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/pages/dashboard.js",
            lineNumber: 322,
            columnNumber: 7
        }, this);
    }
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$Layout$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex-1 grid place-items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500 mx-auto mb-2"
                        }, void 0, false, {
                            fileName: "[project]/frontend/pages/dashboard.js",
                            lineNumber: 335,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "text-gray-400",
                            children: "Loading dashboard..."
                        }, void 0, false, {
                            fileName: "[project]/frontend/pages/dashboard.js",
                            lineNumber: 336,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/pages/dashboard.js",
                    lineNumber: 334,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/pages/dashboard.js",
                lineNumber: 333,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/pages/dashboard.js",
            lineNumber: 332,
            columnNumber: 7
        }, this);
    }
    const demoLinks = [
        {
            title: 'Start a new chat',
            href: '/chat'
        },
        {
            title: 'See information',
            href: '/info'
        },
        {
            title: 'DLIMS status',
            href: '/chat'
        },
        {
            title: 'NADRA services',
            href: '/chat'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$Layout$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 -z-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$LiquidEther$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        colors: [
                            '#0EA5A3',
                            '#10B981',
                            '#065F46'
                        ],
                        mouseForce: 20,
                        cursorSize: 100,
                        isViscous: false,
                        viscous: 30,
                        iterationsViscous: 32,
                        iterationsPoisson: 32,
                        resolution: 0.6,
                        isBounce: false,
                        autoDemo: true,
                        autoSpeed: 0.5,
                        autoIntensity: 2.2,
                        takeoverDuration: 0.25,
                        autoResumeDelay: 3000,
                        autoRampDuration: 0.6,
                        style: {
                            width: '100%',
                            height: '100%'
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/pages/dashboard.js",
                        lineNumber: 355,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/pages/dashboard.js",
                    lineNumber: 354,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "relative z-10 mx-auto max-w-6xl px-4 py-8 space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl md:text-3xl font-bold text-gray-100",
                                    children: [
                                        "Welcome back, ",
                                        userData?.username || 'Guest',
                                        "!"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/pages/dashboard.js",
                                    lineNumber: 378,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-gray-400",
                                    children: "Here's your personalized dashboard with insights and quick access."
                                }, void 0, false, {
                                    fileName: "[project]/frontend/pages/dashboard.js",
                                    lineNumber: 381,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/pages/dashboard.js",
                            lineNumber: 377,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                            className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-emerald-900/40 bg-gray-900/60 p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-gray-100",
                                            children: "Total Chats"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/pages/dashboard.js",
                                            lineNumber: 389,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-2xl font-bold text-emerald-400",
                                            children: chatStats.total
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/pages/dashboard.js",
                                            lineNumber: 390,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/pages/dashboard.js",
                                    lineNumber: 388,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-emerald-900/40 bg-gray-900/60 p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-gray-100",
                                            children: "Today's Chats"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/pages/dashboard.js",
                                            lineNumber: 395,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-2xl font-bold text-emerald-400",
                                            children: chatStats.today
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/pages/dashboard.js",
                                            lineNumber: 396,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/pages/dashboard.js",
                                    lineNumber: 394,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-emerald-900/40 bg-gray-900/60 p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-gray-100",
                                            children: "Account Status"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/pages/dashboard.js",
                                            lineNumber: 401,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm text-emerald-400",
                                            children: "✓ Active"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/pages/dashboard.js",
                                            lineNumber: 402,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/pages/dashboard.js",
                                    lineNumber: 400,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-emerald-900/40 bg-gray-900/60 p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-gray-100",
                                            children: "Member Since"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/pages/dashboard.js",
                                            lineNumber: 405,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm text-gray-400",
                                            children: userData?.createdAt ? new Date(userData.createdAt).toLocaleDateString() : '2025'
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/pages/dashboard.js",
                                            lineNumber: 406,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/pages/dashboard.js",
                                    lineNumber: 404,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/pages/dashboard.js",
                            lineNumber: 387,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                            className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-emerald-900/40 bg-gray-900/60 p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-gray-100",
                                            children: "Your Profile"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/pages/dashboard.js",
                                            lineNumber: 417,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("dl", {
                                            className: "mt-3 space-y-1 text-sm text-gray-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("dt", {
                                                            children: "Username"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/pages/dashboard.js",
                                                            lineNumber: 420,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("dd", {
                                                            className: "text-gray-200",
                                                            children: userData?.username || 'Guest'
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/pages/dashboard.js",
                                                            lineNumber: 421,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/pages/dashboard.js",
                                                    lineNumber: 419,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("dt", {
                                                            children: "Email"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/pages/dashboard.js",
                                                            lineNumber: 426,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("dd", {
                                                            className: "text-gray-200",
                                                            children: userData?.email || 'guest@example.com'
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/pages/dashboard.js",
                                                            lineNumber: 427,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/pages/dashboard.js",
                                                    lineNumber: 425,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("dt", {
                                                            children: "Status"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/pages/dashboard.js",
                                                            lineNumber: 432,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("dd", {
                                                            className: "text-emerald-400",
                                                            children: "Online"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/pages/dashboard.js",
                                                            lineNumber: 433,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/pages/dashboard.js",
                                                    lineNumber: 431,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/pages/dashboard.js",
                                            lineNumber: 418,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/pages/dashboard.js",
                                    lineNumber: 416,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-emerald-900/40 bg-gray-900/60 p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-gray-100",
                                            children: "Usage Insights"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/pages/dashboard.js",
                                            lineNumber: 439,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm text-gray-400",
                                            children: chatStats.today > 0 ? `You've been active today with ${chatStats.today} chat${chatStats.today > 1 ? 's' : ''}.` : 'Start your first chat today to get personalized insights.'
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/pages/dashboard.js",
                                            lineNumber: 440,
                                            columnNumber: 15
                                        }, this),
                                        chatStats.total > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-xs text-gray-500",
                                            children: [
                                                "Average:",
                                                ' ',
                                                Math.round(chatStats.total / Math.max(1, Math.floor((Date.now() - new Date(userData?.createdAt || Date.now()).getTime()) / (1000 * 60 * 60 * 24)))),
                                                ' ',
                                                "chats/day"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/pages/dashboard.js",
                                            lineNumber: 449,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/pages/dashboard.js",
                                    lineNumber: 438,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-emerald-900/40 bg-gray-900/60 p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-gray-100",
                                            children: "Tips & Tricks"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/pages/dashboard.js",
                                            lineNumber: 470,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                            className: "mt-2 list-disc pl-5 text-sm text-gray-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "Ask in Urdu or English"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/pages/dashboard.js",
                                                    lineNumber: 472,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: 'Prefix with department: "NADRA: family registration"'
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/pages/dashboard.js",
                                                    lineNumber: 473,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: "Use specific keywords for better results"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/pages/dashboard.js",
                                                    lineNumber: 474,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/pages/dashboard.js",
                                            lineNumber: 471,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/pages/dashboard.js",
                                    lineNumber: 469,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/pages/dashboard.js",
                            lineNumber: 415,
                            columnNumber: 11
                        }, this),
                        recentChats.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold text-gray-100 mb-4",
                                    children: "Recent Activity"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/pages/dashboard.js",
                                    lineNumber: 482,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: recentChats.map((chat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl border border-emerald-900/40 bg-gray-900/60 p-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-start",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                                className: "text-sm font-medium text-gray-100",
                                                                children: chat.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/pages/dashboard.js",
                                                                lineNumber: 493,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-500 mt-1",
                                                                children: [
                                                                    chat.lastMessage?.slice(0, 60) || 'No messages yet',
                                                                    "..."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend/pages/dashboard.js",
                                                                lineNumber: 496,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/pages/dashboard.js",
                                                        lineNumber: 492,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-gray-600",
                                                        children: new Date(chat.updatedAt).toLocaleDateString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/pages/dashboard.js",
                                                        lineNumber: 500,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/pages/dashboard.js",
                                                lineNumber: 491,
                                                columnNumber: 21
                                            }, this)
                                        }, chat._id || index, false, {
                                            fileName: "[project]/frontend/pages/dashboard.js",
                                            lineNumber: 487,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/frontend/pages/dashboard.js",
                                    lineNumber: 485,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/pages/dashboard.js",
                            lineNumber: 481,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold text-gray-100 mb-4",
                                    children: "Government Services"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/pages/dashboard.js",
                                    lineNumber: 512,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
                                    children: [
                                        'DLIMS',
                                        'NADRA',
                                        'DGIP',
                                        'Zameen',
                                        'ECP',
                                        'FBR',
                                        'SECP',
                                        'PSP'
                                    ].map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl border border-emerald-900/40 bg-gray-900/60 p-4 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-100",
                                                    children: service
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/pages/dashboard.js",
                                                    lineNumber: 530,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: "Government Service"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/pages/dashboard.js",
                                                    lineNumber: 531,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                    href: "/chat",
                                                    className: "text-xs text-emerald-400 hover:text-emerald-300 mt-2 inline-block",
                                                    children: [
                                                        "Ask about ",
                                                        service,
                                                        " →"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/pages/dashboard.js",
                                                    lineNumber: 532,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, service, true, {
                                            fileName: "[project]/frontend/pages/dashboard.js",
                                            lineNumber: 526,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/frontend/pages/dashboard.js",
                                    lineNumber: 515,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/pages/dashboard.js",
                            lineNumber: 511,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold text-gray-100 mb-4",
                                    children: "Quick Actions"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/pages/dashboard.js",
                                    lineNumber: 545,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "grid gap-3 sm:grid-cols-2 md:grid-cols-3",
                                    children: demoLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                            href: link.href,
                                            className: "rounded-xl border border-emerald-900/40 bg-gray-900/60 p-4 text-sm text-gray-300 hover:border-emerald-800 hover:text-white transition-colors",
                                            children: link.title
                                        }, link.title, false, {
                                            fileName: "[project]/frontend/pages/dashboard.js",
                                            lineNumber: 550,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/frontend/pages/dashboard.js",
                                    lineNumber: 548,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/pages/dashboard.js",
                            lineNumber: 544,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold text-gray-100 mb-4",
                                    children: "Latest Updates"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/pages/dashboard.js",
                                    lineNumber: 563,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl border border-emerald-900/40 bg-gray-900/60 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-100",
                                                    children: "New DLIMS Features"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/pages/dashboard.js",
                                                    lineNumber: 568,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-400 mt-1",
                                                    children: "Updated information about DLIMS services and requirements."
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/pages/dashboard.js",
                                                    lineNumber: 571,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-600",
                                                    children: "2 days ago"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/pages/dashboard.js",
                                                    lineNumber: 574,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/pages/dashboard.js",
                                            lineNumber: 567,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl border border-emerald-900/40 bg-gray-900/60 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-100",
                                                    children: "NADRA Process Updates"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/pages/dashboard.js",
                                                    lineNumber: 578,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-400 mt-1",
                                                    children: "Streamlined procedures for CNIC applications."
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/pages/dashboard.js",
                                                    lineNumber: 581,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-600",
                                                    children: "1 week ago"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/pages/dashboard.js",
                                                    lineNumber: 584,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/pages/dashboard.js",
                                            lineNumber: 577,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl border border-emerald-900/40 bg-gray-900/60 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-100",
                                                    children: "System Maintenance"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/pages/dashboard.js",
                                                    lineNumber: 588,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-400 mt-1",
                                                    children: "Scheduled maintenance completed successfully."
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/pages/dashboard.js",
                                                    lineNumber: 591,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-600",
                                                    children: "2 weeks ago"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/pages/dashboard.js",
                                                    lineNumber: 594,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/pages/dashboard.js",
                                            lineNumber: 587,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/pages/dashboard.js",
                                    lineNumber: 566,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/pages/dashboard.js",
                            lineNumber: 562,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/pages/dashboard.js",
                    lineNumber: 375,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/pages/dashboard.js",
            lineNumber: 352,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/pages/dashboard.js",
        lineNumber: 351,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__f6753a9d._.js.map