import React, { useState } from 'react';
import Navbar from './navbar1';

const Schedule = ({ onLogout }) => {
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

  const startTime = new Date();
  startTime.setHours(9, 30, 0);

  const rowsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const startIndex = currentPage * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, streets.length);
  const rows = streets.slice(startIndex, endIndex).map((street, index) => {
    const time = new Date(startTime.getTime() + (startIndex + index) * 4 * 60000);
    return (
      <tr key={startIndex + index}>
        <td style={{ border: '1px solid #ccc', padding: '8px' }}>{startIndex + index + 1}</td>
        <td style={{ border: '1px solid #ccc', padding: '8px' }}>{street}</td>
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
      <Navbar />
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
