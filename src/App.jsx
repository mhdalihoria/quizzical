// Packages Imports
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components Imports
import Intro from "./pages/Intro";
import Settings from "./pages/Settings";
import "./App.css";
import Quiz from "./pages/Quiz";


function App() {
  return (
    <>
    <div className="decorative yellow"></div>
    <div className="decorative blue"></div>

    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  </>
  )
}

export default App;
