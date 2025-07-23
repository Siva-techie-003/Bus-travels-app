import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <img src="/images/easy.png" className="logo" alt="Logo" />
        <Link className="name" to="/">Elite Travels</Link>

        <div className="na">
          <a href='/' className="nav">Home</a>
          <a href="#booking" className="nav">Booking</a>
          <a href="#features" className="nav">Features</a>
          <a href="#facility" className="nav">About Us</a>
          <Link to="/profile" className="nav"><img src="/images/user.png" alt="User" /></Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
