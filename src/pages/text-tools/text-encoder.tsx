import TextEncoder from '@/tools/textTools/textEncoder';
import React from 'react';
import Head from 'next/head';

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Text Encoder</title>
        <meta name='description' content='Text Encoder' />
      </Head>
      <TextEncoder />
    </div>
  );
};

export default IndexPage;
