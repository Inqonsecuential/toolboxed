import TicTacToe from '@/games/tictactoe/ticTacToe';
import React from 'react';
import Head from 'next/head';
import JSXStyle from 'styled-jsx/style';

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Tic Tac Toe</title>
        <meta name='description' content='Tic Tac Toe' />
      </Head>
      <TicTacToe />
      <JSXStyle></JSXStyle>
    </div>
  );
};

export default IndexPage;
