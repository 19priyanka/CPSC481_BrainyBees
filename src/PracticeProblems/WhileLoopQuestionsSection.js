import React, { useState, useEffect }from 'react';
import machine from '../bee_icon/png/machine.png';
import spaceship from '../bee_icon/png/spaceship.png';
import superh from '../bee_icon/png/superh.png';
const QuizComponent = () => {
  const questions = [
    {
      id: 1,
      question: (
        <div>
          1. Can you count backward from 10 to 1? Imagine you're on a spaceship, and you need to countdown before it takes off!
          <br />
          Write a program or use a while loop to display the countdown. For example: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
        </div>
      ),
      correctAnswer: (
        <div>
          <p>Here's a simple C++ program using a while loop to count backward from 10 to 1:</p>
          <pre style={{ whiteSpace: 'pre-wrap' }}>
            {`
    int main() {
        // Initialize the counter
        int count = 10;
    
        // Use a while loop to count backward from 10 to 1
        while (count >= 1) {
            if (count > 1) {
                std::cout << ", "; // Add a comma if it's not the last number
            }
            count--; // Decrement the counter in each iteration
        }
        return 0;
    }`}
          </pre>
          Now the spaceship can take off!
        </div>
      ),
      image: spaceship,
    },
    
    {
      id: 2,
      question: (<div>
        2. Imagine you have a <strong>magical doubling machine</strong>, and you want to create a series of magical numbers that get bigger and bigger!
        <br/>
        You <strong>start with the number 1</strong>, put it into the machine, and out pops a new number. Each time you put a number in, the machine
        <br/>
        doubles it! Let's say your machine can handle numbers up to 16. Complete this while loop so that the machine <strong>stops at 16</strong> 
        <br/>
        <br/>
        <pre style={{ whiteSpace: 'pre-wrap' }}>
            {`
    int main() {
        int x = 1;
        while (_____) {
            x *= 2;
        }
        return 0;
    }`}
          </pre>
        If it goes over 16 the machine explodes. HELP THIS MAGICAL MACHINE NOT EXPLODE!
      </div>),
      correctAnswer:(<div>
            <br/>
            The missing part of the code was "x &lt;= 16"
            <br/>
            The magical doubling machine will stay safe and sound
      </div>),
      image: machine,
    },
    {
      id: 3,
      question: (<div>
        3. The following while loop counts all the existing superheroes in the MARVEL Universe
        <br/>
        How many MARVEL superheroes are there?
        <br/>
        <pre style={{ whiteSpace: 'pre-wrap' }}>
            {`

int main() {
    int count = 1;
    while (count <= 38) {
        count++;
    }
    return 0;
}`}
          </pre>
        <strong>HINT:</strong>  Don't try to remember them all, there is more then you think
        <br/>
        [a] There is 100000
        <br/>
        [b] There is 4
        <br/>
        [c] There is 38
        <br/>
        [d] There is 37
         </div>),
      correctAnswer: (<div><br/>There are 38 MARVEL superheroes, now try to name them all!</div>),
      image: superh,
    },

  ];

  // State to track expanded/collapsed state of each answer
  const [expandedAnswers, setExpandedAnswers] = useState({});

  // Function to handle toggle of answer accordion
  const toggleAnswer = (questionId) => {
    setExpandedAnswers((prevExpandedAnswers) => ({
      ...prevExpandedAnswers,
      [questionId]: !prevExpandedAnswers[questionId],
    }));
  };

  useEffect(() => {
    const username = sessionStorage.getItem('userName');
    localStorage.setItem("whileLoopsVisitedlessons"+username, "true");

  }, []);

  return (
    <div>
      {questions.map((question) => (
        <div key={question.id}>
          <div>
            <p style={{ fontSize: '20px' }}>
              {question.question}
            </p>
          </div>
          <div role="tablist">
            <div>
              <button
                type="button"
                style={{
                  backgroundColor: '#ffcc00', // Kid-friendly color
                  color: '#fff', // Text color
                  fontSize: '16px', // Adjust the font size as needed
                  padding: '10px 20px', // Adjust the padding as needed
                  width: '450px',
                  marginRight: '10px', // Add some spacing between buttons
                  ...(expandedAnswers[question.id] && {
                    backgroundColor: '#ff9900', // Kid-friendly color when expanded
                  }),
                }}
                onClick={() => toggleAnswer(question.id)}
              >
                {expandedAnswers[question.id] ? "▾" : "▸"} Answer
              </button>
              {expandedAnswers[question.id] && (
                <div>
                  {question.correctAnswer}
                  <br />
                  <img src={question.image} alt={`Image for ${question.correctAnswer}`} width="300" height="300" />
                </div>
              )}
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

export default QuizComponent;
