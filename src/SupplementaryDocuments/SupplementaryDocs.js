// SupplementaryDocs.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ForLoop from './ForLoop.png';
import './SupplementaryDocs.css';

function SupplementaryDocs() {
  const navigate = useNavigate();

  return (
    <div className="supplementary-docs">
      <header>
        <div className="top-center">
          <h1 style={{ color: 'black' }}>Supplementary Documents: For Loops</h1>
        </div>
      </header>
      <main className="text-image-container">
        <div className="image-section">
          <img src={ForLoop} alt="ForLoop" />
        </div>
        <div className="text-section">
          <p>A FOR LOOP asks us to do something a certian number of times. For example, I want to buy 3 balloons. 
            Instead of writing the same lines of code 3 times, I can write 1 loop and it does all the work for me!
            In this example, we start with 0 balloons. I then check how many I've bought. Since this is the very beginning, I haven't bought any yet.
            I go to the loop and buy one. Now I have 1 balloon. 
            The number of balloons I have has been INCREMENTED or increased by 1.
            Then I check again; how many balloons do I have?
            Since I want 3 balloons, but only have 1, I'm going to do the loop again and buy another balloon. My code INCREMENTS
            again so now I have 2 balloons. 2 is still not enough, so I'm going to do the loop again. Now that I've bought 
            another balloon, I have 3! Since I have 3 balloons now, the loop is done and I can do something else.
          </p>
        </div>
      </main>
      <div className="bottom-left">
        <Button variant="contained" onClick={() => navigate('/')}>
          Return to Lesson
        </Button>
      </div>
    </div>
  );
}

export default SupplementaryDocs;

