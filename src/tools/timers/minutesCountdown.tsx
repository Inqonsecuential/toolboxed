import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [initialMinutes, setInitialMinutes] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (isActive && (minutes > 0 || seconds > 0)) {
      const timer = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          clearInterval(timer);
          setIsActive(false);
        } else if (seconds === 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [isActive, minutes, seconds]);

  const handleStartTimer = () => {
    if (initialMinutes > 0 && !isActive) {
      setMinutes(initialMinutes);
      setSeconds(0);
      setIsActive(true);
    }
  };

  const handleResetTimer = () => {
    setIsActive(false);
    setInitialMinutes(0);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div className='min-h-screen py-8 lg:py-10 bg-biloba-flower-100'>
      <div className='max-w-7xl mx-auto py-8 lg:py-10'>
        <h1 className='text-center text-3xl font-lexend py-8 lg:py-10 font-bold text-biloba-flower-700'>
          Countdown Timer
        </h1>
        <div className='w-full max-w-sm flex items-center justify-center flex-col space-y-6 px-4 md:px-6 lg:px-8 mx-auto'>
          {!isActive ? (
            <input
              type='number'
              className='border-2 px-3 py-2 text-center w-full max-w-sm text-xl rounded font-poppins text-biloba-flower-700 border-biloba-flower-500 focus:border-cornflower-500 focus:outline-none focus:ring-2 focus:ring-cornflower-500'
              placeholder='Minutes'
              value={initialMinutes}
              onChange={(e) => setInitialMinutes(parseInt(e.target.value, 10))}
            />
          ) : null}
          <div className='text-5xl text-center font-lexend text-biloba-flower-800'>
            {`${minutes.toString().padStart(2, '0')}:${seconds
              .toString()
              .padStart(2, '0')}`}
          </div>
          <div className='flex justify-center mt-4 space-x-3'>
            <button
              className={
                isActive
                  ? `px-3 py-2 bg-biloba-flower-500 hover:bg-biloba-flower-700 text-white rounded-md text-base w-24 text-center font-poppins focus:outline-none opacity-50 cursor-not-allowed`
                  : `px-3 py-2 bg-biloba-flower-500 hover:bg-biloba-flower-700 text-white rounded-md text-base w-24 text-center font-poppins focus:outline-none `
              }
              onClick={isActive ? undefined : handleStartTimer}
              disabled={initialMinutes <= 0}
            >
              {isActive ? 'Running' : 'Start'}
            </button>
            <button
              className={
                !isActive && initialMinutes === 0
                  ? `px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-base w-20 font-poppins focus:outline-none opacity-50 cursor-not-allowed`
                  : `px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-base w-20 font-poppins focus:outline-none `
              }
              onClick={handleResetTimer}
              disabled={!isActive && initialMinutes === 0}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
