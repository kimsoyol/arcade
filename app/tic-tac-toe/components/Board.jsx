"use client";

import { useState, useEffect } from "react";
import styles from "./board.module.css";

function Square({ value, onSquareClick, st }) {
  return (
    <button
      className={`${styles.square} font-medium text-7xl ${st}`}
      onClick={onSquareClick}
    >
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
      <div className={styles.board}>
        <div className="board-row">
          <Square
            st={styles.bottom_right}
            value={squares[0]}
            onSquareClick={() => handleClick(0)}
          />
          <Square
            st={styles.bottom_right}
            value={squares[1]}
            onSquareClick={() => handleClick(1)}
          />
          <Square
            st={styles.bottom}
            value={squares[2]}
            onSquareClick={() => handleClick(2)}
          />
        </div>
        <div className="board-row">
          <Square
            st={styles.bottom_right}
            value={squares[3]}
            onSquareClick={() => handleClick(3)}
          />
          <Square
            st={styles.bottom_right}
            value={squares[4]}
            onSquareClick={() => handleClick(4)}
          />
          <Square
            st={styles.bottom}
            value={squares[5]}
            onSquareClick={() => handleClick(5)}
          />
        </div>
        <div className="board-row">
          <Square
            st={styles.right}
            value={squares[6]}
            onSquareClick={() => handleClick(6)}
          />
          <Square
            st={styles.right}
            value={squares[7]}
            onSquareClick={() => handleClick(7)}
          />
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
