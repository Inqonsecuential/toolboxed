import React from 'react';
import Link from 'next/link';

const GridComponent = ({ component, category }: any) => {
  return (
    <div>
      <div
        className='border-b-2 border-biloba-flower-800 pb-10'
        id='image-tools'
      >
        <h2 className='text-3xl font-lexend font-bold text-center py-8 lg:py-10 text-biloba-flower-700'>
          {category}
        </h2>
        <div className='grid lg:grid-cols-2 gap-3'>
          {component &&
            component.map((link: any) => (
              <Link
                key={link.name}
                href={link.link}
                className='hover:bg-biloba-flower-50 hover:shadow-xl w-full max-w-lg mx-auto pt-4 pb-6 rounded-md transition-all duration-150'
              >
                <div className='grid grid-cols-4'>
                  <div className='col-span-1 flex items-center justify-center text-3xl text-biloba-flower-800'>
                    {link.icon}
                  </div>
                  <div className='mt-4 col-span-3 flex items-start justify-start flex-col'>
                    <div className='font-lexend text-xl font-bold text-biloba-flower-800'>
                      {link.name}
                    </div>
                    <div className='font-poppins'>{link.description}</div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default GridComponent;
