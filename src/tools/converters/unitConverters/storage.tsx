import React, { useState } from 'react';

enum DigitalStorageUnit {
  Bits = 'Bits',
  Bytes = 'Bytes',
  Kilobits = 'Kilobits',
  Kilobytes = 'Kilobytes',
  Megabits = 'Megabits',
  Megabytes = 'Megabytes',
  Gigabits = 'Gigabits',
  Gigabytes = 'Gigabytes',
  Terabits = 'Terabits',
  Terabytes = 'Terabytes',
  Petabits = 'Petabits',
  Petabytes = 'Petabytes',
  Exabits = 'Exabits',
  Exabytes = 'Exabytes',
}

const digitalStorageConversionFactors: Record<DigitalStorageUnit, number> = {
  [DigitalStorageUnit.Bits]: 1,
  [DigitalStorageUnit.Bytes]: 8,
  [DigitalStorageUnit.Kilobits]: 1e3,
  [DigitalStorageUnit.Kilobytes]: 8e3,
  [DigitalStorageUnit.Megabits]: 1e6,
  [DigitalStorageUnit.Megabytes]: 8e6,
  [DigitalStorageUnit.Gigabits]: 1e9,
  [DigitalStorageUnit.Gigabytes]: 8e9,
  [DigitalStorageUnit.Terabits]: 1e12,
  [DigitalStorageUnit.Terabytes]: 8e12,
  [DigitalStorageUnit.Petabits]: 1e15,
  [DigitalStorageUnit.Petabytes]: 8e15,
  [DigitalStorageUnit.Exabits]: 1e18,
  [DigitalStorageUnit.Exabytes]: 8e18,
};

const DigitalStorageUnitConverter: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<DigitalStorageUnit>(
    DigitalStorageUnit.Megabits,
  );
  const [toUnit, setToUnit] = useState<DigitalStorageUnit>(
    DigitalStorageUnit.Gigabits,
  );
  const [result, setResult] = useState<number | undefined>(undefined);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFromUnitChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setFromUnit(event.target.value as DigitalStorageUnit);
  };

  const handleToUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setToUnit(event.target.value as DigitalStorageUnit);
  };

  const convertStorage = () => {
    if (!inputValue.trim()) {
      setResult(undefined);
      return;
    }

    const inputValueNumber = parseFloat(inputValue);
    if (isNaN(inputValueNumber)) {
      setResult(undefined);
      return;
    }

    const convertedValue =
      (inputValueNumber / digitalStorageConversionFactors[toUnit]) *
      digitalStorageConversionFactors[fromUnit];

    setResult(convertedValue);
  };
  return (
    <div className='min-h-screen bg-biloba-flower-100 py-6 lg:py-10'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl text-center font-lexend font-bold text-biloba-flower-700 pb-10'>
          Digital Storage Unit Converter
        </h2>
        <div className='flex items-center justify-center flex-col px-3'>
          <input
            type='number'
            value={inputValue}
            onChange={handleInputChange}
            placeholder='Enter length'
            className='w-full max-w-md text-center font-poppins text-biloba-flower-700 border-biloba-flower-500 border-2 rounded-md px-3 py-2 focus:outline-none focus:border-cornflower-500 focus:ring-biloba-flower-500 ring-biloba-flower-500'
          />
          <div className='flex items-center justify-between flex-col md:flex-row gap-2 w-full max-w-md mt-4'>
            <select
              value={fromUnit}
              onChange={handleFromUnitChange}
              className='text-biloba-flower-700 font-poppins bg-biloba-flower-50 border-biloba-flower-500 border-2 rounded-md px-3 py-2 focus:outline-none focus:border-cornflower-500 focus:ring-biloba-flower-500 ring-biloba-flower-500'
            >
              {Object.values(DigitalStorageUnit).map((unit) => (
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
              {Object.values(DigitalStorageUnit).map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={convertStorage}
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

export default DigitalStorageUnitConverter;
