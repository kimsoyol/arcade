import { useState } from "react";

function ChooseLevel({ handleLevel }) {
  return (
    <div className="flex justify-center items-center pt-14">
      <button
        className="lvl-btn"
        onClick={() => handleLevel("easy")}
      >
        Easy
      </button>
      <button
        className="lvl-btn"
        onClick={() => handleLevel("medium")}
      >
        Medium
      </button>
      <button
          className="lvl-btn"
         onClick={() => handleLevel("hard")}
      >
        Hard
      </button>
    </div>
  );
}

export default ChooseLevel;
