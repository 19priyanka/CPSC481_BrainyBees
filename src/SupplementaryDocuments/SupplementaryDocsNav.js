import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'; // Import Material-UI Button
import './SupplementaryDocsNav.css'; // Import your CSS file

function SupplementaryDocsNav(props) {
  const navigate = useNavigate();

  return (
    <>
      <h1 style={{ color: 'blue' }}>Supplementary Documents</h1>
      <div className="button-container">
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/supplementary-docs/variables')}
          style={{ width: '200px' }} // Set the button width as desired
        >
          Variables
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/supplementary-docs/conditional-statements')}
          style={{ width: '200px' }} // Set the button width as desired
        >
          Conditional Statements
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/supplementary-docs/loops')}
          style={{ width: '200px' }} // Set the button width as desired
        >
          Loops
        </Button>
        
      </div>
    </>
  );
}

export default SupplementaryDocsNav;