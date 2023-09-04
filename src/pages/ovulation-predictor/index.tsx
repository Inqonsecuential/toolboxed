import PredictiveComponent from '@/tools/calculators/ovulationCalulators';
import React from 'react';
import Head from 'next/head';

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Ovulation Calculator</title>
        <meta name='description' content='Ovulation Calculator' />
      </Head>
      <PredictiveComponent />
    </div>
  );
};

export default IndexPage;
