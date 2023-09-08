import React from 'react';
import Head from 'next/head';
import TaxCalculator from '@/tools/calculators/taxCalculator';

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Tax Calculator</title>
        <meta name='description' content='Tax Calculator' />
      </Head>
      <TaxCalculator />
    </div>
  );
};

export default IndexPage;
