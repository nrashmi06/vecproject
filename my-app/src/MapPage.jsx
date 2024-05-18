import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './MapPage.css'; // Import CSS file for styling
import Navbar from './Navbar';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from './images/marker.png';
import { getDatabase, ref, onValue } from 'firebase/database';
import { auth } from './firebase'; // Assuming you have Firebase authentication configured
const streetLocations = [
  ['Bejai', 'Bejai Main Rd'], ['Bejai', 'Bejai New Road'], ['Bejai', 'Pais Garden'], ['Bejai', '3rd Cross Rd'], ['Bejai', 'Badriya Masjid Rd'], ['Bejai', '7th Cross Rd'], ['Bejai', 'Palace Gardens Rd'],
  ['Bejai', 'Bejai New Rd'], ['Bejai', 'Sankai Gudda Rd'], ['Bejai', 'MFC Layout Rd'], ['Bejai', 'Ashraya 3rd Cross Rd'],
  ['Bejai', 'Ashraya Rd'], ['Bejai', 'Anegundi Rd'], ['Bejai', 'Rock View Ln'], ['Bejai', 'Lalbagh Rd'],
  ['Bejai', 'KMC Bejai Trunk Rd'], ['Bejai', 'Balebailu Rd'], ['Bejai', 'Neelamana 3 Rd'], ['Bejai', 'Neelamana Inn Rd'], ['Bejai', 'Kuntikan Rd'], ['Bejai', '5th Cross Rd'],
  ['Bejai', 'Nodu Ln'], ['Bejai', 'Museum Rd, Bejai'], ['Kadri', 'Kadri kambla'], ['Kadri', 'circuit house circle'],
  ['Bejai', 'Police Station Rd'], ['Kadri', 'Vasanth Vihar Kadri'], ['Kadri', 'Kadri park road'], ['Kadri', 'George Martis Rd'], ['Kadri', 'Near Kadri park'],
  ['Kadri', 'Near Padua PU College'], ['Kadri', 'Nanthoor Jn'], ['Kadri', 'Karavali Lane'], ['Kadri', 'Kaibattal Road'], ['Bejai', 'Mallikate'], ['Bejai', 'Mercara Hill Rd'],
  ['Bejai', 'Mallikatte'], ['Bejai', 'Hari Kripa Rd'], ['Bejai', "Pinto's Ln"], ['Bejai', 'Arya Samaj Rd'],
  ['Kadri', 'Kadri Rd'], ['Kadri', 'Vyasa Rao Rd'], ['Kadri', 'GSB Colony Rd'], ['Kadri', 'Karangalpady Cross Rd'],
  ['Kadri', 'CG Kamath Rd'], ['Bejai', 'Bejai Church Rd'], ['Kadri', 'Kadri Kambla Rd'], ['Bejai', 'Highgrove Apt Rd'], ['Kadri', 'Airport Road'], ['Kadri', 'Yeyyadi Road'],
  ['Kadri', 'Kadri Hills'], ['Kadri', 'Shakthinagar road'], ['Kadri', 'Shivbagh Rd'], ['Bendoor', 'Nr Kadri'], ['Kadri', '2nd cross road'], ['Kadri', '1st cross road'],
  ['Kadri', '3rd cross road'], ['Bendoor', 'bendoor'], ['Bendoor', 'Balmatta Rd'], ['Bendoor', 'New Balmatta Rd'], ['Bendoor', 'YMCA Balmatta Maidan Rd'], ['Bendoor', 'Mother Theresa Rd'], ['Bejai', '5th cross Rd'], ['Kadri', 'Maroli'],
  ['Kadri', 'Nanthoor']
];
const customIcon = new L.Icon({
  iconUrl: markerIcon,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});



const MapPage = ({ onLogout }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [streets, setStreets] = useState([]);
  const itemsPerPage = 10; // Number of items per page
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); 
        if (auth.currentUser) {
          const db = getDatabase();
  
          // Fetch user's place from Firebase
          const userRef = ref(db, `users/${auth.currentUser.uid}/place`);
          const unsubscribe = onValue(userRef, (snapshot) => {
            const place = snapshot.val();
            if (place) {
              // Filter streetLocations based on place
              const filteredStreets = streetLocations.filter(([location]) => location === place);
              setStreets(filteredStreets);
              setLoading(false); // Set loading to false when data is fetched
            }
          });
          
          return () => {
            unsubscribe();
          };
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false on error
      }
    };
  
    fetchData();
    return 
  }, []); // Empty dependency array means this effect runs only once after initial render
  

  const handlePageClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const pageCount = Math.ceil(streets.length / itemsPerPage);
  const pageNumbers = Array.from({ length: pageCount }, (_, i) => i);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, streets.length);

  return (
    <div>
      <Navbar onLoggingout={onLogout} />
      <div className="map-container">
        <MapContainer center={[12.9141, 74.856]} zoom={12} style={{ width: '100%', height: '400px' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {streets.slice(startIndex, endIndex).map(([location, street], index) => (
            <Marker key={index} position={[12.9141, 74.856]} icon={customIcon}>
              <Popup>{location}: {street}</Popup>
            </Marker>
          ))}
        </MapContainer>
        <hr style={{ border: '2px solid black' }} />
        <div className="info-container">
          <div className="additional-info">
            <div className="distance-travelled-box">
              <h3>Distance to be Traveled:</h3>
              <p>200 KM</p>
            </div>
            <div className="fuel-consumed-box">
              <h3>Fuel Consumed:</h3>
              <p>15 liters</p>
            </div>
          </div>
          <div className="route-info">
            <h2>THE ROUTE</h2>
            <table>
              <thead>
                <tr>
                  <th>Serial No.</th>
                  <th>Location</th>
                  <th>Street</th>
                </tr>
              </thead>
              <tbody>
                {streets.slice(startIndex, endIndex).map(([location, street], index) => (
                  <tr key={startIndex + index}>
                    <td>{startIndex + index + 1}</td>
                    <td>{location}</td>
                    <td>{street}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="number-counter">
              {pageNumbers.map((page) => (
                <span
                  key={page}
                  onClick={() => handlePageClick(page)}
                  style={{
                    marginRight: '10px',
                    cursor: 'pointer',
                    fontWeight: currentPage === page ? 'bold' : 'normal',
                  }}
                >
                  {page + 1}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
