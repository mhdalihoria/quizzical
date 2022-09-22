// Packages Imports
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components Imports
import Intro from "./pages/Intro";
import Settings from "./pages/Settings";
import "./App.css";
import DefaultQuiz from "./pages/DefaultQuiz";
import CustomQuiz from "./pages/CustomQuiz";


function App() {
  return (
    <>
    <div className="decorative yellow"></div>
    <div className="decorative blue"></div>

    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/quiz" element={<DefaultQuiz />} />
        <Route path="/custom-quiz" element={<CustomQuiz />} />
      </Routes>
    </Router>
  </>
  )
}

export default App;
