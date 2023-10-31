import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import HomeScreen from "./HomeScreen"; // Import HomeScreen or other components
import QuizLanding from "./Quiz/QuizLanding";
import QuizLoops from "./Quiz/QuizLoops";
import QuizPage from "./Quiz/QuizPage";
import Results from "./Quiz/Results";
import PracticeProblemNavigation from "./PracticeProblems/PracticeProblemsNavigation";
import LoopPracticeProblems from "./PracticeProblems/LoopPracticeProblems";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/homescreen" element={<HomeScreen />} />
        <Route path="/quizlanding" element={<QuizLanding />} />
        <Route path="/quizloops" element={<QuizLoops />} />
        <Route path="/quizpage" element={<QuizPage />} />
        <Route path="/quizresults" element={<Results />} />
        <Route path="/PracticeProblem" element={<PracticeProblemNavigation />} />
        <Route path="/PracticeProblem/Loops" element={<LoopPracticeProblems />} />
      </Routes>
    </Router>
  );
}

export default App;
