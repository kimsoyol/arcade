import { useState } from "react";

function ChooseLevel({ handleLevel }) {
  return (
    <div>
      <div className="flex justify-center items-center pt-8">
        <button className="lvl-btn" onClick={() => handleLevel("easy")}>
          Easy
        </button>
        <button className="lvl-btn" onClick={() => handleLevel("medium")}>
          Medium
        </button>
        <button className="lvl-btn" onClick={() => handleLevel("hard")}>
          Hard
        </button>
      </div>
        <div className="flex justify-center pt-4">
      <img src="https://i.imgur.com/6VS23Ci.jpg" alt="" />
        </div>
    </div>
  );
}

export default ChooseLevel;
