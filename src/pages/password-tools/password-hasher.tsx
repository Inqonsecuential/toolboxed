import PasswordHasher from '@/tools/passwordTools/passwordHasher';
import React from 'react';
import Head from 'next/head';

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Password Hasher</title>
        <meta name='description' content='Password Hasher' />
      </Head>
      <PasswordHasher />
    </div>
  );
};

export default IndexPage;
