import * as React from 'react';
import { useNavigate } from 'react-router-dom';

function SupplementaryDocsNav(props) {
  const navigate = useNavigate();

  return (
    <>
      <h1 style={{ color: 'blue' }}>Supplementary Documents</h1>
      <button onClick={() => navigate('/supplementary-docs/variables')}>Variables</button>
      <button onClick={() => navigate('/supplementary-docs/conditional-statements')}>Conditional Statements</button>
      <button onClick={() => navigate('/supplementary-docs/loops')}>Loops</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
}

export default SupplementaryDocsNav;
