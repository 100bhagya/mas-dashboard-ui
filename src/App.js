import "./App.css";
import Mainmenu from "./Pages/MainMenu";
import WordOfDay from "./Pages/WordOfDay";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Mainmenu />} />
          <Route exact path="/wordofday" element={<WordOfDay />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
