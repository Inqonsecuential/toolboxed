import React, { useEffect, useState } from 'react';
import moment from 'moment';

interface CountdownTimerProps {
  targetTime: string;
  setTargetTime: (newTime: string) => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetTime,
  setTargetTime,
}) => {
  const [timeLeft, setTimeLeft] = useState(moment.duration());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = moment();
      const target = moment(targetTime);
      const duration = moment.duration(target.diff(now));
      setTimeLeft(duration);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [targetTime]);

  const pluralize = (value: number, unit: string) => {
    return value === 1 ? unit : `${unit}s`;
  };

  return (
    <div className='bg-biloba-flower-300 rounded-lg w-full mx-auto px-6 py-10'>
      <h2 className='text-xl font-semibold text-center font-lexend text-biloba-flower-950'>
        Countdown Timer
      </h2>
      <div className='mt-4 flex flex-col space-y-3 font-lexend'>
        <div className='grid grid-cols-3 gap-4'>
          <div className='flex items-center flex-col'>
            <div className='w-10 h-10 text-xl flex items-center justify-center bg-biloba-flower-600 text-white'>
              {timeLeft.years()}
            </div>{' '}
            <div>{pluralize(timeLeft.years(), 'Year')}</div>
          </div>
          <div className='flex items-center flex-col'>
            <div className='w-10 h-10 text-xl flex items-center justify-center bg-biloba-flower-600 text-white'>
              {timeLeft.months()}
            </div>{' '}
            <div>{pluralize(timeLeft.months(), 'Month')}</div>
          </div>
          <div className='flex items-center flex-col'>
            <div className='w-10 h-10 text-xl flex items-center justify-center bg-biloba-flower-600 text-white'>
              {timeLeft.days()}
            </div>{' '}
            <div>{pluralize(timeLeft.days(), 'Day')}</div>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <div className='flex items-center flex-col'>
            <div className='w-10 h-10 text-xl flex items-center justify-center bg-biloba-flower-600 text-white'>
              {timeLeft.hours()}
            </div>{' '}
            <div>{pluralize(timeLeft.hours(), 'Hour')}</div>
          </div>
          <div className='flex items-center flex-col'>
            <div className='w-10 h-10 text-xl flex items-center justify-center bg-biloba-flower-600 text-white'>
              {timeLeft.minutes()}
            </div>{' '}
            <div>{pluralize(timeLeft.minutes(), 'Minute')}</div>
          </div>
          <div className='flex items-center flex-col'>
            <div className='w-10 h-10 text-xl flex items-center justify-center bg-biloba-flower-600 text-white'>
              {timeLeft.seconds()}
            </div>{' '}
            <div>{pluralize(timeLeft.seconds(), 'Second')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
