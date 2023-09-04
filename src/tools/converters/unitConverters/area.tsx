import React, { useState } from 'react';

enum AreaUnit {
  SquareNanometers = 'Square Nanometers',
  SquareMicrometers = 'Square Micrometers',
  SquareMillimeters = 'Square Millimeters',
  SquareCentimeters = 'Square Centimeters',
  SquareMeters = 'Square Meters',
  SquareKilometers = 'Square Kilometers',
  SquareInches = 'Square Inches',
  SquareFeet = 'Square Feet',
  SquareYards = 'Square Yards',
  SquareMiles = 'Square Miles',
  Acres = 'Acres',
  Hectares = 'Hectares',
  SquareRods = 'Square Rods',
  SquareChains = 'Square Chains',
  SquareLinks = 'Square Links',
  SquarePerches = 'Square Perches',
  SquareFurlongs = 'Square Furlongs',
}

const areaConversionFactors: Record<AreaUnit, number> = {
  [AreaUnit.SquareNanometers]: 1e18,
  [AreaUnit.SquareMicrometers]: 1e12,
  [AreaUnit.SquareMillimeters]: 1e6,
  [AreaUnit.SquareCentimeters]: 1e4,
  [AreaUnit.SquareMeters]: 1,
  [AreaUnit.SquareKilometers]: 1e-6,
  [AreaUnit.SquareInches]: 1550.0031,
  [AreaUnit.SquareFeet]: 10.7639,
  [AreaUnit.SquareYards]: 1.19599,
  [AreaUnit.SquareMiles]: 3.861e-7,
  [AreaUnit.Acres]: 0.000247105,
  [AreaUnit.Hectares]: 0.0001,
  [AreaUnit.SquareRods]: 0.000247105,
  [AreaUnit.SquareChains]: 0.0000247105,
  [AreaUnit.SquareLinks]: 0.0247105,
  [AreaUnit.SquarePerches]: 0.0247105,
  [AreaUnit.SquareFurlongs]: 3.861e-8,
};

const AreaConverter: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<AreaUnit>(AreaUnit.SquareMeters);
  const [toUnit, setToUnit] = useState<AreaUnit>(AreaUnit.SquareFeet);
  const [result, setResult] = useState<number | undefined>(undefined);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFromUnitChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setFromUnit(event.target.value as AreaUnit);
  };

  const handleToUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setToUnit(event.target.value as AreaUnit);
  };

  const convertArea = () => {
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
      (inputValueNumber / areaConversionFactors[fromUnit]) *
      areaConversionFactors[toUnit];

    setResult(convertedValue);
  };
  return (
    <div className='min-h-screen bg-biloba-flower-100 py-6 lg:py-10'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl text-center font-lexend font-bold text-biloba-flower-700 pb-10'>
          Area Converter
        </h2>
        <div className='flex items-center justify-center flex-col'>
          <input
            type='number'
            value={inputValue}
            onChange={handleInputChange}
            placeholder='Enter Area'
            className='w-full max-w-md text-center font-poppins text-biloba-flower-700 bg-biloba-flower-50 border-biloba-flower-500 border-2 rounded-md px-3 py-2 focus:outline-none focus:border-cornflower-500 focus:ring-biloba-flower-500 ring-biloba-flower-500'
          />
          <div className='flex items-center justify-between w-full max-w-md mt-4'>
            <select
              value={fromUnit}
              onChange={handleFromUnitChange}
              className='text-biloba-flower-700 font-poppins border-biloba-flower-500 bg-biloba-flower-50 border-2 rounded-md px-3 py-2 focus:outline-none focus:border-cornflower-500 focus:ring-biloba-flower-500 ring-biloba-flower-500'
            >
              {Object.values(AreaUnit).map((unit) => (
                <option key={unit} value={unit} className='font-poppins'>
                  {unit}
                </option>
              ))}
            </select>
            <div className='font-poppins text-lg'>to</div>
            <select
              value={toUnit}
              onChange={handleToUnitChange}
              className='text-biloba-flower-700 font-poppins border-biloba-flower-500 bg-biloba-flower-50 border-2 rounded-md px-3 py-2 focus:outline-none focus:border-cornflower-500 focus:ring-biloba-flower-500 ring-biloba-flower-500'
            >
              {Object.values(AreaUnit).map((unit) => (
                <option key={unit} value={unit} className='font-poppins'>
                  {unit}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={convertArea}
            className='font-poppins px-3 py-2 bg-biloba-flower-500 hover:bg-biloba-flower-600 rounded-md text-white mt-6'
          >
            Convert
          </button>
        </div>
        {result !== undefined && (
          <div className='text-center mt-6 px-3 py-2 bg-biloba-flower-700 rounded-md max-w-md mx-auto font-lexend text-white font-semibold'>
            {result.toFixed(8)} {toUnit}.
          </div>
        )}
      </div>
    </div>
  );
};

export default AreaConverter;
