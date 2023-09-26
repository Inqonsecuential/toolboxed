import React from 'react';
import GridComponent from '@/components/gridComponent';
import Head from 'next/head';
import { links } from '@/components/links';

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>ToolBoxed</title>
      </Head>
      <div className='min-h-screen bg-biloba-flower-100 py-8 lg:py-10'>
        <div className='max-w-7xl mx-auto'>
          <h1 className='font-lexend text-3xl text-center text-biloba-flower-700 font-bold'>
            ToolBoxed
          </h1>
          <p className='font-poppins mt-4 text-center mx-auto'>
            Your one-stop toolbox for all things practical and playful. From
            calculators to creative generators, we&apos;ve got you covered!
          </p>
          <GridComponent component={links.calculator} category='Calculators' />
          <GridComponent component={links.timers} category='Timers' />
          <GridComponent
            component={links.passwordTools}
            category='Password Tools'
          />
          <GridComponent component={links.textTools} category='Text Tools' />
          <GridComponent
            component={links.unitConverter}
            category='Unit Converter'
          />
          <GridComponent
            component={links.imageTools}
            category='Image Component'
          />
          <GridComponent component={links.games} category='Games' />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
