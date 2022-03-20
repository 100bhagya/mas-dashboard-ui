import "./App.css";
import WordOfDay from "./Pages/WordOfDay";
import LandingPage from "./Pages/LandingPage";
import TechArticles from "./Pages/TechArticles";
import SummaryWritingContent from "./Pages/SummaryWritingContent";
import GroupDiscussion from "./Pages/GroupDiscussion";
import CaseStudy from "./Pages/CaseStudy";
import GuessEstimate from "./Pages/GuessEstimate";
import Puzzles from "./Pages/Puzzles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quizes from "./Pages/Quizes";
import Quant from "./Pages/Quant";
import LRandDI from "./Pages/LRandDI";
import Verbal from "./Pages/Verbal";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Record from "./Pages/Record";
import MLandPython from "./Pages/MLandPython";
import DataAnalysis from "./Pages/DataAnalysis";
import SQL from "./Pages/SQL";
import QuizDetail from "./Pages/QuizDetail";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="techarticles" element={<TechArticles />} />
          <Route path="wordofday" element={<WordOfDay />} />
          <Route path="summarywriting" element={<SummaryWritingContent />} />
          <Route path="videorecord" element={<Record />} />
          <Route path="groupdiscussion" element={<GroupDiscussion />} />
          <Route path="quizes" element={<Quizes />} />
          <Route path="quant" element={<Quant />} />
          <Route path="lrdi" element={<LRandDI />} />
          <Route path="verbal" element={<Verbal />} />
          <Route path="casestudy" element={<CaseStudy />} />
          <Route path="guessestimate" element={<GuessEstimate />} />
          <Route path="puzzles" element={<Puzzles />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="mlandpython" element={<MLandPython />} />
          <Route path="dataanalysis" element={<DataAnalysis />} />
          <Route path="sql" element={<SQL />} />
          <Route path="quizdetail" element={<QuizDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
