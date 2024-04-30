import React, { useState } from 'react';
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

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
    console.log('logged in:', loggedIn);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    console.log('logged out:', loggedIn);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Render Home component for the root path */}
        {!loggedIn ? (
          <>
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} /> 
            <Route path="/forgot-password" element={<ForgotPasswordPage />} /> 
            <Route path="/signup" element={<SignupPage />} /> 
            <Route path="/scheduler" element={<Scheduler1 />} /> 
          </>
        ) : (
          <>
            <Route path="/schedule" element={<Schedule onLogout={handleLogout}/>} /> {/* Render Schedule component for /schedule path */}
            <Route path="/complain" element={<Complain onLogout={handleLogout} />} /> {/* Render Complain component for /complain path */}
            <Route path="/info" element={<Info onLogout={handleLogout} />} /> {/* Render Info component for /info path */}
            <Route path="/map" element={<MapPage onLogout={handleLogout} />} /> {/* Render MapPage component for /map path */}
          </>
        )}
       
      </Routes>
    </Router>
  );
}

export default App;
