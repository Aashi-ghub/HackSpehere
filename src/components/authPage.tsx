import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import GitHubIcon from "./githubicon";

interface AuthPageProps {
  onAuthSuccess?: () => void;
}

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const AuthPage = ({ onAuthSuccess }: AuthPageProps = {}) => {
  const [user, setUser] = useState<{ username: string; avatar: string } | null>(null);
  const { toast } = useToast();

  // Fetch logged-in user data
  useEffect(() => {
    if (user) return; // Avoid unnecessary calls

    const fetchUser = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/auth/user`, {
          credentials: "include",
        });
        const data = await response.json();
        console.log("Fetched User:", data);

        if (response.ok) {
          setUser(data);
          onAuthSuccess?.();
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        toast({ title: "Error", description: "Failed to fetch user", variant: "destructive" });
      }
    };

    fetchUser();
  }, [onAuthSuccess, user, toast]);

  const handleGitHubAuth = () => {
    window.location.href = `${API_BASE_URL}/auth/github`;
  };

  const handleLogout = async () => {
    try {
      await fetch(`${API_BASE_URL}/auth/logout`, { credentials: "include" });
      setUser(null);
      toast({ title: "Logged out", description: "You have been logged out successfully" });
    } catch (error) {
      console.error("Logout error:", error);
      toast({ title: "Error", description: "Failed to log out", variant: "destructive" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-github to-black p-4">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        {user ? (
          <div className="text-center text-white">
            <h1 className="text-3xl font-bold">Welcome, {user.username}!</h1>
            <img src={user.avatar} alt="GitHub Avatar" className="w-16 h-16 rounded-full mx-auto mt-4" />
            <p className="mt-2 text-gray-300">You're logged in with GitHub</p>
            <Button className="mt-4 bg-red-600 hover:bg-red-700 text-white w-full" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        ) : (
          <>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white mb-2">
                Welcome, Hacker!
              </h1>
              <p className="text-gray-300 text-lg">
                Join the hackathon using your GitHub account
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <Button
                className="w-full h-12 bg-[#2ea44f] hover:bg-[#2c974b] text-white flex items-center justify-center space-x-3 text-lg transition-colors"
                onClick={handleGitHubAuth}
              >
                <GitHubIcon className="w-6 h-6" />
                <span>Continue with GitHub</span>
              </Button>

              <p className="text-sm text-center text-gray-400">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
