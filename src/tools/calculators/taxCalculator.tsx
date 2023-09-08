import React, { useState } from 'react';

const TaxCalculator = () => {
  const [cost, setCost] = useState<number | null>(null);
  const [tax, setTax] = useState<number | null>(null);
  const [total, setTotal] = useState<number | null>(null);

  // Update tax when cost and total are provided
  const updateTax = () => {
    if (cost !== null && total !== null) {
      const calculatedTax = ((total - cost) / cost) * 100;
      setTax(parseFloat(calculatedTax.toFixed(2)));
    }
  };

  // Update total when cost and tax are provided
  const updateTotal = () => {
    if (cost !== null && tax !== null) {
      const calculatedTotal = cost + cost * (tax / 100);
      setTotal(parseFloat(calculatedTotal.toFixed(2)));
    }
  };

  // Update cost when tax and total are provided
  const updateCost = () => {
    if (tax !== null && total !== null) {
      const calculatedCost = total / (1 + tax / 100);
      setCost(parseFloat(calculatedCost.toFixed(2)));
    }
  };

  return (
    <div className='min-h-screen'>
      <div className='max-w-7xl mx-auto py-8 lg:py-10'>
        <h1 className='text-3xl font-bold font-lexend text-center text-biloba-flower-700'>
          Tax Calculator
        </h1>
        <div className='flex items-center justify-center flex-col mt-6'>
          <div className='mb-4'>
            <label
              htmlFor='cost'
              className='block text-biloba-flower-900 font-poppins mb-2 text-sm'
            >
              Cost:
            </label>
            <input
              type='number'
              id='cost'
              className='w-48 text-center border-2 border-biloba-flower-500 rounded-md px-3 py-2 font-poppins focus:border-cornflower-500 focus:outline-none transition duration-300 ease-in-out'
              value={cost === null ? '' : cost}
              onChange={(e) => {
                setCost(parseFloat(e.target.value));
                updateTax();
                updateTotal();
              }}
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='tax'
              className='block text-biloba-flower-900 font-poppins mb-2 text-sm'
            >
              Tax Percentage:
            </label>
            <input
              type='number'
              id='tax'
              className='w-48 text-center border-2 border-biloba-flower-500 rounded-md px-3 py-2 font-poppins focus:border-cornflower-500 focus:outline-none transition duration-300 ease-in-out'
              value={tax === null ? '' : tax}
              onChange={(e) => {
                setTax(parseFloat(e.target.value));
                updateTotal();
                updateCost();
              }}
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='total'
              className='block text-biloba-flower-900 font-poppins mb-2 text-sm'
            >
              Total:
            </label>
            <input
              type='number'
              id='total'
              className='w-48 text-center border-2 border-biloba-flower-500 rounded-md px-3 py-2 font-poppins focus:border-cornflower-500 focus:outline-none transition duration-300 ease-in-out'
              value={total === null ? '' : total}
              onChange={(e) => {
                setTotal(parseFloat(e.target.value));
                updateTax();
                updateCost();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxCalculator;
