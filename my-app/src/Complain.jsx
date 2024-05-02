import React, { useState, useEffect } from 'react';
import './Complain.css'; 
import Navbar from './Navbar';
import emailjs from 'emailjs-com'; 
import { auth } from './firebase'; 

const Complain = ({ onLogout }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [complaint, setComplaint] = useState('');
  const [loading, setLoading] = useState(true); // Flag to indicate whether authentication state is loading

  useEffect(() => {
    // Listen for changes in authentication state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // If user is authenticated, update email state
        setEmail(user.email);
      }
      setLoading(false); // Update loading state once authentication state is resolved
    });

    return () => unsubscribe(); // Cleanup function to unsubscribe from the listener
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

  // Render loading state until authentication state is resolved
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar onLoggingout={onLogout} />
      <div className="complain-container">
        <h2 className='heading'>Complaint Form</h2>
        <form className="complain-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name"><b>Name:</b></label>
            <input type="text" id="name" name="name" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} required />
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
