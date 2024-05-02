import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; // Import Home component
import LoginPage from './LoginPage'; // Import LoginPage component
import ForgotPasswordPage from './ForgotPasswordPage'; // Import ForgotPasswordPage component
import SignupPage from './SignupPage'; // Import SignupPage component
import Schedule from './Schedule';
import Complain from './Complain';
import Info from './info';
import MapPage from './MapPage';
import Scheduler1 from './Scheduler1';
import Cookies from 'js-cookie';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedIn = Cookies.get('loggedIn');
    if (isLoggedIn) {
      setLoggedIn(true);
    }
    console.log('Is logged in:', isLoggedIn);
  }, []);

  const handleLogin = () => {
    Cookies.set('loggedIn', true);
    console.log('logged in:', loggedIn); 
    setLoggedIn(true);
    console.log('logged in:', loggedIn);
  };

  const handleLogout = () => {
    Cookies.remove('loggedIn');
    console.log('logged out:', loggedIn); 
    setLoggedIn(false);
    console.log('logged out:', loggedIn);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {!loggedIn ? (
          <>
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/scheduler" element={<Scheduler1 />} />
          </>
        ) : (
          <>
            <Route path="/schedule" element={<Schedule onLogout={handleLogout} />} />
            <Route path="/complain" element={<Complain onLogout={handleLogout} />} />
            <Route path="/info" element={<Info onLogout={handleLogout} />} />
            <Route path="/map" element={<MapPage onLogout={handleLogout} />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
