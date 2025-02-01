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

  const fetchUser = async () => {
    try {
      const res = await fetch("http://localhost:5000/auth/me", {
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
    window.location.href = "http://localhost:5000/auth/github"; // Redirect to GitHub login
  };

  const logout = async () => {
    await fetch("http://localhost:5000/auth/logout", { credentials: "include" });
    setUser(null);
  };

  return { user, loading, loginWithGitHub, logout };
}
