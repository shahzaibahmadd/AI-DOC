(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/components/LiquidEther.js [client] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "static/chunks/9e883_three_build_three_module_17eb9480.js",
  "static/chunks/frontend_components_715c8838._.js",
  {
    "path": "static/chunks/frontend_components_LiquidEther_module_5b037384.css",
    "included": [
      "[project]/frontend/components/LiquidEther.module.css [client] (css)"
    ]
  },
  "static/chunks/frontend_components_LiquidEther_eca5ce01.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/frontend/components/LiquidEther.js [client] (ecmascript, next/dynamic entry)");
    });
});
}),
]);