import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Home from './components/Home.jsx';
import SeatLayout from './components/SeatLayout.jsx';
import Login from './components/Login.jsx';
import Navbar from './components/Navbar.jsx';
import Ticket from './components/Ticket.jsx';
import Register from './components/Register.jsx';
import Logout from './components/Logout.jsx';
import Profile from './components/Profile.jsx';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seatlayout" element={<SeatLayout />} />
        <Route path="/login" element={<Login />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile" element={<Profile />} />




      </Routes>
    </>
  );
}

export default App;
