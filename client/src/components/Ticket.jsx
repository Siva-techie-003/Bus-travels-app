import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Ticket = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const ticket = location.state;

  if (!ticket) {
    return (
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h2>No ticket data found.</h2>
        <button onClick={() => navigate('/')}>Go to Home</button>
      </div>
    );
  }

  // Generate Ticket ID and Fare
  const ticketId = 'ELT' + Math.floor(100000 + Math.random() * 900000);
  const farePerSeat = 500;
  const totalFare = ticket.selectedSeats.length * farePerSeat;

  return (
    <div style={{ padding: '30px', maxWidth: '600px', margin: '100px auto', boxShadow: '0 0 10px rgba(0,0,0,0.2)', borderRadius: '12px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', color: 'darkblue' }}>🎟️ Your Ticket Confirmation</h2>

      <div style={{ marginTop: '20px', fontSize: '18px' }}>
        <p><strong>Ticket ID:</strong> {ticketId}</p>
        <p><strong>From:</strong> {ticket.fromCity}</p>
        <p><strong>To:</strong> {ticket.toCity}</p>
        <p><strong>Date:</strong> {ticket.journeyDate}</p>
        <p><strong>Seats Booked:</strong> {ticket.selectedSeats.join(', ')}</p>
        <p><strong>Total Fare:</strong> ₹{totalFare}</p>

        <div style={{ textAlign: 'center',marginTop: '25px', fontSize: '17px',color: 'darkblue' }}>
          <p><strong>"Thanks for booking with us - see you again soon!"</strong></p>
        </div>

      </div>

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <button onClick={() => navigate('/')} style={{ padding: '10px 20px', border: 'none', backgroundColor: '#007bff', color: '#fff', borderRadius: '8px', cursor: 'pointer',fontWeight:'bolder' }}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Ticket;