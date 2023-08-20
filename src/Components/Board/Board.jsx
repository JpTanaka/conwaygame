import { useEffect } from "react";
import "./Board.css";
import classNames from "classnames";

export const Board = ({ board, setBoard, isRunning }) => {
  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setBoard((board) => nextGeneration(board));
      }, 500);
      return () => clearInterval(interval);
    }
  }, [isRunning, setBoard]);

  const nextGeneration = (board) => {
    const getCell = (i, j) => {
      return (board[i] && board[i][j]) | 0;
    };

    board = board.map((row, i) => {
      return row.map((alive, j) => {
        const neighbors =
          getCell(i - 1, j - 1) +
          getCell(i - 1, j) +
          getCell(i - 1, j + 1) +
          getCell(i, j - 1) +
          getCell(i, j + 1) +
          getCell(i + 1, j - 1) +
          getCell(i + 1, j) +
          getCell(i + 1, j + 1);

        return (neighbors === 3 || (neighbors === 2 && alive)) | 0;
      });
    });

    return board;
  };

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
                onClick={() => handleClick(indexRow, indexCollumn)}
                className={classNames("square", {
                  alive: item,
                })}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
