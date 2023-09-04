import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div>
      <footer className='bg-biloba-flower-200 py-4 font-lexend text-center text-white'>
        <div className='flex items-center justify-between flex-col md:flex-row space-y-3 md:space-y-0 px-6'>
          <div className='flex items-end justify-center font-lexend space-x-3'>
            <Link href={'/'}>
              <div className='flex items-end space-x-3 justify-center'>
                <Image
                  src={'/toolbox.svg'}
                  width={100}
                  height={100}
                  alt='toolboxed logo'
                  className='h-12 w-auto'
                />
                <div className='text-2xl font-semibold text-biloba-flower-600'>
                  ToolBoxed
                </div>
              </div>
            </Link>
          </div>
          <div className='text-biloba-flower-800'>
            &copy; {new Date().getFullYear()} ToolBoxed. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
