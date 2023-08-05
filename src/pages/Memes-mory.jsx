import Cards from "../components/Memes-mory/Cards.jsx";
import { useState, useEffect } from "react";
import ChooseLevel from "../components/Memes-mory/startGame.jsx";

const Memesmory = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [lose, setLose] = useState(false);
  const [win, setWin] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [difficultyLevel, setDifficultyLevel] = useState(null);

  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    // set win on difficulty and point
    if (difficultyLevel === "easy" && score === 6) {
      setWin(true);
      setGameOver(true);
    } else if (difficultyLevel === "medium" && score === 12) {
      setWin(true);
      setGameOver(true);
    } else if (difficultyLevel === "hard" && score === 18) {
      setWin(true);
      setGameOver(true);
    }
    // set best score
    if (score > bestScore) {
      setBestScore(score);
    }
  }, [score, difficultyLevel]);


  // restart when lose
  const handleRestart = () => {
    setLose(false);
    setWin(false);
    setGameOver(false);
    console.log("rest");
  };
  const handleClick = (cardId) => {
    // check which card being clicked
    if (clickedCards.includes(cardId)) {
      setClickedCards([]);
      setScore(0);
      setLose(true);
      setGameOver(true);
    } else {
      // if user click on different cards
      setScore(score + 1);
      setClickedCards([...clickedCards, cardId]);
    }
  };

  const handleDifferentLvl = () => {
    setGameOver(false);
    setLose(false);
    setWin(false);
    setDifficultyLevel(null);
  };

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
      {gameOver && (
        <div className="flex flex-col justify-center items-center text-4xl pt-6">
          {lose && <div>
            <p className='text-center'>You lose</p>
            <div>
              <img src="src/assets/memes/lose.jpg" alt="lose img" className="w-80 pt-3"/>
            </div>
          </div>}
          {win &&
              <div>
                <p className='text-center'>You Win</p>
                <div>
                  <div className="flex justify-center">

                    <iframe width="360" height="202" src="https://imgflip.com/embed/7utc7m"></iframe>
                  </div>
                </div>
          </div>}
          <p className="pt-2" onClick={handleRestart}>
            Play again?
          </p>
          <p className="pt-2" onClick={handleDifferentLvl}>
            Choose difficulty?
          </p>
        </div>
      )}
      {!gameOver && difficultyLevel && (
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
