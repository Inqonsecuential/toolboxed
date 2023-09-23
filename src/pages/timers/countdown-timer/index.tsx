import React, { useState } from 'react';
import CountdownTimer from '@/tools/timers/countdownTimer';

const Home: React.FC = () => {
  const [inputTime, setInputTime] = useState<string>('');
  const [targetTime, setTargetTime] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTime(event.target.value);
  };

  const handleSubmit = () => {
    setTargetTime(inputTime);
  };

  return (
    <div className='min-h-screen py-8 lg:py-10 bg-biloba-flower-100'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-3xl font-semibold mb-4 text-center font-lexend py-8 lg:py-10 text-biloba-flower-700'>
          Countdown Timer
        </h1>
        <div className='flex items-center justify-center flex-col max-w-md mx-auto'>
          <div className='mb-4 space-x-4'>
            <input
              type='datetime-local'
              value={inputTime}
              onChange={handleInputChange}
              className='border-2 px-3 py-2 rounded font-poppins text-biloba-flower-700 border-biloba-flower-500 focus:outline-none focus:ring-2 focus:ring-cornflower-500'
            />
            <button
              onClick={handleSubmit}
              className='px-3 py-2 font-poppins bg-biloba-flower-600 hover:bg-biloba-flower-700 text-white rounded-md focus:outline-none'
            >
              Start Countdown
            </button>
          </div>
          {targetTime && (
            <CountdownTimer
              targetTime={targetTime}
              setTargetTime={setTargetTime}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
