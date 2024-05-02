import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from './firebase'; // Assuming this import is correct
import './SignupPage.css';
import { useNavigate } from 'react-router-dom/dist';  
import Navbar1 from './navbar1';

const SignupPage = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [error, setError] = useState(null);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const navigate = useNavigate(); 

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(email, password, name, place);
      setSignupSuccess(true);
     
      navigate('/login');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='body'>
      <Navbar1 />
      <div className="signup-page-container">
        <div className="signup-form-container">
          <h2 className="heading">Signup</h2>
          <form className="signup-form" onSubmit={handleSignup}>
            <div className="form-group">
              <label htmlFor="name"><b>Name:</b></label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="place"><b>Place:</b></label>
              <input type="text" id="place" value={place} onChange={(e) => setPlace(e.target.value)} placeholder="Enter your place" />
            </div>
            <div className="form-group">
              <label htmlFor="email"><b>Email:</b></label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="password"><b>Password:</b></label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
            </div>
            <button className="signup-button" type="submit"><b>Signup</b></button>
          </form>
          {error && <p className="error-message">{error}</p>}
          {signupSuccess && (
            <p className="success-message">Signup successful! <Link to="/login">Login</Link></p>
          )}
          {!signupSuccess && (
            <p className="login-link">Already have an account? <Link to="/login">Log in</Link></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
