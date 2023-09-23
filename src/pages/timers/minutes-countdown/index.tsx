import React from 'react';
import CountdownTimer from '@/tools/timers/minutesCountdown';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Countdown Timer</title>
        <meta name='description' content='Countdown Timer' />
      </Head>
      <CountdownTimer />
    </div>
  );
};

export default Home;
