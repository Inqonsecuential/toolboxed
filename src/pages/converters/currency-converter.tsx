import CurrencyConverter from '@/tools/converters/currencyConverter/currencyConverter';
import React from 'react';
import Head from 'next/head';

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Currency Converter</title>
        <meta name='description' content='Currency Converter' />
      </Head>
      <CurrencyConverter
        apikey={`${process.env.NEXT_PUBLIC_CURRENCY_DATA_KEY}`}
      />
    </div>
  );
};

export default IndexPage;
