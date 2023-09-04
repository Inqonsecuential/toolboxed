import PasswordGenerator from '@/tools/passwordTools/passwordGenerator';
import React from 'react';
import Head from 'next/head';

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Password Generator</title>
        <meta name='description' content='Password Generator' />
      </Head>
      <PasswordGenerator />
    </div>
  );
};

export default IndexPage;
