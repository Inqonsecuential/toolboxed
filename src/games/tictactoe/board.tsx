import React from "react";
import Square from "./square";

interface BoardProps {
  squares: string[];
  onClick: (i: number) => void;
}

const Board: React.FC<BoardProps> = ({ squares, onClick }) => {
  // Create the 3 x 3 board
  const createBoard = (row: number, col: number) => {
    const board = [];
    let cellCounter = 0;

    for (let i = 0; i < row; i += 1) {
      const columns = [];
      for (let j = 0; j < col; j += 1) {
        columns.push(renderSquare(cellCounter++));
      }
      board.push(
        <div key={i} className="board-row">
          {columns}
        </div>
      );
    }

    return board;
  };

  const renderSquare = (i: number) => {
    return <Square key={i} value={squares[i]} onClick={() => onClick(i)} />;
  };

  return <div>{createBoard(3, 3)}</div>;
};

export default Board;
