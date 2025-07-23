import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../sign.css';

const Sign = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sample authentication
    const registered = JSON.parse(localStorage.getItem('registeredUser'));
    const validEmail = 'user@example.com';
    const validPassword = '123456';

    // Check against demo OR registered user
    if (
      (email === validEmail && password === validPassword) ||
      (registered && email === registered.email && password === registered.password)
    ) {
      localStorage.setItem('isLoggedIn', 'true');
      alert('Login successful!');
      navigate('/');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="login-wrapper">
      <h1>Welcome to Elite Travels</h1>
      <section id="sign">
        <div className="background"></div>
        <div className="login-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>

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
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="options">
              <label><input type="checkbox" /> Remember Me</label>
              <a href="#">Forget Password</a>
            </div>

            <button type="submit">Log In</button>

            <p className="register-link">
              Don’t have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Sign;
