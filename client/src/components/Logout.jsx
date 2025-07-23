import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear login status
    localStorage.removeItem('isLoggedIn');
    // Optional: remove user data
    // localStorage.removeItem('registeredUser');

    alert('Logged out successfully!');
    navigate('/');
  }, [navigate]);

  return null; // No visible UI needed
};

export default Logout;
