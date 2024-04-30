import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from './firebase'; // Assuming this import is correct
import './SignupPage.css';
import { useNavigate } from 'react-router-dom/dist';  
import Navbar1 from './navbar1';


const SignupPage = ({ history }) => { // Receive history object as props
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const navigate = useNavigate(); // Use useNavigate() hook to navigate to different pages
  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await createUserWithEmailAndPassword(email, password);
      setSignupSuccess(true);
      // Redirect to login page after successful signup
      navigate('/login'); // Use navigate() function to redirect to login page
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <Navbar1 />
      <div className="signup-page-container">
        <div className="signup-form-container">
          <h2 className="heading">Signup</h2>
          <form className="signup-form" onSubmit={handleSignup}>
            <div className="form-group">
              <label htmlFor="email"><b>Email:</b></label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="password"><b>Password:</b></label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword"><b>Confirm Password:</b></label>
              <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your password" />
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
