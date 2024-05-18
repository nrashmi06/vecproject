import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { getDatabase, ref, onValue } from "firebase/database";
import { auth } from './firebase';
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

const Schedule = ({ onLogout }) => {
  const [streets, setStreets] = useState([]);
  const startTime = new Date();
  startTime.setHours(9, 30, 0);

  const rowsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  useEffect(() => {
    // Initialize Firebase Realtime Database
    const db = getDatabase();
   
    if (auth.currentUser) {
       const unsubscribe = onValue(ref(db, `users/${auth.currentUser.uid}/place`), (snapshot) => {
         const place = snapshot.val();
         if (place) {
           const filteredStreets = streetLocations.filter(([location, street]) => location === place);
           setStreets(filteredStreets);
         }
       });
   
       return () => unsubscribe(); 
    } else {
       console.log("User is not logged in.");
    }
   }, []);

  const startIndex = currentPage * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, streets.length);
  const rows = streets.slice(startIndex, endIndex).map((street, index) => {
    const time = new Date(startTime.getTime() + (startIndex + index) * 4 * 60000);
    return (
      <tr key={startIndex + index}>
        <td style={{ border: '1px solid #ccc', padding: '8px' }}>{startIndex + index + 1}</td>
        <td style={{ border: '1px solid #ccc', padding: '8px' }}>{street[1]}</td>
        <td style={{ border: '1px solid #ccc', padding: '8px' }}>
          {time.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
        </td>
      </tr>
    );
  });

  const pageCount = Math.ceil(streets.length / rowsPerPage);
  const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <div>
      <Navbar onLoggingout={onLogout} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ margin: '10px' }}>Schedule</h2>
        <div style={{ width: '80%', maxWidth: '800px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ccc' }}>
            <thead>
              <tr style={{ backgroundColor: ' #FFC123' }}>
                <th style={{ border: '1px solid  #FFC123', padding: '10px', textAlign: 'left' }}>No</th>
                <th style={{ border: '1px solid  #FFC123', padding: '10px', textAlign: 'left' }}>Street</th>
                <th style={{ border: '1px solid  #FFC123', padding: '10px', textAlign: 'left' }}>Time (a.m.)</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            {pageNumbers.map((pageNumber) => (
              <button
                key={pageNumber}
                style={{ margin: '2px', padding: '5px 10px', border: '1px solid #ccc', cursor: 'pointer', backgroundColor: currentPage + 1 === pageNumber ? '#FFC123' : 'transparent' }}
                onClick={() => handlePageClick(pageNumber - 1)}
              >
                {pageNumber}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
