import { useState, useEffect } from "react";

// Define the expected User structure
interface User {
  githubId?: string;
  username: string;
  avatar?: string;
  email?: string;
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

  const loginWithEmail = async (email: string, password: string) => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        const userData: User = await res.json();
        setUser(userData);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Error logging in with email:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const registerWithEmail = async (username: string, email: string, password: string) => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ username, email, password }),
      });

      if (res.ok) {
        const userData: User = await res.json();
        setUser(userData);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Error registering:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await fetch(`${API_BASE_URL}/auth/logout`, { credentials: "include" });
    setUser(null);
  };

  return {
    user,
    loading,
    loginWithGitHub,
    loginWithEmail,
    registerWithEmail,
    logout,
  };
}

