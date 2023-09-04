import ShapeAreaCalculator from '@/tools/calculators/areaCalculator';
import React from 'react';
import Head from 'next/head';

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Area Calculator</title>
        <meta name='description' content='Area Calculator' />
      </Head>
      <ShapeAreaCalculator />
    </div>
  );
};

export default IndexPage;
