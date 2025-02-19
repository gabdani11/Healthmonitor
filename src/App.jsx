import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Nutrition from './Components/Nutrition';
import HeartMonitor from './Components/HeartMonitor';
import Footer from './Components/Footer';


const App = () => {
  return (
    <Router> 
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/heartrate" element={<HeartMonitor />} />
        <Route path="/hydration" element={<div>Hydration Reminders Page</div>} />
        <Route path="/visualization" element={<div>Data Visualization Page</div>} />
        <Route path="/calendar" element={<div>Calendar Integration Page</div>} />
        
      </Routes>
    </Router>
  );
};

export default App;
