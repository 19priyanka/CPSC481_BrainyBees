import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import HomeScreen from './HomeScreen';
import SupplementaryDocsNav from './SupplementaryDocuments/SupplementaryDocsNav';
import SupplementaryDocs from './SupplementaryDocuments/SupplementaryDocs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/homescreen" element={<HomeScreen />} />
        <Route path="/supplementary-docs" element={<SupplementaryDocsNav />} /> //Carlene added this. 
        <Route path="/supplementary-docs/:docType" element={<SupplementaryDocs />} /> //Carlene added this
      </Routes>
    </Router>
  );
}

export default App;

