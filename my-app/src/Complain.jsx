import React, { useState } from 'react';
import './Complain.css'; // Import CSS styles for Complain page
import Navbar from './Navbar';
import emailjs from 'emailjs-com'; // Import EmailJS
import { auth } from './firebase'; // Import the Firebase auth object

const Complain = ({onLogout}) => {
  const user = auth.currentUser;
 const [name, setName] = useState('');
 const [email, setEmail] = useState(user.email);
 const [complaint, setComplaint] = useState('');

 const handleSubmit = async (e) => {
  console.log(email)
    e.preventDefault();
    const templateParams = {
      from_name: name,
      from_email: email,
      message: complaint,
      to_email: 'nnm22ad043@nmamit.in' // Replace with your email
    };
    
    try {
      await emailjs.send('service_oopx3bt', 'template_jsvvj46', templateParams, 'X0_UChe6IQNESorR5');
      console.log('Email sent successfully');
      setName('');
      setEmail('');
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
