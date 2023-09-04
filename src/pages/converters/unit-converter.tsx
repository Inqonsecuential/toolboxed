import UnitConverter from '@/tools/converters/unitConverters/unitConverter';
import React from 'react';
import Head from 'next/head';

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Unit Converter</title>
        <meta name='description' content='Unit Converter' />
      </Head>
      <UnitConverter />
    </div>
  );
};

export default IndexPage;
