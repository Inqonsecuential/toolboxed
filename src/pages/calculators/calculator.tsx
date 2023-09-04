import Calculator from '@/tools/calculators/calculator';
import React from 'react';
import Head from 'next/head';

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Calculator</title>
        <meta name='description' content='Calculator' />
      </Head>
      <Calculator />
    </div>
  );
};

export default IndexPage;
