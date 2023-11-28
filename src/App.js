import QuizLanding from "./Quiz/QuizLanding";
import QuizLoops from "./Quiz/QuizLoops";
import QuizPage from "./Quiz/QuizPage";
import Results from "./Quiz/Results";
import PracticeProblemNavigation from "./PracticeProblems/PracticeProblemsNavigation";
import LoopPracticeProblems from "./PracticeProblems/LoopPracticeProblems";
import WhileLoopQuestions from "./PracticeProblems/WhileLoopQuestions";
import WhileLoopSolutions from "./PracticeProblems/WhileLoopSolutions";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import HomeScreen from "./HomeScreen/HomeScreen"; // Import HomeScreen or other components
import GamesNavigationConcept from "./games/GamesNavigationConcept";
import LoopGames from "./games/LoopGames";
import ForloopGame from "./games/loopGames/ForloopGame";
import WhileLoopGame from "./games/loopGames/WhileLoopGame";
import Navbar from "./Navbar";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

import LessonsLanding from "./Lessons/LessonsLanding";
import LessonsLoops from "./Lessons/LessonsLoops";
import LessonsLoopsForLoop from "./Lessons/LessonLoopsForLoop";
import LessonsLoopsWhileLoop from "./Lessons/LessonLoopsWhileLoop";
import UserProfile from "./Profile";
import SideBar from "./SideBar";

function App() {
  return (
    <>
   
    <Router>
    <Navbar></Navbar>
    <SideBar></SideBar>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/homescreen" element={<HomeScreen />} />
          <Route path="/Quizzes" element={<QuizLanding />} />
          <Route path="/Quizzes/Loops" element={<QuizLoops />} />
          <Route path="/Quizzes/Loops/ForLoopQuiz" element={<QuizPage />} />
          <Route path="/Quizzes/Loops/ForLoopQuiz/Results" element={<Results />} />
          <Route
            path="/PracticeProblems"
            element={<PracticeProblemNavigation />}
          />
          <Route
            path="/PracticeProblems/Loops"
            element={<LoopPracticeProblems />}
          />
          <Route
            path="/PracticeProblems/Loops/WhileLoop"
            element={<WhileLoopQuestions />}
          />
          <Route
            path="/PracticeProblems/Loops/WhileLoop/WhileLoopSolutions"
            element={<WhileLoopSolutions />}
          />

          <Route path="/games" element={<GamesNavigationConcept />} />
          <Route path="/games/operators" element={<LoopGames />} />
          <Route
            path="/games/conditionals"
            element={<GamesNavigationConcept />}
          />
          <Route path="/games/loops" element={<LoopGames />} />
          <Route path="/games/loops/forloopgame" element={<ForloopGame />} />
          <Route
            path="/games/loops/whileloopgame"
            element={<WhileLoopGame />}
          />
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/profile" element={<UserProfile />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
  

      <Route path="/Lessons" element={<LessonsLanding />} />
      <Route path="/Lessons/Loops" element={<LessonsLoops />} />
      <Route path="/Lessons/Loops/ForLoop" element={<LessonsLoopsForLoop />} />
      <Route path="/Lessons/Loops/WhileLoop" element={<LessonsLoopsWhileLoop />} />



      </Routes>
      </Router>
    </>
  );
}

export default App;
