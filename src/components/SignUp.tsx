import React, { useState ,useEffect } from 'react';
import { ArrowRight, Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

interface SignUpProps {
  onToggleForm: () => void;
  onAuthMethodChange: (method: 'form' | 'github') => void;
}

function SignUp({ onToggleForm, onAuthMethodChange }: SignUpProps) {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const { toast } = useToast();
    const navigate =useNavigate();
  
  // Extract Token From GITHUBLogin-URL if exist  
  // useEffect(() =>{
  //   const token = getTokenFromUrl();
  //   if(token){
  //     localStorage.setItem('token', token);
  //    navigate('/')
  //   }
  // },[]);  

// Login with GitHub
const handleGitHubLogin = () => {
      // window.location.href = "http://localhost:5000/auth/github"; // Redirect to GitHub login
      window.location.href="https://inceptionx-production.onrender.com/auth/github"
  };

//Extract Token from github Athentication
// function getTokenFromUrl(){
//     const urlParams = new URLSearchParams(window.location.search);
//      return  urlParams.get('token');
//  }

 // Handle form submission and login with Email/Password
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('SignUp credentials:', credentials);
    try{
      // production API URL
      const API_BASE_URL="https://inceptionx-production.onrender.com"
      // development API URL
      // const API_BASE_URL="http://localhost:5000"
    
      const res = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // Ensure authentication session is included
        body: JSON.stringify(credentials),
      });
      const result = await res.json();
      console.log(result)
      if (res.ok) {
        localStorage.setItem('token', result.Token);
        toast({
          title: result.message,
          description: "Your account is successfully created.",
        });
        setTimeout(() => {
          navigate("/"); // Redirect to home page after 3 seconds
        }, 3000);
      } 
      else {
         toast({
        variant: "destructive",
        title: result.message,
        description:"Please try Again ",
        });
      }
    }
    catch (error) {
      toast({
        variant: "destructive",
        title: error.message,
       description: error.message || "Please try again later.",
      });
    }
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        Create Account
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-200">Email</label>
          <input
            type="email"
            value={credentials.email}
            onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
            className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
            placeholder="your@email.com"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-200">Password</label>
          <input
            type="password"
            value={credentials.password}
            onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
            className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
            placeholder="••••••••"
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center group relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center">
            Sign Up
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-900 text-gray-400">Or continue with</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() =>handleGitHubLogin()}
          className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center group border border-gray-700"
        >
          <Github className="mr-2 h-5 w-5" />
          Continue with GitHub
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-400">
        Already have an account?
        <button
          onClick={onToggleForm}
          className="ml-1 font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Sign in
        </button>
      </p>
    </>
  );
}

export default SignUp;