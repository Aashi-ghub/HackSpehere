import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import GitHubIcon from "./githubicon";

interface AuthPageProps {
  onAuthSuccess?: () => void;
}

const AuthPage = ({ onAuthSuccess }: AuthPageProps = {}) => {
  const [user, setUser] = useState<{ username: string; avatar: string } | null>(null);
  const { toast } = useToast();

  // Fetch logged-in user data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:5000/auth/user", {
          credentials: "include",
        });
        const data = await response.json();
        console.log("Fetched User:", data); // Debugging

        if (response.ok) {
          setUser(data);
          if (onAuthSuccess) onAuthSuccess();
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [onAuthSuccess]);

  const handleGitHubAuth = () => {
    window.location.href = "http://localhost:5000/auth/github";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-github to-black p-4">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        {user ? (
          <div className="text-center text-white">
            <h1 className="text-3xl font-bold">Welcome, {user.username}!</h1>
            <img src={user.avatar} alt="GitHub Avatar" className="w-16 h-16 rounded-full mx-auto mt-4" />
            <p className="mt-2 text-gray-300">You're logged in with GitHub</p>
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
