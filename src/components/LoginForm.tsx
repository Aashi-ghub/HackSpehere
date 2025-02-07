import React, { useState } from 'react';
import { Github, ArrowRight } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';


function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [authMethod, setAuthMethod] = useState<'form' | 'github'>('form');
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [githubCredentials, setGithubCredentials] = useState({ username: '', password: '' });
  const { toast } = useToast();
  const navigate =useNavigate();

  const toggleForm = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setIsAnimating(false);
    }, 300);
  };

  const handleAuthMethodChange = (method: 'form' | 'github') => {
    setAuthMethod(method);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email/password authentication here
    console.log('Credentials:', credentials);
    try{
    const res = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // Ensure authentication session is included
      body: JSON.stringify(credentials),
    });
    const result = await res.json();
    if (res.ok) {
      toast({
        title: result.message,
        description: "You have been logged in.",
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

  const handleGithubSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle GitHub authentication here
    console.log('GitHub credentials:', githubCredentials);
  };

  return (
    <div className="min-h-screen bg-gray-950 relative flex items-center justify-center p-4 overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className={`absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-3xl transform -translate-y-1/2 transition-all duration-1000 ease-in-out ${isAnimating ? 'scale-110' : 'scale-100'}`} />
          <div className={`absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl transition-all duration-1000 ease-in-out ${isAnimating ? 'scale-90' : 'scale-100'}`} />
          <div className={`absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-3xl transition-all duration-1000 ease-in-out ${isAnimating ? 'scale-105' : 'scale-100'}`} />
        </div>
      </div>

      <div className="relative w-full max-w-md overflow-hidden">
        <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-800 p-8">
          {/* Main Form */}
          <div className={`transform transition-all duration-500 ease-in-out ${
            authMethod !== 'form' ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'
          }`}>
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              {isLogin ? 'Welcome Back!' : 'Create Account'}
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
                  {isLogin ? 'Sign In' : 'Sign Up'}
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
                onClick={() => handleAuthMethodChange('github')}
                className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center group border border-gray-700"
              >
                <Github className="mr-2 h-5 w-5" />
                Continue with GitHub
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-400">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={toggleForm}
                className="ml-1 font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>

          {/* GitHub Auth Form */}
          <div className={`absolute top-0 left-0 w-full h-full transform transition-all duration-500 ease-in-out ${
            authMethod === 'github' ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}>
            <div className="h-full flex flex-col justify-center items-center p-8">
              <Github className="w-16 h-16 text-white mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">GitHub Sign {isLogin ? 'In' : 'Up'}</h2>
              <form onSubmit={handleGithubSubmit} className="w-full space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-200">GitHub Username</label>
                  <input
                    type="text"
                    value={githubCredentials.username}
                    onChange={(e) => setGithubCredentials(prev => ({ ...prev, username: e.target.value }))}
                    className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    placeholder="username"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-200">GitHub Password</label>
                  <input
                    type="password"
                    value={githubCredentials.password}
                    onChange={(e) => setGithubCredentials(prev => ({ ...prev, password: e.target.value }))}
                    className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    placeholder="••••••••"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center group"
                >
                  Continue with GitHub
                </button>
              </form>
              <button
                onClick={() => handleAuthMethodChange('form')}
                className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Go back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;