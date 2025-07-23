import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const benefitData = [
    { icon: 'benefit-icon-1', label: 'Track Location' },
    { icon: 'benefit-icon-2', label: 'Best Hospitality' },
    { icon: 'benefit-icon-3', label: 'Emergency Exit' },
    { icon: 'benefit-icon-4', label: 'Entertainment' }
  ];

  const navigate = useNavigate();
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [journeyDate, setJourneyDate] = useState('');

  const handleBookClick = () => {
    if (!fromCity || !toCity || !journeyDate) {
      alert('Please select all fields');
      return;
    }


    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      alert('Please login first to book a ticket.');
      return navigate('/login');
    }


    navigate('/seatlayout', {
      state: { fromCity, toCity, journeyDate }
    });
  };


  return (
    <>
      <section id="home">
        <div className="hero">
          <div className="sen">
            <h2>“Your journey, Our responsibility.”</h2>
          </div>
          <a href='#booking' className="Bbtn" >Book Now</a>
        </div>
      </section>

      <section id="booking" className="bookp">
        <div className="bword">
          <h1>Elite Travels</h1>
          <p>
            <span className="r">Redefining</span>
            <span className="y"> Your Travel</span>
            <span className="e"> Experience!</span>
          </p>
        </div>

        <div className="bs">
          <form id="bookingForm" className="es" onSubmit={(e) => e.preventDefault()}>
            <div className="si">
              <select id="fromCity" className="fs" required value={fromCity} onChange={(e) => setFromCity(e.target.value)}>
                <option value="">From</option>
                <option value="Chennai">Chennai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Madurai">Madurai</option>
              </select>
              <select id="toCity" className="fs" required value={toCity} onChange={(e) => setToCity(e.target.value)}>
                <option value="">To</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Trichy">Trichy</option>
                <option value="Salem">Salem</option>
              </select>
              <input type="date" id="journeyDate" className="fs" required value={journeyDate} onChange={(e) => setJourneyDate(e.target.value)} />
            </div>
            <div className="va">
              <button type="submit" className="sbut">Search Bus</button>
              <button type="button" className="Bbt" onClick={handleBookClick}>Book Ticket</button>
            </div>
          </form>
        </div>
      </section>



      <section id="features">
        <div className="cpage">
          <div className="ourfeature">
            <div className="oufe">
              <h1>We Provide Best features</h1>
            </div>
            <div>
              <h3>
                Your search for the best and cheapest deals on top searched routes in India ends here. Choose from
                sleeper, semi-sleeper, volvo and many more buses<br />
                while booking online and get the cheapest fare, multiple paying options and 24x7 customer service
              </h3>
            </div>
          </div>

          <div className="card1">
            {["water", "tv", "blanket", "charge"].map((item, i) => (
              <div key={i} className="cbox">
                <div className="cboximgbg">
                  <img src={`/images/${item}.png`} alt={item} />
                </div>
                <h3>{item.charAt(0).toUpperCase() + item.slice(1)}</h3>
              </div>
            ))}
          </div>

          <div className="card2">
            {["snack", "lamp", "party", "toilet"].map((item, i) => (
              <div key={i} className="cbox">
                <div className="cboximgbg">
                  <img src={`/images/${item}.png`} alt={item} />
                </div>
                <h3>{item.charAt(0).toUpperCase() + item.slice(1)}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="worth">
        <div className="fpage">
          <div className="fpageleft">
            <p>Why It’s Worth It</p>
            <img src="/images/fpics.png" alt="worth" />
          </div>
          <div className="fpageright">
            <p className="fpara">
              Elite Travels a good to travels industry, but a unit of Elite Travels an <br />
              excelling company in the field of infrastructure industry with great<br />
              quality and commitment.
            </p>
            <div className="work">
              {benefitData.map((item, index) => (
                <div key={index} className={index < 2 ? 'sbox1' : 'sbox2'}>
                  <img src={`/images/${item.icon}.png`} className="benefit_pic" alt={item.label} />
                  <h5>{item.label}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="advantage">
          {["fast", "spend", "stress"].map((icon, index) => (
            <div key={index} className="advbox">
              <div className="fastbook">
                <div className="fastbookinner">
                  <img src={`/images/${icon}.png`} alt={icon} />
                </div>
              </div>
              <h3>{icon === 'fast' ? 'Fast Booking' : icon === 'spend' ? 'Spend Less' : 'Stress Free'}</h3>
              <p>
                {icon === 'fast'
                  ? 'Enjoy buying your bus tickets online from home or on the go.'
                  : icon === 'spend'
                    ? 'We have affordable prices and the best carriers all in one place.'
                    : 'The simplest and stress free way to book your bus travel.'}
              </p>
            </div>
          ))}
        </div>
      </div>

      <section id="facility">
        <div className="achivements">
          <div className="achivepara">
            <p>We are <span> Proud To Have </span> you served</p>
          </div>
          <div className="achive">
            {[['1400+', 'Fleets'], ['40L+', 'Ticket Sold'], ['900+', 'Destination Served'], ['100+', 'Trips Daily']].map(
              ([number, label], index) => (
                <div key={index} className="abox">
                  <h2>{number}</h2>
                  <p>{label}</p>
                  <img
                    src={`/images/${index < 2 ? 'fpics.png' : 'busbg.png'}`}
                    className={index < 2 ? 'a' : 'ab'}
                    alt={label}
                  />
                </div>
              )
            )}
          </div>
          <div className="achive_sentance">
            <h1>Book For Exciting Discounts</h1>
            <p>
              We at Elite Travels strive to maintain the most reasonable rates in the market. This also makes our
              passengers happy and <br></br>thus we further give them discount offers on a regular basis to enhance their
              happiness.
            </p>
          </div>
        </div>
      </section>

      <section id='route'>
        <div className="route">
          <h1>| Over Popular Routes</h1>
          <div className="route_box_outer">
            <div className="route_box_inner">
              <img src="/images/routebus.png" alt="route" />
              <div className="route_right">
                <div className="scroll_container">
                  {["chennai", "bangalore", "coimbatore", "hyderabad", "tirupathi", "kodaikanal", "kanyaku", "tanjavor", "tirunel", "madurai", "rameshwaram", "ooty", "nagercoil"].map(
                    (city, i) => (
                      <div key={i} className="scroll_item">
                        <img src={`/images/${city}.png`} alt={city} />
                        <h4>
                          {city.charAt(0).toUpperCase() + city.slice(1)}{' '}
                          <img src="/images/arrow.png" alt="to" /> Destination
                        </h4>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="gallery">
          <div className="gallerypara">
            <h1>We Serve You Only the Best</h1>
          </div>
          <div className="container">
            {["photo1.jpg", "fpic.png", "routebus.png", "bobg.jpg", "grp.png", "bookbg1.jpg", "sleeper.jpg", "snackbus.jpg", "busdrive.jpg"].map(
              (bg, i) => (
                <div key={i} className={`gbox ${["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"][i]}`}>
                  {i === 0 && <p className="onboard">Onboard Services</p>}
                  {i === 1 && <p>Redefining the experience of <br /> traveling for you with our luxury buses</p>}
                  {i === 2 && <p>Amazing Travels</p>}
                  {i === 3 && <p>Making your journey <br /> more comfortable & enjoyable</p>}
                  {i === 4 && <p>Browse the internet & <br /> enjoy! Be connected always!</p>}
                  {i === 6 && <p>Elite is more Safe and Secure! <br /> Verify by Verisign</p>}
                  {i === 8 && <p className="sas">Safe & Secure</p>}
                </div>
              )
            )}
          </div>
        </div>
      </section>
      <footer>

        <div className='foot'>
          <div className='foots'>

            <div className='foot_content'>
              <div className='footpara'>
                <h1>Elite Travels</h1>
                <p>Today Parveen Travels is the only, single<br></br> largest fleet operator with ISO certified <br></br>one stop shop for travel needs. The<br></br> success of any tourism related <br></br>organization depends on customer<br></br> satisfaction and this in turn boils down<br></br> to raw hospitality. We at Parveen have <br></br>excelled in this art, and this is one of the <br></br>aspects that make Elite so special.</p>
              </div>
              <div className='quicklinks'>
                <h1>Quick Links</h1>
                <div className='qlinks' >
                <a href='#facility' >About Us</a>
                <a href='#booking' >Booking</a>
                <a href='#features' >Features</a>
                <a href='#route'>Routes</a>
                </div>
              </div>
              <div className='office_address'>
                <h1>Corporate Office</h1>
                <p>🏢 ES Towers, #148, Sakthi Nagar, <br></br>
                  Madurai Road, Tenkasi,<br></br>
                   Tamil Nadu - 627 803.</p>
                <p>📧 customercare@elitetravels.com</p>
              </div>
            </div>

            <div className='rights'>
              <h4>© 2025 - Elite Travels</h4>
              <p>Elite Travels . All rights reserved.</p>
            </div>

          </div>

        </div>

      </footer>
    </>
  );
};

export default Home;
