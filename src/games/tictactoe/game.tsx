import React, { useState, useEffect } from "react";
import Board from "./board";
import Swal from "sweetalert2";

interface GameProps {
  myTurn: boolean;
  pubnub: any; // Replace with the actual PubNub type
  gameChannel: string;
  piece: string;
  isRoomCreator: boolean;
  endGame: () => void;
}

const Game: React.FC<GameProps> = ({
  myTurn,
  pubnub,
  gameChannel,
  piece,
  isRoomCreator,
  endGame,
}) => {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(""));
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const [whosTurn, setWhosTurn] = useState(myTurn);
  const [turn, setTurn] = useState("X");
  const [gameOver, setGameOver] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const handleGameMessages = (msg: any) => {
      if (msg.message.turn === piece) {
        publishMove(msg.message.index, msg.message.piece);
      } else if (msg.message.reset) {
        setSquares(Array(9).fill(""));
        setWhosTurn(myTurn);
        setTurn("X");
        setGameOver(false);
        setCounter(0);
        Swal.close();
      } else if (msg.message.endGame) {
        Swal.close();
        endGame();
      }
    };

    pubnub.getMessage(gameChannel, handleGameMessages);
  }, [piece, myTurn, pubnub, gameChannel, endGame]);

  const newRound = (winner: string | null) => {
    const title = winner === null ? "Tie game!" : `Player ${winner} won!`;

    if (!isRoomCreator && gameOver) {
      Swal.fire({
        position: "top",
        allowOutsideClick: false,
        title: title,
        text: "Waiting for a new round...",
        confirmButtonColor: "rgb(208,33,41)",
        width: 275,
        customClass: {
          title: "title-class",
          popup: "popup-class",
          confirmButton: "button-class",
        },
      });
      setTurn("X");
    } else if (isRoomCreator && gameOver) {
      Swal.fire({
        position: "top",
        allowOutsideClick: false,
        title: title,
        text: "Continue Playing?",
        showCancelButton: true,
        confirmButtonColor: "rgb(208,33,41)",
        cancelButtonColor: "#aaa",
        cancelButtonText: "Nope",
        confirmButtonText: "Yea!",
        width: 275,
        customClass: {
          title: "title-class",
          popup: "popup-class",
          confirmButton: "button-class",
          cancelButton: "button-class",
        },
      }).then((result) => {
        if (result.value) {
          pubnub.publish({
            message: {
              reset: true,
            },
            channel: gameChannel,
          });
        } else {
          pubnub.publish({
            message: {
              endGame: true,
            },
            channel: gameChannel,
          });
        }
      });
    }
  };

  const announceWinner = (winner: string) => {
    const pieces = {
      X: xScore,
      O: oScore,
    };

    if (winner === "X") {
      pieces.X += 1;
      setXScore(pieces.X);
    } else {
      pieces.O += 1;
      setOScore(pieces.O);
    }

    setGameOver(true);
    newRound(winner);
  };

  const checkForWinner = (squares: string[]) => {
    const possibleCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < possibleCombinations.length; i++) {
      const [a, b, c] = possibleCombinations[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        announceWinner(squares[a]);
        return;
      }
    }

    setCounter(counter + 1);

    if (counter === 9) {
      setGameOver(true);
      newRound(null);
    }
  };

  const publishMove = (index: number, piece: string) => {
    const newSquares = [...squares];
    newSquares[index] = piece;
    setSquares(newSquares);

    setTurn(newSquares[index] === "X" ? "O" : "X");
    setWhosTurn(!whosTurn);
    checkForWinner(newSquares);
  };

  const onMakeMove = (index: number) => {
    if (!squares[index] && turn === piece) {
      const newSquares = [...squares];
      newSquares[index] = piece;
      setSquares(newSquares);

      setWhosTurn(!whosTurn);
      setTurn(turn === "X" ? "O" : "X");

      pubnub.publish({
        message: {
          index: index,
          piece: piece,
          turn: turn === "X" ? "O" : "X",
        },
        channel: gameChannel,
      });

      checkForWinner(newSquares);
    }
  };

  return (
    <div className="game">
      <div className="board">
        <Board squares={squares} onClick={(index) => onMakeMove(index)} />
        <p className="status-info">
          {whosTurn ? "Your turn" : "Opponent's turn"}
        </p>
      </div>

      <div className="scores-container">
        <div>
          <p>Player X: {xScore} </p>
        </div>

        <div>
          <p>Player O: {oScore} </p>
        </div>
      </div>
    </div>
  );
};

export default Game;
