import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import HomeScreen from './HomeScreen'; // Import HomeScreen or other components


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/homescreen" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;