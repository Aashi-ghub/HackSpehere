import React, { useState } from 'react';
import { Github } from 'lucide-react';

interface GithubAuthProps {
  isLogin: boolean;
  onBack: () => void;
}

function GithubAuth({ isLogin, onBack }: GithubAuthProps) {
  const [githubCredentials, setGithubCredentials] = useState({ username: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('GitHub credentials:', githubCredentials);
  };

  return (
    <div className="h-full flex flex-col justify-center items-center p-8">
      <Github className="w-16 h-16 text-white mb-6" />
      <h2 className="text-2xl font-bold text-white mb-4">GitHub Sign {isLogin ? 'In' : 'Up'}</h2>
      <form onSubmit={handleSubmit} className="w-full space-y-4">
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
        onClick={onBack}
        className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        Go back
      </button>
    </div>
  );
}

export default GithubAuth;