import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import GitHubIcon from "./icons/GitHubIcon";

interface AuthPageProps {
  onAuthSuccess?: () => void;
}

const AuthPage = ({ onAuthSuccess }: AuthPageProps = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGitHubAuth = async () => {
    setIsLoading(true);
    try {
      // GitHub auth will be implemented here
      toast({
        title: "Not implemented yet",
        description: "GitHub authentication will be added soon!",
      });
      // Temporarily simulate successful auth
      if (onAuthSuccess) {
        onAuthSuccess();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Authentication failed",
        description: "Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-github to-black p-4">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
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
            disabled={isLoading}
          >
            <GitHubIcon className="w-6 h-6" />
            <span>{isLoading ? "Connecting..." : "Continue with GitHub"}</span>
          </Button>

          <p className="text-sm text-center text-gray-400">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;