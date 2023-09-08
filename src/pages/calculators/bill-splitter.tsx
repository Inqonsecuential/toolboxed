import React from 'react';
import Head from 'next/head';
import BillSplitter from '@/tools/calculators/billSplitter';

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Bill Splitter</title>
        <meta name='description' content='Bill Splitter' />
      </Head>
      <BillSplitter />
    </div>
  );
};

export default IndexPage;
