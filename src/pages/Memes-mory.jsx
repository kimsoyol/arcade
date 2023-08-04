import Cards from "../components/Memes-mory/Cards.jsx";
import { useState } from "react";
import ChooseLevel from "../components/Memes-mory/startGame.jsx";

const Memesmory = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [lose, setLose] = useState(false);
  const [win, setWin] = useState();
  const [difficultyLevel, setDifficultyLevel] = useState(null);

  const [clickedCards, setClickedCards] = useState([]);
  const handleRestart = () => {
    setLose(false);
    console.log("rest");
  };
  const handleClick = (cardId) => {
    if (clickedCards.includes(cardId)) {
      setClickedCards([]);
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
      setLose(true);
    } else {
      setScore(score + 1);
      setClickedCards([...clickedCards, cardId]);
    }
  };

  const handleDifferentLvl = () => {
    setLose(false)
    setDifficultyLevel(null)
  }

  const handleLevel = (lvl) => {
    setDifficultyLevel(lvl);
  };

  return (
    <div>
      <div className="text-center">
        <div className="pe-2 score">Current Score: {score}</div>
        <div className="score">Best Score: {bestScore}</div>
      </div>
      {!difficultyLevel && <ChooseLevel handleLevel={handleLevel} />}
      {lose && (
        <div  className="text-4xl text-center pt-6">
          <p>You lose</p>
          <p className="pt-2" onClick={handleRestart}>Play again?</p>
          <p className="pt-2" onClick={handleDifferentLvl} >Choose difficulty?</p>
        </div>
      )}
      {!lose && difficultyLevel && (
        <Cards
          handleClick={handleClick}
          clickedCards={clickedCards}
          difficultyLevel={difficultyLevel}
        />
      )}
    </div>
  );
};

export default Memesmory;
