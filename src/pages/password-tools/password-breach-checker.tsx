import PasswordChecker from '@/tools/passwordTools/pwnedChecker';
import React from 'react';
import Head from 'next/head';

const IndexPage = () => {
  <Head>
    <title>Password Breach Checker</title>
    <meta name='description' content='Password Breach Checker' />
  </Head>;
  return (
    <div>
      <PasswordChecker />
    </div>
  );
};

export default IndexPage;
