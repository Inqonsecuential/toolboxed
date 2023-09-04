import PlaceholderImageGenerator from '@/tools/generators/placeholderImageGenerator';
import React from 'react';
import Head from 'next/head';

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Placeholder Image Generator</title>
        <meta name='description' content='Placeholder Image Generator' />
      </Head>
      <PlaceholderImageGenerator />
    </div>
  );
};

export default IndexPage;
