import React, { useState } from 'react';

enum LengthUnit {
  Nanometers = 'Nanometers',
  Micrometers = 'Micrometers',
  Millimeters = 'Millimeters',
  Centimeters = 'Centimeters',
  Meters = 'Meters',
  Kilometers = 'Kilometers',
  Inches = 'Inches',
  Feet = 'Feet',
  Yards = 'Yards',
  Miles = 'Miles',
}

const unitConversionFactors: Record<LengthUnit, number> = {
  [LengthUnit.Nanometers]: 1e9,
  [LengthUnit.Micrometers]: 1e6,
  [LengthUnit.Millimeters]: 1e3,
  [LengthUnit.Centimeters]: 1e2,
  [LengthUnit.Meters]: 1,
  [LengthUnit.Kilometers]: 1e-3,
  [LengthUnit.Inches]: 39.3701,
  [LengthUnit.Feet]: 3.28084,
  [LengthUnit.Yards]: 1.09361,
  [LengthUnit.Miles]: 0.000621371,
};

const LengthConverter: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<LengthUnit>(LengthUnit.Meters);
  const [toUnit, setToUnit] = useState<LengthUnit>(LengthUnit.Feet);
  const [result, setResult] = useState<number | undefined>(undefined);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFromUnitChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setFromUnit(event.target.value as LengthUnit);
  };

  const handleToUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setToUnit(event.target.value as LengthUnit);
  };

  const convertLength = () => {
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
      (inputValueNumber / unitConversionFactors[fromUnit]) *
      unitConversionFactors[toUnit];

    setResult(convertedValue);
  };
  return (
    <div className='min-h-screen bg-biloba-flower-100 py-6 lg:py-10'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl text-center font-lexend font-bold text-biloba-flower-700 pb-10'>
          Length Converter
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
              {Object.values(LengthUnit).map((unit) => (
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
              {Object.values(LengthUnit).map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={convertLength}
            className='font-poppins px-3 py-2 bg-biloba-flower-500 hover:bg-biloba-flower-600 rounded-md text-white mt-6'
          >
            Convert
          </button>
        </div>
        {result !== undefined && (
          <div className='text-center mt-6 px-3 py-2 bg-biloba-flower-700 rounded-md max-w-md mx-auto font-lexend text-white font-semibold'>
            {result.toFixed(6)} {toUnit}.
          </div>
        )}
      </div>
    </div>
  );
};

export default LengthConverter;
