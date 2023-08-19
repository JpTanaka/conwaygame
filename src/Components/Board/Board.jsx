import { useEffect, useState } from "react";
import "./Board.css";
import classNames from "classnames";

export const Board = ({ board, setBoard, isRunning }) => {
  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setBoard((board) => nextGen(board));
      }, 500);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  function nextGen(cells) {
    var get = function (i, j) {
      return (cells[i] && cells[i][j]) | 0;
    };

    cells = cells.map(function (row, i) {
      return row.map(function (alive, j) {
        var neighbors =
          get(i - 1, j - 1) +
          get(i - 1, j) +
          get(i - 1, j + 1) +
          get(i, j - 1) +
          get(i, j + 1) +
          get(i + 1, j - 1) +
          get(i + 1, j) +
          get(i + 1, j + 1);

        return (neighbors === 3 || (neighbors === 2 && alive)) | 0;
      });
    });

    return cells;
  }

  const handleClick = (row, collumn) => {
    const newBoard = [...board];
    newBoard[row][collumn] = newBoard[row][collumn] ? 0 : 1;
    setBoard(newBoard);
  };

  return (
    <div className="boardContainer">
      <div className="board">
        {board.map((row, indexRow) => (
          <div className="row" key={indexRow}>
            {row.map((item, indexCollumn) => (
              <div
                key={indexCollumn}
                onClick={handleClick(indexRow, indexCollumn)}
                className={classNames("square", {
                  alive: item === 0,
                })}
              >
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
