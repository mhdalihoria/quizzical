import React from "react";
import {Link} from "react-router-dom"

function Intro() {

  return (
    <div className="intro-container">
      <h1 className="intro-title"> Quizzical </h1>
      <h6 className="intro-description">Challenge your knowledge</h6>
      <div className="intro-btn-container">
        <Link to="/settings"><button className="intro-btn settings">Settings</button></Link>
        <Link to="/quiz"><button className="intro-btn quiz">Quiz</button></Link>
      </div>
    </div>
  );
}

export default Intro;
