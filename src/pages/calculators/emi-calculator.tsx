import EMIcalculator from '@/tools/calculators/emiCalculator';
import React from 'react';
import Head from 'next/head';

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>EMI Calculator</title>
        <meta name='description' content='EMI Calculator' />
      </Head>
      <EMIcalculator />
    </div>
  );
};

export default IndexPage;
