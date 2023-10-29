import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import HomeScreen from "./HomeScreen/HomeScreen"; // Import HomeScreen or other components
import QuizLanding from "./Quiz/QuizLanding";
import QuizLoops from "./Quiz/QuizLoops";
import QuizPage from "./Quiz/QuizPage";
import Results from "./Quiz/Results";

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
      </Routes>
    </Router>
  );
}

export default App;
