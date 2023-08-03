import Cards from "../components/Memes-mory/Cards.jsx";
import { useState } from "react";

const Memesmory = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [lose, setLose] = useState(false);
  const [clickedCards, setClickedCards] = useState([]);
  const handleRestart = () => {
    setLose(false);
    console.log("rest");
  };
  const handleClick = (cardId) => {
    if (clickedCards.includes(cardId)) {
      setClickedCards([]);
      setScore(0);
      setBestScore(bestScore + score);
      setLose(true);
    } else {
      setScore(score + 1);
      setClickedCards([...clickedCards, cardId]);
    }
  };

  return (
    <div>
      <div className="text-center">
        <span className="pe-2">Current Score: {score}</span>
        <span>Best Score: {bestScore}</span>
      </div>
      {lose && <div onClick={handleRestart}>Restart the game?</div>}
      {!lose && <Cards handleClick={handleClick} clickedCards={clickedCards} />}
    </div>
  );
};

export default Memesmory;
