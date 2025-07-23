// Profile.jsx (with name & phone only - no photo)
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../profile.css';

const Profile = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const user = JSON.parse(localStorage.getItem('registeredUser'));
    const profileData = JSON.parse(localStorage.getItem('userProfile'));

    if (!isLoggedIn || !user) {
      alert('Please login to access your profile.');
      navigate('/login');
    } else {
      setEmail(user.email);
      if (profileData) {
        setName(profileData.name || '');
        setPhone(profileData.phone || '');
      }
    }
  }, [navigate]);

  const handleSave = () => {
    const profileData = {
      name,
      phone
    };
    localStorage.setItem('userProfile', JSON.stringify(profileData));
    alert('Profile updated successfully!');
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    alert('Logged out successfully.');
    navigate('/');
  };

  return (
    <div className="profile-wrapper">
      <h2>User Profile</h2>
      <div className="profile-box">
        <p><strong>Email:</strong> {email}</p>

        <label>Name:</label>
        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />

        <label>Phone:</label>
        <input
          type="tel"
          value={phone}
          placeholder="Enter your phone number"
          onChange={(e) => setPhone(e.target.value)}
        />
        <div className='profile_butt'>
        <button className="save-btn" onClick={handleSave}>Save Profile</button>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;