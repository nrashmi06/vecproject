import React from 'react';
import './Info.css'; 
import Navbar from './Navbar'; 


import bottleImage from './images/bottle.jpeg';
import cardboardImage from './images/cardboard.webp';
import clothImage from './images/cloth.avif';
import gardenWasteImage from './images/garden waste.jpg'; 
import glassImage from './images/glass.jpeg';
import metalImage from './images/metal.jpeg';
import paperImage from './images/paper.jpg';
import vegetablePeelImage from './images/vegetable peel.jpeg'; 


const Info = ({onLogout}) => {
  
  const wasteMaterials = [
    { name: 'Bottle', type: 'Dry Waste', image: bottleImage },
    { name: 'Cardboard', type: 'Dry Waste', image: cardboardImage },
    { name: 'Cloth', type: 'Dry Waste', image: clothImage },
    { name: 'Garden Waste', type: 'Wet Waste', image: gardenWasteImage },
    { name: 'Glass', type: 'Dry Waste', image: glassImage },
    { name: 'Metal', type: 'Dry Waste', image: metalImage },
    { name: 'Paper', type: 'Dry Waste', image: paperImage },
    { name: 'Vegetable Peel', type: 'Wet Waste', image: vegetablePeelImage }
  ];

  return (
    <div>
      <Navbar onLoggingout={onLogout} />
      <div className="info-container">
        <h2 className='heading'>Waste Material Information</h2>
        <div className="waste-list">
          {wasteMaterials.map((material, index) => (
            <div className={`material-card ${material.type.toLowerCase().replace(' ', '-')}`} key={index}>
              <img src={material.image} alt={material.name} className="material-image" />
              <div className="material-info">
                <h3 className="material-name">{material.name}</h3>
                <p className="material-type">{material.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;

