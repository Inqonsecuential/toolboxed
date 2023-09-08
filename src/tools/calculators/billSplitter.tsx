// pages/index.tsx
import { useState } from 'react';

const BillSplitter = () => {
  const [billAmount, setBillAmount] = useState<number>(0);
  const [tipPercentage, setTipPercentage] = useState<number>(15);
  const [numOfPeople, setNumOfPeople] = useState<number>(1);

  const calculateTip = () => {
    const bill = isNaN(billAmount) ? 0 : billAmount;
    const percentage = isNaN(tipPercentage) ? 0 : tipPercentage;
    return (bill * percentage) / 100;
  };

  const calculateTotalPerPerson = () => {
    const tip = calculateTip();
    const billWithTip = billAmount + tip;
    return billWithTip / numOfPeople;
  };

  return (
    <div className='min-h-screen bg-biloba-flower-100'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-3xl font-bold py-8 lg:py-10 font-lexend text-center text-biloba-flower-700'>
          Bill Splitter with Tip
        </h1>
        <div className='flex items-center justify-center flex-col'>
          <div className='mb-4'>
            <label
              htmlFor='billAmount'
              className='block text-biloba-flower-900 mb-2 font-poppins text-sm'
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
              className='block text-biloba-flower-900 mb-2 font-poppins text-sm'
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
            <label
              htmlFor='numOfPeople'
              className='block text-biloba-flower-900 mb-2 font-poppins text-sm'
            >
              Number of People:
            </label>
            <input
              type='number'
              id='numOfPeople'
              className='w-48 text-center border-2 border-biloba-flower-500 rounded-md px-3 py-2 font-poppins focus:border-cornflower-500 focus:outline-none transition duration-300 ease-in-out'
              value={numOfPeople}
              onChange={(e) => setNumOfPeople(parseInt(e.target.value, 10))}
            />
          </div>
          <div className='mb-4'>
            <div className='text-biloba-flower-700 font-lexend uppercase text-lg flex items-center space-x-3'>
              <div>Tip Amount:</div>{' '}
              <div className='text-2xl'>{calculateTip().toFixed(2)}</div>
            </div>
          </div>
          <div className='mb-4'>
            <div className='text-biloba-flower-700 font-lexend uppercase text-lg flex items-center space-x-3'>
              <div>Total Per Person:</div>{' '}
              <div className='text-2xl'>
                {calculateTotalPerPerson().toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillSplitter;
