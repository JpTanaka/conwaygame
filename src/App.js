import React, { useState } from "react";
import "./App.css";
import { Board } from "./Components/Board/Board";

const HORIZONTAL_SQUARES = 40;
const VERTICAL_SQUARES = 30;

export const App = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [board, setBoard] = useState(
    Array(VERTICAL_SQUARES)
      .fill()
      .map(() => Array(HORIZONTAL_SQUARES).fill(0))
  );
  return (
    <div className="container">
      <div className="title">Conway's Game of Life</div>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <Board board={board} setBoard={setBoard} isRunning={isRunning} />
    </div>
  );
};
