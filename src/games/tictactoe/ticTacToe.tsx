import Head from 'next/head';
import { useEffect, useState } from 'react';

const WINNING_COMBO: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

interface BoardData {
  [key: number]: string;
}

export default function Home(): JSX.Element {
  const [xTurn, setXTurn] = useState<boolean>(true);
  const [won, setWon] = useState<boolean>(false);
  const [wonCombo, setWonCombo] = useState<number[]>([]);
  const [boardData, setBoardData] = useState<BoardData>({
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
  });
  const [isDraw, setIsDraw] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>('');

  useEffect(() => {
    checkWinner();
    checkDraw();
  }, [boardData]);

  const updateBoardData = (idx: number): void => {
    if (!boardData[idx] && !won) {
      //will check whether specify idx is empty or not
      let value: string = xTurn === true ? 'X' : 'O';
      setBoardData({ ...boardData, [idx]: value });
      setXTurn(!xTurn);
    }
  };

  const checkDraw = (): void => {
    let check: boolean = Object.keys(boardData).every(
      (v) => boardData[Number(v)],
    );
    setIsDraw(check);
    if (check) setModalTitle('Match Draw!!!');
  };

  const checkWinner = (): void => {
    WINNING_COMBO.map((bd) => {
      const [a, b, c] = bd;
      if (
        boardData[a] &&
        boardData[a] === boardData[b] &&
        boardData[a] === boardData[c]
      ) {
        setWon(true);
        setWonCombo([a, b, c]);
        setModalTitle(`Player ${!xTurn ? 'X' : 'O'} Won!!!`);
        return;
      }
    });
  };

  const reset = (): void => {
    setBoardData({
      0: '',
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
    });
    setXTurn(true);
    setWon(false);
    setWonCombo([]);
    setIsDraw(false);
    setModalTitle('');
  };

  return (
    <div className='bg-gray-100 min-h-screen flex flex-col items-center'>
      <Head>
        <title>Tic Tac Toe</title>
      </Head>
      <h1 className='text-3xl font-bold mt-8'>Tic Tac Toe</h1>
      <div className='game mt-8 bg-white p-4 rounded-lg shadow-lg'>
        <div className='game__menu text-2xl font-semibold text-center'>
          <p>{xTurn === true ? 'X Turn' : 'O Turn'}</p>
          <p>{`Game Won: ${won} Draw: ${isDraw}`}</p>
        </div>
        <div className='game__board grid grid-cols-3 gap-2 mt-4'>
          {[...Array(9)].map((v, idx) => {
            return (
              <div
                onClick={() => {
                  updateBoardData(idx);
                }}
                key={idx}
                className={`square bg-gray-200 rounded-lg shadow-md text-center text-4xl font-bold w-16 h-16 cursor-pointer ${
                  wonCombo.includes(idx) ? 'bg-aquamarine shadow-none' : ''
                }`}
              >
                {boardData[idx]}
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={`modal bg-white rounded-lg shadow-lg p-4 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-0 transition-transform duration-200 ${
          modalTitle ? 'scale-100' : ''
        }`}
      >
        <div className='modal__title text-xl font-bold mb-4'>{modalTitle}</div>
        <button
          onClick={reset}
          className='bg-blue-500 text-white px-4 py-2 rounded-lg text-lg font-semibold'
        >
          New Game
        </button>
      </div>
    </div>
  );
}
