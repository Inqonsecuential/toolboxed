import React, { useState } from 'react';

const TaxCalculator = () => {
  const [cost, setCost] = useState<number | null>(null);
  const [tax, setTax] = useState<number | null>(18);
  const [taxAmount, setTaxAmount] = useState<number | null>(null);
  const [total, setTotal] = useState<number | null>(null);

  // Calculate tax when tax percentage and total are provided
  const calculateTax = () => {
    if (total !== null && tax === null) {
      if (cost !== null) {
        const calculatedTax = ((total - cost) / cost) * 100;
        setTax(parseFloat(calculatedTax.toFixed(2)));
      }
      if (cost !== null) {
        const totalTaxAmount = total - cost;
        setTaxAmount(parseFloat(totalTaxAmount.toFixed(2)));
      }
    }
  };

  // Calculate total when tax and cost are provided
  const calculateTotal = () => {
    if (cost !== null && tax !== null) {
      const calculatedTotal = cost + cost * (tax / 100);
      setTotal(parseFloat(calculatedTotal.toFixed(2)));
    }
    if (cost !== null && total !== null) {
      const totalTaxAmount = total - cost;
      setTaxAmount(parseFloat(totalTaxAmount.toFixed(2)));
    }
  };

  // Calculate cost when tax and total are provided
  const calculateCost = () => {
    if (total !== null && tax !== null) {
      const calculatedCost = total / (1 + tax / 100);
      setCost(parseFloat(calculatedCost.toFixed(2)));
    }
  };

  return (
    <div className='min-h-screen bg-biloba-flower-100'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-3xl font-bold font-lexend text-center py-8 lg:py-10 text-biloba-flower-700'>
          Tax Calculator
        </h1>
        <div className='flex items-center justify-center flex-col'>
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
              onChange={(e) => setCost(parseFloat(e.target.value))}
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
              onChange={(e) => setTax(parseFloat(e.target.value))}
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
              onChange={(e) => setTotal(parseFloat(e.target.value))}
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='total'
              className='block text-biloba-flower-900 font-poppins mb-2 text-sm'
            >
              Total Tax Amount:
            </label>
            <input
              type='number'
              id='total'
              disabled
              className='w-48 text-center border-2 border-biloba-flower-500 rounded-md px-3 py-2 font-poppins focus:border-cornflower-500 focus:outline-none transition duration-300 ease-in-out'
              value={taxAmount === null ? '' : taxAmount}
              onChange={(e) => setTotal(parseFloat(e.target.value))}
            />
          </div>
          <div className='flex items-center justify-center flex-col gap-3 md:flex-row font-poppins mt-6'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-44 '
              onClick={calculateTax}
            >
              Calculate Tax
            </button>
            <button
              className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-44'
              onClick={calculateTotal}
            >
              Calculate Total
            </button>
            <button
              className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-44'
              onClick={calculateCost}
            >
              Calculate Cost
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxCalculator;
