import { useState } from 'react';

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState<number>(0);
  const [tipPercentage, setTipPercentage] = useState<number>(15);

  const calculateTip = () => {
    const bill = isNaN(billAmount) ? 0 : billAmount;
    const percentage = isNaN(tipPercentage) ? 0 : tipPercentage;
    const tipAmount = (bill * percentage) / 100;
    return tipAmount.toFixed(2);
  };

  return (
    <div className='min-h-screen bg-biloba-flower-100'>
      <div className='max-w-7xl mx-auto py-8 lg:py-10'>
        <h1 className='text-3xl font-bold font-lexend text-center py-8 lg:py-10 text-biloba-flower-700'>
          Tip Calculator
        </h1>
        <div className='flex items-center justify-center flex-col'>
          <div className='mb-4'>
            <label
              htmlFor='billAmount'
              className='block text-biloba-flower-900 font-poppins mb-2 text-sm'
            >
              Bill Amount:
            </label>
            <input
              type='number'
              id='billAmount'
              className='w-48 text-center border-2 border-biloba-flower-500 rounded-md px-3 py-2 font-poppins focus:border-cornflower-500 focus:outline-none transition duration-300 ease-in-out'
              value={billAmount}
              onChange={(e) => setBillAmount(parseFloat(e.target.value))}
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='tipPercentage'
              className='block text-biloba-flower-900 font-poppins mb-2 text-sm'
            >
              Tip Percentage:
            </label>
            <input
              type='number'
              id='tipPercentage'
              className='w-48 text-center border-2 border-biloba-flower-500 rounded-md px-3 py-2 font-poppins focus:border-cornflower-500 focus:outline-none transition duration-300 ease-in-out'
              value={tipPercentage}
              onChange={(e) => setTipPercentage(parseFloat(e.target.value))}
            />
          </div>
          <div className='mb-4'>
            <div className='text-biloba-flower-700 font-lexend uppercase text-lg flex items-center space-x-3'>
              <div>Tip Amount:</div>{' '}
              <div className='text-2xl'>{calculateTip()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipCalculator;
