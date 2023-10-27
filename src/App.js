import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import HomeScreen from './HomeScreen'; // Import HomeScreen or other components
import SupplementaryDocs from './supplementary-docs'; // Import your custom component(s)


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/homescreen" element={<HomeScreen />} />
      //Carlene added this. Should take you to the Sup Docs Nav page where you can select the different types of docs.
      <Route path="/supplementary-docs" element={<SupplementaryDocsNav />} />
      //Carlene added this too. Should take you from the SupDocNav page to the actual doc page.
      <Route path="/variables" element={<SupplementaryDocs />} />

      </Routes>
    </Router>
  );
}

export default App;