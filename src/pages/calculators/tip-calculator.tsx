import React from 'react';
import Head from 'next/head';
import TipCalculator from '@/tools/calculators/tipCalculator';

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Tip Calculator</title>
        <meta name='description' content='Tip Calculator' />
      </Head>
      <TipCalculator />
    </div>
  );
};

export default IndexPage;
