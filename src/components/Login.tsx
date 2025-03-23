import React, { useEffect, useState } from "react";
import { ArrowRight, Github, GithubIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "./googleIcon";
import Navigation from '../components/Navigation';

interface LoginProps {
  onToggleForm: () => void;
  onAuthMethodChange: (method: "form" | "github") => void;
}

function Login({ onToggleForm, onAuthMethodChange }: LoginProps) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { toast } = useToast();
  const navigate = useNavigate();

  // Login with Google
  const handleGoogleLogin = async () => {
    // window.location.href = "http://localhost:5000/auth/github"; // Redirect to GitHub login
    window.location.href =
      "https://Xception-production.onrender.com/auth/google"; // Redirect to GitHub login
  };

  // Handle form submission and login with Email/Password
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login credentials:", credentials);

    try {
      console.log("Trying to log in...");

      // production API URL
      const API_BASE_URL = "https://Xception-production.onrender.com";

      // development API URL
      // const API_BASE_URL="http://localhost:5000"

      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // Ensure authentication session is included
        body: JSON.stringify(credentials),
      });
      const result = await response.json();
      if (response.ok) {
        console.log("Login result:", result);
        toast({
          title: result.message,
          description: "You have been logged in.",
        });
        setTimeout(() => {
          navigate("/"); // Redirect to home page after 3 seconds
        }, 3000);
      } else {
        toast({
          variant: "destructive",
          title: result.message,
          description: "Please try Again ",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: error.message,
        description: error.message || "Please try again later.",
      });
    }
  };

  return (
    <>
    
      <h2 className="text-3xl  font-bold text-white mb-6 text-center">
        Welcome Back!
      </h2>

      <form className="space-y-4 " onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-200">
            Email
          </label>
          <input
            type="email"
            value={credentials.email}
            onChange={(e) =>
              setCredentials((prev) => ({ ...prev, email: e.target.value }))
            }
            className="w-full px-4 py-2 rounded-lg bg-black/50 border border-white/50 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
            placeholder="your@email.com"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-200">
            Password
          </label>
          <input
            type="password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials((prev) => ({ ...prev, password: e.target.value }))
            }
            className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
            placeholder="password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-700 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center group relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center">
            Sign In
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-black/30 rounded-sm text-gray-400">
              Or continue with
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => handleGoogleLogin()}
          className="w-full bg-white hover:bg-gray-700 text-black font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center group border border-gray-700"
        >
          <svg
            className="mr-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FFC107"
              d="M43.6 20.5H42V20H24v8h11.3C33.5 33.4 29.1 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.7 3l5.7-5.7C33.5 6.6 28.1 4 22 4 10.9 4 2 12.9 2 24s8.9 20 20 20c11 0 20-8.9 20-20 0-1.3-.1-2.5-.4-3.5z"
            />
            <path
              fill="#FF3D00"
              d="M6.3 14.7l6.6 4.8C14.3 16 18.8 13 24 13c3 0 5.7 1.1 7.7 3l5.7-5.7C33.5 6.6 28.1 4 22 4 14.1 4 7.3 8.8 6.3 14.7z"
            />
            <path
              fill="#4CAF50"
              d="M24 44c6 0 11.3-2.2 15.3-5.9l-7.1-5.8C29.4 34.9 26.8 36 24 36c-5.1 0-9.4-2.6-11.8-6.5l-6.8 5.3C8.7 39.1 15.9 44 24 44z"
            />
            <path
              fill="#1976D2"
              d="M43.6 20.5H42V20H24v8h11.3c-1.9 3.9-6.2 6.5-11.3 6.5-3.3 0-6.3-1.3-8.5-3.4l-6.8 5.3C11.6 41.2 17.4 44 24 44c11 0 20-8.9 20-20 0-1.3-.1-2.5-.4-3.5z"
            />
          </svg>
          Continue with Google
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-400">
        Don't have an account?
        <button
          onClick={onToggleForm}
          className="ml-1 font-semibold text-red-400 hover:text-red-300 transition-colors"
        >
          Sign up
        </button>
      </p>
    </>
  );
}

export default Login;
