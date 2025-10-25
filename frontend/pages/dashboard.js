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
import Layout from '../components/Layout';
import ChatSidebar from '../components/ChatSidebar';
import ChatWindow from '../components/ChatWindow';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  // Destructure loading state from useAuth
  const { isLoggedIn, token, loading: authLoading } = useAuth();
  const router = useRouter();
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [refreshSidebarKey, setRefreshSidebarKey] = useState(0);

  useEffect(() => {
    // Wait until the auth status is determined
    if (authLoading) {
      return; // Do nothing while loading
    }

    // If not loading and not logged in, redirect
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [isLoggedIn, authLoading, router]); // Add authLoading to dependencies

  const handleSelectChat = (chatId) => {
    setSelectedChatId(chatId);
  };

  const handleNewChat = () => {
    setSelectedChatId(null);
  };

  const handleChatCreated = (newChatId) => {
    if (newChatId) { // Only select if ID is valid
        setSelectedChatId(newChatId);
    }
    setRefreshSidebarKey(prevKey => prevKey + 1);
  };

  // Show a loading state while checking auth OR if not logged in yet (before redirect happens)
  if (authLoading || !isLoggedIn) {
    return (
      <Layout>
        <div className="flex-1 flex items-center justify-center">
          <p>Loading...</p> {/* Or a spinner component */}
        </div>
      </Layout>
    );
  }

  // Render the dashboard only if loading is complete and user is logged in
  return (
    <Layout>
      <div className="flex-1 flex h-full overflow-hidden">
        <ChatSidebar
          key={refreshSidebarKey}
          onSelectChat={handleSelectChat}
          onNewChat={handleNewChat}
          selectedChatId={selectedChatId}
        />
        <div className="flex-1 h-full">
          <ChatWindow
            chatId={selectedChatId}
            onChatCreated={handleChatCreated}
          />
        </div>
      </div>
    </Layout>
  );
}