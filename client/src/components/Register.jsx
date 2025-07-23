import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../sign.css';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Save user to localStorage (for demo)
    localStorage.setItem('registeredUser', JSON.stringify({ email, password }));
    alert('Registration successful! Please login.');
    navigate('/login');
  };

  return (
    <div className="login-wrapper">
      <h1>Create a New Account</h1>
      <section id="sign">
        <div className="background"></div>
        <div className="login-container">
          <form className="login-form" onSubmit={handleRegister}>
            <h2>Register</h2>

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button type="submit">Register</button>

            <p className="register-link">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
