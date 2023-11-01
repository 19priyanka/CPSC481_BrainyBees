import QuizLanding from "./Quiz/QuizLanding";
import QuizLoops from "./Quiz/QuizLoops";
import QuizPage from "./Quiz/QuizPage";
import Results from "./Quiz/Results";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import HomeScreen from './HomeScreen'; // Import HomeScreen or other components
import GamesNavigationConcept from './games/GamesNavigationConcept';
import LoopGames from './games/LoopGames';
import ForloopGame from './games/loopGames/ForloopGame';
import WhileLoopGame from './games/loopGames/WhileLoopGame';
import Navbar from './Navbar';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

function App() {
  return (
    <>
   
    
    <Router>
    <Navbar></Navbar>
      <Routes>
      <Route path="/homescreen" element={<HomeScreen />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/games" element={<GamesNavigationConcept />} />
      <Route path="/games/operators" element={<LoopGames />} />
      <Route path="/games/conditionals" element={<GamesNavigationConcept />} />
      <Route path="/games/loops" element={<LoopGames/>} />
      <Route path="/games/loops/forloopgame" element={<ForloopGame />} />
      <Route path="/games/loops/whileloopgame" element={<WhileLoopGame />} />
      <Route path="/quizlanding" element={<QuizLanding />} />
      <Route path="/quizloops" element={<QuizLoops />} />
      <Route path="/quizpage" element={<QuizPage />} />
      <Route path="/quizresults" element={<Results />} />
      <Route path = '/login' element={<LoginPage/>}></Route>
      <Route path = '/signup' element={<SignupPage/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
