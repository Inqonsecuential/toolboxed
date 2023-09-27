import SnakeGame from '@/games/snake/snake';
import React from 'react';
import Head from 'next/head';

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Snake</title>
        <meta name='description' content='Snake' />
      </Head>
      <SnakeGame />
    </div>
  );
};

export default IndexPage;
