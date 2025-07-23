import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SeatLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState({});

  const { fromCity, toCity, journeyDate } = location.state || {};

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      alert('You must be logged in to book a seat.');
      navigate('/login');
    }
  }, [navigate]);

  const toggleSeat = (seatId) => {
    setSelectedSeats(prev => ({
      ...prev,
      [seatId]: !prev[seatId]
    }));
  };

  const getSelectedSeatList = () => {
    return Object.keys(selectedSeats).filter(seat => selectedSeats[seat]);
  };

  const handleBookNow = () => {
    const selected = getSelectedSeatList();
    if (!fromCity || !toCity || !journeyDate || selected.length === 0) {
      alert("Please select journey details and at least one seat.");
      return;
    }

    const ticketDetails = {
      fromCity,
      toCity,
      journeyDate,
      selectedSeats: selected
    };

    navigate('/ticket', { state: ticketDetails });
  };

  const renderSeats = (groupId, labels) =>
    labels.map((label) => {
      const seatId = `${groupId}-${label}`;
      return (
        <div
          key={seatId}
          className={`seat ${selectedSeats[seatId] ? 'selected' : ''}`}
          onClick={() => toggleSeat(seatId)}
        >
          <img src="/images/bus_seat.png" alt="seat" />
          <p>{label}</p>
        </div>
      );
    });

  const seatLabels1 = ["1 W", "8 W", "9 W", "13 W", "20 W", "21 W", "28 W", "29 W", "36 W", "37 W"];
  const seatLabels2 = ["2 ", "7 ", "10 ", "14 ", "19 ", "22 ", "27 ", "30 ", "35 ", "38 "];
  const seatLabels3 = ["3 ", "6 ", "11 ", "15 ", "18 ", "23 ", "26 ", "31 ", "34 ", "39 "];
  const seatLabels4 = ["4 W", "5 W", "12 W", "16 W", "17 W", "24 W", "25 W", "32 W", "33 W", "40 W"];

  return (
    <>
      <div className='seatpage'>
        <div className="seatpara">
          <h1>Book Your Online Tickets Here</h1>
        </div>


        <div className="layout_page">
          <div className="seat_details">
            <div className="berth">
              <div><img src="/images/berth.png" alt="" style={{ backgroundColor: 'blue' }} /><p>Selected Berth</p></div>
              <div><img src="/images/berth.png" alt="" style={{ backgroundColor: 'green' }} /><p>Booked Berth</p></div>
              <div><img src="/images/berth.png" alt="" style={{ backgroundColor: 'gray' }} /><p>Empty Berth</p></div>
            </div>

            <div className="seater">
              <div><img src="/images/bus_seat.png" alt="" style={{ backgroundColor: 'blue' }} /><p>Selected Seat</p></div>
              <div><img src="/images/bus_seat.png" alt="" style={{ backgroundColor: 'green' }} /><p>Booked Seats</p></div>
              <div><img src="/images/bus_seat.png" alt="" style={{ backgroundColor: 'gray' }} /><p>Empty Seats</p></div>
            </div>
            <div className='journey_details'>
              <h3>From: {fromCity}</h3>
              <h3>To: {toCity} </h3>
              <h3> Date: {journeyDate}</h3>
            </div>
            <div className="bookse">
              <button className="butt" onClick={handleBookNow}>Book Seat</button>
            </div>
          </div>

          <div className="buslayouts">
            <div className="seatlayout">
              <div className="leftseat">
                <div className="lseat">{renderSeats('Seat.No', seatLabels1)}</div>
                <div className="lseat">{renderSeats('Seat.No', seatLabels2)}</div>
              </div>
              <div className="rightseat">
                <div className="rseat">{renderSeats('Seat.No', seatLabels3)}</div>
                <div className="rseat">{renderSeats('Seat.No : ', seatLabels4)}</div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default SeatLayout;