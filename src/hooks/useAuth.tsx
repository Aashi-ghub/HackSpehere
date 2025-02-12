import { useState, useEffect } from "react";

// Define the expected User structure
interface User {
  githubId: string;
  username: string;
  avatar: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Get API base URL dynamically
  const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const fetchUser = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/auth/user`, {
        method: "GET",
        credentials: "include", // Important for session-based auth
      });

      if (res.ok) {
        const userData: User = await res.json();
        setUser(userData);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const loginWithGitHub = () => {
    window.location.href = `${API_BASE_URL}/auth/github`; // Redirect to GitHub login
  };

  const logout = async () => {
    await fetch(`${API_BASE_URL}/auth/logout`, { credentials: "include" });
    setUser(null);
  };
  
  return { user, loading, loginWithGitHub, logout };
}
