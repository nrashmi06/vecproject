import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Navbar1 = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'black', color: 'white', padding: '10px 20px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
        <svg width="86" height="57" viewBox="0 0 86 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M74.2727 14.25H62.5455V0H7.81818C3.49864 0 0 3.18844 0 7.125V46.3125H7.81818C7.81818 52.2084 13.0759 57 19.5455 57C26.015 57 31.2727 52.2084 31.2727 46.3125H54.7273C54.7273 52.2084 59.985 57 66.4545 57C72.9241 57 78.1818 52.2084 78.1818 46.3125H86V28.5L74.2727 14.25ZM19.5455 51.6562C16.3009 51.6562 13.6818 49.2694 13.6818 46.3125C13.6818 43.3556 16.3009 40.9688 19.5455 40.9688C22.79 40.9688 25.4091 43.3556 25.4091 46.3125C25.4091 49.2694 22.79 51.6562 19.5455 51.6562ZM72.3182 19.5938L79.9995 28.5H62.5455V19.5938H72.3182ZM66.4545 51.6562C63.21 51.6562 60.5909 49.2694 60.5909 46.3125C60.5909 43.3556 63.21 40.9688 66.4545 40.9688C69.6991 40.9688 72.3182 43.3556 72.3182 46.3125C72.3182 49.2694 69.6991 51.6562 66.4545 51.6562Z" fill="#FFC123" />
        </svg>
          <span style={{ marginLeft: '10px', fontSize: '20px' }}><b>Truck Ventures</b></span>
        </Link>
      </div>
      <div>
        <Link to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '16px', marginRight: '40px', cursor:'pointer' }}><b>Home</b></Link>
        <Link to="/scheduler" style={{ textDecoration: 'none', color: 'white', fontSize: '16px', marginRight: '40px', cursor:'pointer' }}><b>Schedule</b></Link>
        <Link to="/login" style={{ textDecoration: 'none', color: 'white', fontSize: '16px', marginRight: '20px', cursor:'pointer' }}><b>Log-in</b></Link>
      </div>
    </nav>
  );
};

export default Navbar1;
