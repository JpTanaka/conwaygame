import React, { useState } from "react";
import "./App.css";
import { Board } from "./Components/Board/Board";
import { Pause, PlayArrow } from "@mui/icons-material";

const HORIZONTAL_SQUARES = 40;
const VERTICAL_SQUARES = 30;
const addWalker = (
  board,
  x = HORIZONTAL_SQUARES / 2 - 1,
  y = VERTICAL_SQUARES / 2 - 1
) => {
  const newBoard = [...board];
  newBoard[y][x] = 1;
  newBoard[y][x + 1] = 1;
  newBoard[y][x + 2] = 1;
  newBoard[y - 1][x] = 1;
  newBoard[y - 2][x + 1] = 1;
  return newBoard;
};
export const App = () => {
  const [isRunning, setIsRunning] = useState(false);

  const emptyBoard = Array(VERTICAL_SQUARES)
    .fill()
    .map(() => Array(HORIZONTAL_SQUARES).fill(0));

  const startBoard = addWalker(emptyBoard);

  const [board, setBoard] = useState(startBoard);

  return (
    <div className="container">
      <div className="content-container">
        <div className="title">Conway's Game of Life</div>
        <Board board={board} setBoard={setBoard} isRunning={isRunning} />
        <div className="rules">
          <div className="rules-title"> Rules </div>
          <ul className="rules-list">
            <li>
              Birth: A dead cell with exactly three live neighbors becomes alive
              in the next generation. This simulates reproduction due to
              favorable conditions.
            </li>
            <li>
              Survival: A live cell with two or three live neighbors remains
              alive in the next generation. This simulates an environment where
              cells survive due to balanced living conditions.
            </li>
            <li>
              Death: A live cell with fewer than two live neighbors
              (underpopulation) or more than three live neighbors
              (overpopulation) dies in the next generation. This simulates cells
              dying due to isolation or competition for resources.
            </li>
          </ul>
        </div>
        <div className="bottom-bar">
          <button
            className="startButton"
            onClick={() => setIsRunning(!isRunning)}
          >
            {isRunning ? <Pause /> : <PlayArrow />}
          </button>
        </div>
      </div>
    </div>
  );
};
