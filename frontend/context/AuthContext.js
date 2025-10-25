// context/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext({
  token: null,
  isLoggedIn: false, // Start as false initially
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  // Add a loading state to prevent premature checks
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // On app load, check if token exists in localStorage
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setToken(storedToken);
    }
    setLoading(false); // Finished checking
  }, []); // Empty dependency array ensures this runs only once on mount

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem('authToken', newToken);
    router.push('/dashboard'); // Redirect to dashboard after login
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('authToken');
    router.push('/'); // Redirect to home after logout
  };

  // Derive isLoggedIn directly from the token state
  const isLoggedIn = !!token;

  // Provide the loading state as well, if needed by components
  const value = { token, isLoggedIn, login, logout, loading };

  // Don't render children until authentication status is determined
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook to easily use the auth context
export const useAuth = () => useContext(AuthContext);