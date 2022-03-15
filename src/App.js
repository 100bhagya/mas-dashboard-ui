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
import RecordSummary from "./Pages/RecordSummary";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="techarticles" element={<TechArticles />} />
          <Route path="wordofday" element={<WordOfDay />} />
          <Route
            exact
            path="summarywriting"
            element={<SummaryWritingContent />}
          />
          <Route path="recordsummary" element={<RecordSummary />} />
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
          <Route path="signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
