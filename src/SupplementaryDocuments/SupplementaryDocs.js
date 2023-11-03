import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'; // Import Material-UI Button
import ConditionalImage from './ConditionalStatements.png';

function SupplementaryDocs() {
  const navigate = useNavigate();

  return (
    <div className="supplementary-docs">
      <header>
        <div className="top-center">
          <h1 style={{ color: 'blue' }}>Supplementary Documents</h1>
        </div>
        <div className="top-left">
          <Button
            variant="contained"
            onClick={() => navigate('/')}
          >
            Home
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate('/')}
          >
            Return to Lesson
          </Button>
        </div>
      </header>
      <main>
        <div className="text-section">
          <p>Conditionals help guide us down a path using questions to help us figure out what to do.</p>
        </div>
        <div className="image-section">
          <img src={ConditionalImage} alt="ConditionalStatements" />
        </div>
      </main>
    </div>
  );
}

export default SupplementaryDocs;


