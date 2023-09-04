import PasswordStrengthChecker from '@/tools/passwordTools/passwordStrengthChecker';
import React from 'react';
import Head from 'next/head';

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Password Strength Checker</title>
        <meta name='description' content='Password Strength Checker' />
      </Head>
      <PasswordStrengthChecker />
    </div>
  );
};

export default IndexPage;
