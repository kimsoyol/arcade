import { useState, useEffect } from "react";
import "./board.css";
function Square({ value, onSquareClick,id }) {
  return (
    <button className="square" onClick={onSquareClick} id={id}>
      {value}
    </button>
  );
}

function Board() {
  const [xIsNext, setIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [gameOver, setGameOver] = useState(false);


  useEffect(() => {
    if (calculateWinner(squares)) {
      setGameOver(true);
    }
  }, [squares]);
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";

    setSquares(nextSquares);
    setIsNext(!xIsNext);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;

  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setIsNext(true);
    setGameOver(false);
  };

  return (
    <>
        <p className="text-center py-3">{status}</p>
      <div className="board">


        <div className="board-row">
          <Square id="s1" value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square id="s2" value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square id="s3" value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square id='s4' value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square id="s5" value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square id="s6" value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square id="s7" value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square id="s8" value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      {gameOver && (
          <div className="text-center pt-3">
            <button onClick={handleRestart}>Restart</button>
          </div>
      )}

    </>
  );
}

export default Board;
