import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import Navbar2 from './Navbar2';
import { forgotPassword } from './firebase';
import { Link } from 'react-router-dom';


const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword(email); // Call the forgotPassword function with the email value
      console.log('Password reset email sent successfully!'); // Show a success message
      alert('Password reset email sent successfully!'); // Show a success message
      navigate('/login'); 
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className='body'>
      <Navbar2 />
      <div className="logo-container">
        {/* Truck Ventures logo */}
      </div>
      <div className="login-page-container">
        <div className="login-form-container">
          <h2 className='heading'>Forgot Password</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email"><b>Email:</b></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder='Enter your email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update the email state
              />
            </div>
            <button className="login-button" type="submit"><b>Reset Password</b></button>
          </form>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <span style={{ fontSize: '16px' }}>Remember your password? </span>
            <Link to='/login' onClick={handleLoginClick}><b>Login</b></Link>
          </div>
        </div>
        <div className="logo-container1">
          {/* Optional logo container */}
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
