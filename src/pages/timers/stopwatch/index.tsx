import Stopwatch from '@/tools/timers/stopwatch';
import React from 'react';
import Head from 'next/head';

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Countdown Timer</title>
        <meta name='description' content='Countdown Timer' />
      </Head>
      <Stopwatch />
    </div>
  );
};

export default IndexPage;
