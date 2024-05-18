import React, { useState, useEffect } from 'react';
import './Complain.css'; 
import Navbar from './Navbar';
import emailjs from 'emailjs-com'; 
import { auth } from './firebase'; 
import { getDatabase, ref, onValue } from "firebase/database"; // Import Firebase Realtime Database functions

const Complain = ({ onLogout }) => {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [complaint, setComplaint] = useState('');
 const [loading, setLoading] = useState(true); 

 useEffect(() => {
    const db = getDatabase();
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      if (user) {
       
        setEmail(user.email);
        
        const userRef = ref(db, `users/${user.uid}`); 
        const unsubscribeDb = onValue(userRef, (snapshot) => {
          const userData = snapshot.val();
          if (userData && userData.name) {
            setName(userData.name); 
          }
        });
        console.log(email,name);
        return () => unsubscribeDb();
      }
      setLoading(false); 
    });

    return () => unsubscribeAuth(); 
 }, []);
  console.log(email )

  const handleSubmit = async (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: name,
      from_email: email,
      message: complaint,
      to_email: 'nnm22ad043@nmamit.in' 
    };
    
    try {
      await emailjs.send('service_oopx3bt', 'template_jsvvj46', templateParams, 'X0_UChe6IQNESorR5');
      console.log('Email sent successfully');
      setName('');
      setComplaint('');
      alert('Your complaint has been submitted successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred while submitting your complaint. Please try again later.');
    }
  };

  return (
    <div>
      <Navbar onLoggingout={onLogout} />
      <div className="complain-container">
        <h2 className='heading'>Complaint Form</h2>
        <form className="complain-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name"><b>Name:</b></label>
            <input type="text" id="name" name="name" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} required   readOnly={loading} // Make the input field read-only while loading
    onPaste={(e) => e.preventDefault()} // Prevent pasting into the input field 
    />
          </div>
          <div className="form-group">
            <label htmlFor="complaint"><b>Complaint:</b></label>
            <textarea id="complaint" name="complaint" placeholder='Enter your complaint' value={complaint} onChange={(e) => setComplaint(e.target.value)} required />
          </div>
          <button className="submit-button" type="submit"><b>Submit</b></button>
        </form>
      </div>
    </div>
  );
};

export default Complain;
