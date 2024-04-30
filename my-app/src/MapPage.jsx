import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './MapPage.css'; // Import CSS file for styling
import Navbar from './Navbar';
import 'leaflet/dist/leaflet.css';
import L, { marker } from 'leaflet';
import markerIcon from './images/marker.png';

const streets = [
  'Bejai Main Rd', 'Bejai New Road', 'Pais Garden', '3rd Cross Rd', 'Badriya Masjid Rd', '7th Cross Rd',
  'Palace Gardens Rd', 'Bejai New Rd', 'Sankai Gudda Rd', 'MFC Layout Rd', 'Ashraya 3rd Cross Rd',
  'Ashraya Rd', 'Anegundi Rd', 'Rock View Ln', 'Lalbagh Rd', 'KMC Bejai Trunk Rd', 'Balebailu Rd',
  'Neelamana 3 Rd', 'Neelamana Inn Rd', 'Kuntikan Rd', '5th Cross Rd', 'Nodu Ln', 'Museum Rd, Bejai',
  'Kadri kambla', 'circuit house circle', 'Police Station Rd', 'Vasanth Vihar Kadri', 'Kadri park road',
  'George Martis Rd', 'Near Kadri park', 'Near Padua PU College', 'Nanthoor Jn', 'Karavali Lane',
  'Kaibattal Road', 'Mallikate', 'Mercara Hill Rd', 'Mallikatte', 'Hari Kripa Rd', "Pinto's Ln",
  'Arya Samaj Rd', 'Kadri Rd', 'Vyasa Rao Rd', 'GSB Colony Rd', 'Karangalpady Cross Rd', 'CG Kamath Rd',
  'Bejai Church Rd', 'Kadri Kambla Rd', 'Highgrove Apt Rd', 'Airport Road', 'Yeyyadi Road', 'Kadri Hills',
  'Shakthinagar road', 'Shivbagh Rd', 'Nr Kadri', '2nd cross road', '1st cross road', '3rd cross road',
  'bendoor', 'Balmatta Rd', 'New Balmatta Rd', 'YMCA Balmatta Maidan Rd', 'Mother Theresa Rd', '5th cross Rd',
  'Maroli', 'Nanthoor'
];



const customIcon = new L.Icon({
  iconUrl: markerIcon,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});
const MapPage = ({onLogout}) => {

  return (
    <div>
      <Navbar onLoggingout={onLogout} />
      <div className="map-container">
       <MapContainer center={[12.9141, 74.856]} zoom={12} style={{ width: '100%', height: '400px' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* Example Marker */}
          <Marker position={[12.9141, 74.856]} icon={customIcon}>
        <Popup>
          place name.
        </Popup>
      </Marker>
        </MapContainer>
        
        <div className="info-container">
          <div className="additional-info">
            <div className="distance-travelled-box">
              <h3>Distance to be Traveled:</h3>
              {/* Placeholder for distance to be traveled */}
              <p>200 KM</p>
            </div>
            <div className="fuel-consumed-box">
              <h3>Fuel Consumed:</h3>
              {/* Placeholder for fuel consumed */}
              <p>15 liters</p>
            </div>
          </div>
          <div className="route-info">
            <h2>THE ROUTE</h2>
            {/* Placeholder for route table */}
            <table>
              <thead>
                <tr>
                  <th>Route</th>
                  <th>Distance (KM)</th>
                </tr>
              </thead>
              <tbody>
                {streets.map((street, index) => (
                  <tr key={index}>
                    <td>{street}</td>
                    <td>{index + 1}</td> {/* Placeholder for distance */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
