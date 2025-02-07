import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

const SignupForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    if (!username || !email || !password) {
      setError('Please fill in all fields.');
    } else {
      setError('');
      alert('Account created successfully!');
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <img src="/hackspher-logo.png" alt="HackSpher Logo" className="logo" />
        <h1 className="form-title">Sign Up</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-input"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
        />
        {error && <p className="error-message">{error}</p>}
        <button onClick={handleSignup} type="submit" className="form-button">Sign Up</button>
        <p className="form-footer">
          Already have an account?{' '}
          <Link to="/" className="form-link">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
