import "./App.css";
import WordOfDay from "./Pages/WordOfDay";
import LandingPage from "./Pages/LandingPage";
import TechArticles from "./Pages/TechArticles";
import SummaryWritingContent from "./Pages/SummaryWritingContent";
import GroupDiscussion from "./Pages/GroupDiscussion";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Quizes from "./Pages/Quizes";
import Quant from "./Pages/Quant";
import LRandDI from "./Pages/LRandDI";
import Verbal from "./Pages/Verbal";
import MainMenu from "./Pages/MainMenu";
// import GroupDiscussion from "./Pages/GroupDiscussion";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigate to="/mainmenu"/>} />
          <Route  path="/mainmenu" element ={ <MainMenu/>}>
           <Route path="" element ={<LandingPage />} />
           <Route path="techarticles" element ={<TechArticles />} />
           <Route path="wordofday" element ={<WordOfDay />} />
          <Route
            exact
            path="summarywriting"
            element={<SummaryWritingContent />}
            />
          <Route path="techarticles" element={<TechArticles />} />
          <Route path="groupdiscussion" element={<GroupDiscussion />} />
          <Route path="quizes" element={<Quizes />} />
          <Route path="quant" element={<Quant />} />
          <Route path="lrdi" element={<LRandDI />} />
          <Route path="verbal" element={<Verbal />} />
          <Route path="GroupDiscussion" element={<GroupDiscussion />}/>
            </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
