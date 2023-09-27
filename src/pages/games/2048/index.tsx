import TwentyFortyEight from '@/games/2048/2048';
import React from 'react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/games/2048/store';

const IndexPage = () => {
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    setFlag(true);
  }, []);
  return (
    flag && (
      <Provider store={store}>
        <div>
          <Head>
            <title>2048</title>
            <meta name='description' content='2048' />
          </Head>
          <TwentyFortyEight />
        </div>
      </Provider>
    )
  );
};

export default IndexPage;
