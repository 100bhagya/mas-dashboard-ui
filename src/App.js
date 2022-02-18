import "./App.css";
import WordOfDay from "./Pages/WordOfDay";
import LandingPage from "./Pages/LandingPage";
import TechArticles from "./Pages/TechArticles";
import SummaryWritingContent from "./Pages/SummaryWritingContent";
import GroupDiscussion from "./Pages/GroupDiscussion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quizes from "./Pages/Quizes";
import Quant from "./Pages/Quant";
import LRandDI from "./Pages/LRandDI";
import Verbal from "./Pages/Verbal";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/wordofday" element={<WordOfDay />} />
          <Route
            exact
            path="/summarywriting"
            element={<SummaryWritingContent />}
          />
          <Route exact path="/techarticles" element={<TechArticles />} />
          <Route exact path="/groupdiscussion" element={<GroupDiscussion />} />
          <Route exact path="/quizes" element={<Quizes />} />
          <Route exact path="/quant" element={<Quant />} />
          <Route exact path="/lr&di" element={<LRandDI />} />
          <Route exact path="/verbal" element={<Verbal />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
