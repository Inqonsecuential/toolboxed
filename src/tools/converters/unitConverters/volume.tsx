import React, { useState } from 'react';

enum VolumeUnit {
  Milliliters = 'Milliliters',
  Centiliters = 'Centiliters',
  Deciliters = 'Deciliters',
  Liters = 'Liters',
  CubicMeters = 'Cubic Meters',
  CubicCentimeters = 'Cubic Centimeters',
  CubicInches = 'Cubic Inches',
  CubicFeet = 'Cubic Feet',
  GallonUS = 'Gallon (US)',
  QuartUS = 'Quart (US)',
  PintUS = 'Pint (US)',
  CupUS = 'Cup (US)',
  FluidOunceUS = 'Fluid Ounce (US)',
  TablespoonUS = 'Tablespoon (US)',
  TeaspoonUS = 'Teaspoon (US)',
  GallonUK = 'Gallon (UK)',
  QuartUK = 'Quart (UK)',
  PintUK = 'Pint (UK)',
  FluidOunceUK = 'Fluid Ounce (UK)',
  GillUK = 'Gill (UK)',
  Yards = 'Yards',
}

const volumeConversionFactors: Record<VolumeUnit, number> = {
  [VolumeUnit.Milliliters]: 1,
  [VolumeUnit.Centiliters]: 10,
  [VolumeUnit.Deciliters]: 100,
  [VolumeUnit.Liters]: 1000,
  [VolumeUnit.CubicMeters]: 1000000,
  [VolumeUnit.CubicCentimeters]: 1,
  [VolumeUnit.CubicInches]: 16.3871,
  [VolumeUnit.CubicFeet]: 28316.8,
  [VolumeUnit.GallonUS]: 3785.41,
  [VolumeUnit.QuartUS]: 946.353,
  [VolumeUnit.PintUS]: 473.176,
  [VolumeUnit.CupUS]: 236.588,
  [VolumeUnit.FluidOunceUS]: 29.5735,
  [VolumeUnit.TablespoonUS]: 14.7868,
  [VolumeUnit.TeaspoonUS]: 4.92892,
  [VolumeUnit.GallonUK]: 4546.09,
  [VolumeUnit.QuartUK]: 1136.52,
  [VolumeUnit.PintUK]: 568.261,
  [VolumeUnit.FluidOunceUK]: 28.4131,
  [VolumeUnit.GillUK]: 142.066,
  [VolumeUnit.Yards]: 764554.85798, // 1 cubic yard is approximately 764,554.85798 milliliters
};

const VolumeConverter: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<VolumeUnit>(VolumeUnit.CubicMeters);
  const [toUnit, setToUnit] = useState<VolumeUnit>(VolumeUnit.Liters);
  const [result, setResult] = useState<number | undefined>(undefined);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFromUnitChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setFromUnit(event.target.value as VolumeUnit);
  };

  const handleToUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setToUnit(event.target.value as VolumeUnit);
  };

  const convertVolume = () => {
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
      (inputValueNumber / volumeConversionFactors[toUnit]) *
      volumeConversionFactors[fromUnit];

    setResult(convertedValue);
  };

  return (
    <div className='min-h-screen bg-biloba-flower-100 py-6 lg:py-10'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl text-center font-lexend font-bold text-biloba-flower-700 pb-10'>
          Volume Converter
        </h2>
        <div className='flex items-center justify-center flex-col px-3'>
          <input
            type='number'
            value={inputValue}
            onChange={handleInputChange}
            placeholder='Enter Volume'
            className='w-full max-w-md text-center font-poppins text-biloba-flower-700 border-biloba-flower-500 border-2 rounded-md px-3 py-2 focus:outline-none focus:border-cornflower-500 focus:ring-biloba-flower-500 ring-biloba-flower-500'
          />
          <div className='flex items-center justify-between flex-col md:flex-row gap-2 w-full max-w-md mt-4'>
            <select
              value={fromUnit}
              onChange={handleFromUnitChange}
              className='text-biloba-flower-700 font-poppins bg-biloba-flower-50 border-biloba-flower-500 border-2 rounded-md px-3 py-2 focus:outline-none focus:border-cornflower-500 focus:ring-biloba-flower-500 ring-biloba-flower-500'
            >
              {Object.values(VolumeUnit).map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
            <div className='font-poppins'>to</div>
            <select
              value={toUnit}
              onChange={handleToUnitChange}
              className='text-biloba-flower-700 font-poppins bg-biloba-flower-50 border-biloba-flower-500 border-2 rounded-md px-3 py-2 focus:outline-none focus:border-cornflower-500 focus:ring-biloba-flower-500 ring-biloba-flower-500'
            >
              {Object.values(VolumeUnit).map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={convertVolume}
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

export default VolumeConverter;
