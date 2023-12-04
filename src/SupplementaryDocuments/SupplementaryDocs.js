// SupplementaryDocs.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ForLoop from './ForLoop.png';
import ForLoop2 from './ForLoop2.jpg';
import './SupplementaryDocs.css';
import ShowPath from '../Showpath.jsx';

function SupplementaryDocs() {
  const navigate = useNavigate();

  return (
    <div className="supplementary-docs">
      <header>
        <div className="top-left">
          <ShowPath className="show-path" />
        </div>
      </header>
      <main className="text-image-container">
        <h1 style={{ color: 'black', textAlign: 'left' }}>Supplementary Documents: For Loops</h1>
        <div className="content">
          <div className="image-section">
            <img src={ForLoop} alt="ForLoop" />
            <img src={ForLoop2} alt="ForLoop2" />
          </div>
          <div className="text-section">
            <ol>
              <li>
                <strong>Keyword:</strong> <code>for</code>
                <p>This tells the computer what kind of loop we want. There are many different ones to choose from.</p>
              </li>
              <li>
                <strong>Control Variable:</strong> <code>counter</code>
                <p>This makes a variable called 'counter' so we can keep track of how many balloons we want to buy.</p>
              </li>
              <li>
                <strong>Initial Value:</strong> 1
                <p>How many balloons do I have before I do the loop</p>
              </li>
              <li>
                <strong>Loop Condition:</strong> <code>counter &lt;= 5</code>
                <ul>
                  <li>This tells me how many times the loop is going to run.</li>
                  <li><code>&lt;=</code> means "less than or equal to". We want the loop to run as long as the number is less than or equal to 5.</li>
                </ul>
              </li>
              <li>
                <strong>Increment counter variable:</strong> <code>counter++</code>
                <ul>
                  <li>This adds 1 to the counter each time the loop runs.</li>
                  <li>The <code>++</code> part is what makes the counter change.</li>
                  <li>We could also DECREMENT (make the counter go down instead of up) by using <code>counter--</code> too!</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </main>
      <div className="bottom-left">
      </div>
    </div>
  );
}
export default SupplementaryDocs;