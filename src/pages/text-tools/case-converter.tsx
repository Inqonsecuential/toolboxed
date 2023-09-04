import TextCaseConverter from '@/tools/textTools/caseConverter';
import React from 'react';
import Head from 'next/head';

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Text Case Converter</title>
        <meta name='description' content='Text Case Converter' />
      </Head>
      <TextCaseConverter />
    </div>
  );
};

export default IndexPage;
