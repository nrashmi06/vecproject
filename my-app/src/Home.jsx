import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
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
        <footer style={{ backgroundColor: '#000', color: '#fff', padding: '20px', width: '100%', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft:'20px', marginRight:'20px' }}>
            <div>
            <svg width="86" height="57" viewBox="0 0 86 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M74.2727 14.25H62.5455V0H7.81818C3.49864 0 0 3.18844 0 7.125V46.3125H7.81818C7.81818 52.2084 13.0759 57 19.5455 57C26.015 57 31.2727 52.2084 31.2727 46.3125H54.7273C54.7273 52.2084 59.985 57 66.4545 57C72.9241 57 78.1818 52.2084 78.1818 46.3125H86V28.5L74.2727 14.25ZM19.5455 51.6562C16.3009 51.6562 13.6818 49.2694 13.6818 46.3125C13.6818 43.3556 16.3009 40.9688 19.5455 40.9688C22.79 40.9688 25.4091 43.3556 25.4091 46.3125C25.4091 49.2694 22.79 51.6562 19.5455 51.6562ZM72.3182 19.5938L79.9995 28.5H62.5455V19.5938H72.3182ZM66.4545 51.6562C63.21 51.6562 60.5909 49.2694 60.5909 46.3125C60.5909 43.3556 63.21 40.9688 66.4545 40.9688C69.6991 40.9688 72.3182 43.3556 72.3182 46.3125C72.3182 49.2694 69.6991 51.6562 66.4545 51.6562Z" fill="#FFC123" />
        </svg>
        <h3>TRUCK VENTURES</h3>
            </div>
            <div>
              <h3>Contact Us </h3>
              <p style={{ fontSize: '14px' }}>Address: Karnataka, India</p>
              <p style={{ fontSize: '14px' }}>Phone: +1234567890</p>
              <p style={{ fontSize: '14px' }}>Email: <a href="mailto:truckventures@gmail.com" style={{ color: '#fff' }}>truckventures@gmail.com</a></p>

            </div>
            <div>
              <h4 style={{ margin: '0' }}>Follow Us</h4>
              <div style={{ display: 'justify', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
              <a href="https://github.com/nrashmi06/vecproject" style={{ color: '#fff' }}>
  <FontAwesomeIcon icon={faGithub} />
</a>

              </div>
            </div>
          </div>
          <hr style={{ borderColor: '#555' }} />
          <p style={{ fontSize: '12px' }}>&copy; 2024 Your Website. All rights reserved. | Designed by TruckVenctures</p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
