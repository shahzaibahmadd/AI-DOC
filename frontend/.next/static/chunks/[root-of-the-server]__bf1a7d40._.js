(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/// <reference path="../../../shared/runtime-types.d.ts" />
/// <reference path="../../runtime/base/dev-globals.d.ts" />
/// <reference path="../../runtime/base/dev-protocol.d.ts" />
/// <reference path="../../runtime/base/dev-extensions.ts" />
__turbopack_context__.s([
    "connect",
    ()=>connect,
    "setHooks",
    ()=>setHooks,
    "subscribeToUpdate",
    ()=>subscribeToUpdate
]);
function connect(param) {
    let { addMessageListener, sendMessage, onUpdateError = console.error } = param;
    addMessageListener((msg)=>{
        switch(msg.type){
            case 'turbopack-connected':
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.');
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error('A separate HMR handler was already registered');
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: (param)=>{
            let [chunkPath, callback] = param;
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: 'turbopack-subscribe',
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: 'turbopack-unsubscribe',
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: 'ChunkListUpdate',
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted' || updateA.type === 'deleted' && updateB.type === 'added') {
        return undefined;
    }
    if (updateA.type === 'partial') {
        invariant(updateA.instruction, 'Partial updates are unsupported');
    }
    if (updateB.type === 'partial') {
        invariant(updateB.instruction, 'Partial updates are unsupported');
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: 'EcmascriptMergedUpdate',
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted') {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === 'deleted' && updateB.type === 'added') {
        const added = [];
        const deleted = [];
        var _updateA_modules;
        const deletedModules = new Set((_updateA_modules = updateA.modules) !== null && _updateA_modules !== void 0 ? _updateA_modules : []);
        var _updateB_modules;
        const addedModules = new Set((_updateB_modules = updateB.modules) !== null && _updateB_modules !== void 0 ? _updateB_modules : []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: 'partial',
            added,
            deleted
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'partial') {
        var _updateA_added, _updateB_added;
        const added = new Set([
            ...(_updateA_added = updateA.added) !== null && _updateA_added !== void 0 ? _updateA_added : [],
            ...(_updateB_added = updateB.added) !== null && _updateB_added !== void 0 ? _updateB_added : []
        ]);
        var _updateA_deleted, _updateB_deleted;
        const deleted = new Set([
            ...(_updateA_deleted = updateA.deleted) !== null && _updateA_deleted !== void 0 ? _updateA_deleted : [],
            ...(_updateB_deleted = updateB.deleted) !== null && _updateB_deleted !== void 0 ? _updateB_deleted : []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: 'partial',
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === 'added' && updateB.type === 'partial') {
        var _updateA_modules1, _updateB_added1;
        const modules = new Set([
            ...(_updateA_modules1 = updateA.modules) !== null && _updateA_modules1 !== void 0 ? _updateA_modules1 : [],
            ...(_updateB_added1 = updateB.added) !== null && _updateB_added1 !== void 0 ? _updateB_added1 : []
        ]);
        var _updateB_deleted1;
        for (const moduleId of (_updateB_deleted1 = updateB.deleted) !== null && _updateB_deleted1 !== void 0 ? _updateB_deleted1 : []){
            modules.delete(moduleId);
        }
        return {
            type: 'added',
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'deleted') {
        var _updateB_modules1;
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set((_updateB_modules1 = updateB.modules) !== null && _updateB_modules1 !== void 0 ? _updateB_modules1 : []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: 'deleted',
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error("Invariant: ".concat(message));
}
const CRITICAL = [
    'bug',
    'error',
    'fatal'
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    'bug',
    'fatal',
    'error',
    'warning',
    'info',
    'log'
];
const CATEGORY_ORDER = [
    'parse',
    'resolve',
    'code generation',
    'rendering',
    'typescript',
    'other'
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case 'issues':
            break;
        case 'partial':
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === 'notFound') {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}),
"[project]/frontend/pages/dashboard.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/frontend/pages/dashboard.js [client] (ecmascript)\" } [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const PAGE_PATH = "/dashboard";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/frontend/pages/dashboard.js [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if (module.hot) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}),
"[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/frontend/pages/dashboard\" }", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/frontend/pages/dashboard.js [client] (ecmascript)\" } [client] (ecmascript)");
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__bf1a7d40._.js.map