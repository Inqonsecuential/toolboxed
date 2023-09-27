import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Tools {
  name: string;
  link: string;
}

const tools: Tools[] = [
  {
    name: 'Password Tools',
    link: '/#password-tools',
  },
  {
    name: 'Calulators',
    link: '/#calculators',
  },
  {
    name: 'Converters',
    link: '/#converters',
  },
  {
    name: 'Text Tools',
    link: '/#text-tools',
  },
  {
    name: 'Image Tools',
    link: '/#image-tools',
  },
];

const Header = () => {
  return (
    <div className='bg-biloba-flower-200 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-end py-6 md:space-x-10 px-3'>
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
          <div className='hidden lg:flex'>
            <nav className='flex space-x-5 font-poppins'>
              {tools.map((tool) => (
                <Link
                  href={tool.link}
                  key={tool.name}
                  className='text-biloba-flower-700 font-medium rounded-md hover:text-biloba-flower-900 hover:underline hover:tracking-wider transition-all duration-300 ease-in-out'
                >
                  {tool.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
