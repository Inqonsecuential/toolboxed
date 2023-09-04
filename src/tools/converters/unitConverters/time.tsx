import React, { useState } from 'react';

enum TimeUnit {
  Nanoseconds = 'Nanoseconds',
  Microseconds = 'Microseconds',
  Milliseconds = 'Milliseconds',
  Seconds = 'Seconds',
  Minutes = 'Minutes',
  Hours = 'Hours',
  Days = 'Days',
  Weeks = 'Weeks',
  Months = 'Months',
  Years = 'Years',
  Decades = 'Decades',
  Centuries = 'Centuries',
  Millennia = 'Millennia',
}

const timeConversionFactors: Record<TimeUnit, number> = {
  [TimeUnit.Nanoseconds]: 1e-9,
  [TimeUnit.Microseconds]: 1e-6,
  [TimeUnit.Milliseconds]: 1e-3,
  [TimeUnit.Seconds]: 1,
  [TimeUnit.Minutes]: 60,
  [TimeUnit.Hours]: 3600,
  [TimeUnit.Days]: 86400,
  [TimeUnit.Weeks]: 604800,
  [TimeUnit.Months]: 2.628e6, // Approximate, as months can vary in length
  [TimeUnit.Years]: 3.154e7, // Approximate, as years can be leap or common
  [TimeUnit.Decades]: 3.154e8,
  [TimeUnit.Centuries]: 3.154e9,
  [TimeUnit.Millennia]: 3.154e10,
};

const TimeConverter: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<TimeUnit>(TimeUnit.Seconds);
  const [toUnit, setToUnit] = useState<TimeUnit>(TimeUnit.Hours);
  const [result, setResult] = useState<number | undefined>(undefined);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFromUnitChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setFromUnit(event.target.value as TimeUnit);
  };

  const handleToUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setToUnit(event.target.value as TimeUnit);
  };

  const convertTime = () => {
    if (!inputValue.trim()) {
      setResult(undefined);
      return;
    }

    const inputValueNumber = parseFloat(inputValue);
    if (isNaN(inputValueNumber)) {
      setResult(undefined);
      return;
    }

    const secondsValue = inputValueNumber * timeConversionFactors[fromUnit];
    const convertedValue = secondsValue / timeConversionFactors[toUnit];

    setResult(convertedValue);
  };
  return (
    <div className='min-h-screen bg-biloba-flower-100 py-6 lg:py-10'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl text-center font-lexend font-bold text-biloba-flower-700 pb-10'>
          Time Converter
        </h2>
        <div className='flex items-center justify-center flex-col px-3'>
          <input
            type='number'
            value={inputValue}
            onChange={handleInputChange}
            placeholder='Enter Value'
            className='w-full max-w-md text-center font-poppins text-biloba-flower-700 border-biloba-flower-500 border-2 rounded-md px-3 py-2 focus:outline-none focus:border-cornflower-500 focus:ring-biloba-flower-500 ring-biloba-flower-500'
          />
          <div className='flex items-center justify-between w-full max-w-md flex-col md:flex-row gap-2 mt-4'>
            <select
              value={fromUnit}
              onChange={handleFromUnitChange}
              className='text-biloba-flower-700 font-poppins bg-biloba-flower-50 border-biloba-flower-500 border-2 rounded-md px-3 py-2 focus:outline-none focus:border-cornflower-500 focus:ring-biloba-flower-500 ring-biloba-flower-500'
            >
              {Object.values(TimeUnit).map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
            <div className='font-poppins text-xl'>to</div>
            <select
              value={toUnit}
              onChange={handleToUnitChange}
              className='text-biloba-flower-700 font-poppins bg-biloba-flower-50 border-biloba-flower-500 border-2 rounded-md px-3 py-2 focus:outline-none focus:border-cornflower-500 focus:ring-biloba-flower-500 ring-biloba-flower-500'
            >
              {Object.values(TimeUnit).map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={convertTime}
            className='font-poppins px-3 py-2 bg-biloba-flower-500 hover:bg-biloba-flower-600 rounded-md text-white mt-6'
          >
            Convert
          </button>
        </div>
        {result !== undefined && (
          <div className='text-center mt-6 px-3 py-2 bg-biloba-flower-700 rounded-md max-w-md mx-auto font-lexend text-white font-semibold'>
            {result.toFixed(3)} {toUnit}.
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeConverter;
