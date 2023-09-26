import React, { useState, useEffect, useRef } from 'react';

const Stopwatch: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState<number[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning && !intervalRef.current) {
      let startTime = Date.now() - time * 1000; // Calculate start time based on previous seconds
      intervalRef.current = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        setTime(elapsedTime / 1000); // Convert milliseconds to seconds
      }, 10); // Update every 10 milliseconds (for milliseconds precision)
    } else if (!isRunning && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning, time]);

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  const addLap = () => {
    setLaps([...laps, time]);
  };

  const formatTime = (seconds: number) => {
    const formattedSeconds = Math.floor(seconds % 60)
      .toString()
      .padStart(2, '0');
    const formattedMilliseconds = Math.floor((seconds % 1) * 100)
      .toString()
      .padStart(2, '0');
    return `${Math.floor(
      seconds / 60,
    )}:${formattedSeconds}.${formattedMilliseconds}`;
  };

  return (
    <div className='min-h-screen bg-biloba-flower-100 py-8 lg:py-10'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='py-8 lg:py-10 text-3xl font-lexend text-center font-bold text-biloba-flower-700'>
          Stopwatch
        </h1>
        <div className='flex flex-col items-center justify-center'>
          <div className='text-4xl font-martian text-biloba-flower-800 mb-8'>
            {formatTime(time)}
          </div>
          <div className='flex space-x-4'>
            <button
              className={`px-3 py-2 font-poppins font-semibold rounded-md text-white ${
                isRunning ? 'bg-red-500' : 'bg-biloba-flower-500'
              }`}
              onClick={startStop}
            >
              {isRunning ? 'Stop' : 'Start'}
            </button>
            <button
              className='px-3 py-2 font-poppins font-semibold rounded-md text-white bg-biloba-flower-500'
              onClick={reset}
            >
              Reset
            </button>
            <button
              className='px-3 py-2 font-poppins font-semibold rounded-md text-white bg-biloba-flower-500'
              onClick={addLap}
            >
              Lap
            </button>
          </div>
          {laps && laps.length > 0 && (
            <div className='mt-4'>
              <h2 className='text-xl mb-2 font-poppins font-semibold text-biloba-flower-700'>
                Laps
              </h2>
              <ul>
                {laps.map((lapTime, index) => (
                  <li
                    key={index}
                    className='font-martian text-base border-b-2 border-biloba-flower-800 text-biloba-flower-800'
                  >
                    {formatTime(lapTime)}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
