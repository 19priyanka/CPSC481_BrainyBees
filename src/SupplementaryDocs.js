import React from 'react';
import ConditionalImage from './ConditionalStatements.png';

function SupplementaryDocs() {
  return (
    <div className="supplementary-docs">
      <header>
        <div className="top-left">
          <button>Home</button>
        </div>
        <div className="top-center">
          <h1 style={{ color: 'blue' }}>Supplementary Documents</h1>
        </div>
        <div className="top-right">
          <p>Hello User</p>
          <button>Return to Lesson</button>
        </div>
      </header>
      <main>
        <div className="text-section">
          <p>Here is some text about conditionals.</p>
        </div>
        <div className="image-section">
          <img
            src={ConditionalImage} // Use the imported image variable
            alt="ConditionalStatements"
          />
        </div>
      </main>
    </div>
  );
}

export default SupplementaryDocs;