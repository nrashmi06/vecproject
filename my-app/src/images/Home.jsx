import React from 'react';
import Navbar1 from './navbar1'; 
import './Home.css'; 

const Home = () => {
  return (
    <div>
         <Navbar1 />
    <div className="home-container">
      <div className="content-container">
        <div className="text-content">
          <h2 className='heading'>Truck Ventures</h2>
          <p className="bordered-text">
            Truck Ventures' innovative website revolutionizes garbage collection management with its optimized route planning solutions. By harnessing the power of advanced algorithms and data analytics, our platform efficiently schedules collection routes, minimizing travel time, fuel consumption, and emissions. Municipalities and waste management companies can rely on Truck Ventures to streamline operations, reduce costs, and contribute to a cleaner, more sustainable environment.
          </p>
        </div>
        <div className="image-container">
          <img src="https://www.maplytics.com/wp-content/uploads/2022/06/route2.webp" alt="Route Planning" />
        </div>
      </div>
      <footer className="footer">
        <div className="contact-details">
          <ul className='footer-ul'>
            <li><b>Contact Us</b></li>
            <li>nnm22ad024@nmamit.in - Joanna</li>
            <li>nnm22ad025@nmamit.in - Keesha</li>
            <li>nnm22ad038@nmamit.in - Parthiv</li>
            <li>nnm22ad043@nmamit.in - Rashmi</li>
          </ul>
        </div>
      </footer>
    </div>
    </div>
  );
}

export default Home;
