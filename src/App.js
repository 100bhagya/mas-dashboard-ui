import "./App.css";
import WordOfDay from "./Pages/WordOfDay";
import LandingPage from "./Pages/LandingPage";
import SummaryWritingContent from "./Pages/SummaryWritingContent";
import GroupDiscussion from "./Pages/GroupDiscussion";
import CaseStudy from "./Pages/CaseStudy";
import GuessEstimate from "./Pages/GuessEstimate";
import Puzzles from "./Pages/Puzzles";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Quizes from "./Pages/Quizes";
import Quant from "./Pages/Quant";
import LRandDI from "./Pages/LRandDI";
import Verbal from "./Pages/Verbal";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Record from "./Pages/Record";
import ForgotPassword from "./Pages/ForgotPassword";
import MLandPython from "./Pages/MLandPython";
import DataAnalysis from "./Pages/DataAnalysis";
import ResetPassword from "./Pages/ResetPassword";
import SQL from "./Pages/SQL";
import QuizDetail from "./Pages/QuizDetail";
import ProtectedRoutes from "./Components/PrivateRoutes";
import RoadMap from "./Pages/RoadMap.js";
import Settings from "./Pages/Settings";
import { useSelector } from "react-redux";
import NonTechArticles from "./Pages/NonTechArticles";
function App() {
  const user = useSelector((state) => state.user);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="signin"
            element={user.isAuthenticated ? <Navigate to="/" /> : <Signin />}
          />
          <Route
            path="signup"
            element={user.isAuthenticated ? <Navigate to="/" /> : <Signup />}
          />
          <Route
            path="forgotPassword"
            element={
              user.isAuthenticated ? <Navigate to="/" /> : <ForgotPassword />
            }
          />
          <Route path="resetPassword/:token" element={<ResetPassword />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="non-techarticles" element={<NonTechArticles />} />
            <Route path="wordofday" element={<WordOfDay />} />
            <Route path="summarywriting" element={<SummaryWritingContent />} />
            <Route path="videorecord" element={<Record />} />
            <Route path="groupdiscussion" element={<GroupDiscussion />} />
            <Route path="quizes" element={<Quizes />} />
            <Route path="quant" element={<Quant />} />
            <Route path="lrdi" element={<LRandDI />} />
            <Route path="verbal" element={<Verbal />} />
            <Route path="roadmap" element={<RoadMap />} />
            <Route path="casestudy" element={<CaseStudy />} />
            <Route path="guessestimate" element={<GuessEstimate />} />
            <Route path="puzzles" element={<Puzzles />} />
            <Route path="settings" element={<Settings />} />
            <Route path="mlandpython" element={<MLandPython />} />
            <Route path="dataanalysis" element={<DataAnalysis />} />
            <Route path="sql" element={<SQL />} />
            <Route path="quizdetail/:test" element={<QuizDetail />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
