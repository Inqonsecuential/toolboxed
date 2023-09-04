import TextEncryptor from '@/tools/textTools/textEncryption';
import React from 'react';
import Head from 'next/head';

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Text Encryptor</title>
        <meta name='description' content='Text Encryptor' />
      </Head>
      <TextEncryptor />
    </div>
  );
};

export default IndexPage;
