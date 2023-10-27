// VariablesPage.js
import React from 'react';

function SupplementaryDocs() {
  return (
    <div className="supplementary-docs">
      <header>
        <div className="top-left">
          <button>Home</button>
        </div>
        <div className="top-center">
          <h1>Variables</h1>
        </div>
        <div className="top-right">
          <p>Hello User</p>                         // Hardcode the user here.    
          <button>Return to Lesson</button>
        </div>
      </header>
      <main>
        <div className="text-section">
          <p>Here is some text about variables.</p>
        </div>
        <div className="image-section">
          <img
            src="image.jpeg"                        // Put image URL here!
            alt="Variable Example"
          />
        </div>
      </main>
    </div>
  );
}

export default SupplementaryDocs;