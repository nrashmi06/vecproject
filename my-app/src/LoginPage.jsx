import React, { useState } from 'react';
import { signInWithEmailAndPassword } from './firebase'; 
import './LoginPage.css';
import { Link , useNavigate} from 'react-router-dom'; 
import Navbar2 from './Navbar2';


const LoginPage = ({onLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false); 
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(email, password); 
      console.log('Logged in user:', userCredential.user);

    setLoggedIn(true);   
      
    } catch (error) {
      setError(error.message);
    }
  };

  const navigate = useNavigate(); 
  
  if (loggedIn) {
    console.log('next page : ',loggedIn);
    onLogin();
    navigate('/map'); 
  }

  return (
    <div className='body'>
      <Navbar2  />
      <div className="logo-container"></div>
      <div className="login-page-container">
        <div className="login-form-container">
   
          <h2 className="heading">Login</h2>
       
          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email"><b>Email:</b></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password"><b>Password:</b></label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button className="login-button" type="submit"><b>Login</b></button>
            <div className="forgot-password">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </form>
        </div>
        <div className="logo-container1"></div>
      </div>
    </div>
  );
};

export default LoginPage;
