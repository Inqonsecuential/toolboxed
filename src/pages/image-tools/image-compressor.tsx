import ImageCompressor from '@/tools/ImageTools/imageCompressor';
import React from 'react';
import Head from 'next/head';

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Image Compressor</title>
        <meta name='description' content='Image Compressor' />
      </Head>
      <ImageCompressor />
    </div>
  );
};

export default IndexPage;
