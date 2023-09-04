import React, { useState } from 'react';

function TemperatureConverter() {
  const [celsius, setCelsius] = useState<number>(0);
  const [fahrenheit, setFahrenheit] = useState<number>(32);
  const [kelvin, setKelvin] = useState<number>(273.15);

  const handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCelsius = parseFloat(e.target.value);
    const newFahrenheit = (newCelsius * 9) / 5 + 32;
    const newKelvin = newCelsius + 273.15;
    setCelsius(+newCelsius.toFixed(2));
    setFahrenheit(+newFahrenheit.toFixed(2));
    setKelvin(+newKelvin.toFixed(2));
  };

  const handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFahrenheit = parseFloat(e.target.value);
    const newCelsius = ((newFahrenheit - 32) * 5) / 9;
    const newKelvin = ((newFahrenheit - 32) * 5) / 9 + 273.15;
    setFahrenheit(+newFahrenheit.toFixed(2));
    setCelsius(+newCelsius.toFixed(2));
    setKelvin(+newKelvin.toFixed(2));
  };

  const handleKelvinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newKelvin = parseFloat(e.target.value);
    const newCelsius = newKelvin - 273.15;
    const newFahrenheit = (newCelsius * 9) / 5 + 32;
    setKelvin(+newKelvin.toFixed(2));
    setCelsius(+newCelsius.toFixed(2));
    setFahrenheit(+newFahrenheit.toFixed(2));
  };

  return (
    <div className='min-h-screen bg-biloba-flower-100 py-8 lg:py-10'>
      <div className='flex flex-col items-center font-poppins'>
        <h1 className='text-2xl font-bold mb-4 font-lexend text-biloba-flower-700'>
          Temperature Converter
        </h1>
        <div className='flex items-center flex-col space-y-4'>
          <div className='flex'>
            <input
              type='number'
              className='w-full h-10 p-2 border-2 rounded-md border-biloba-flower-500 focus:outline-none focus:border-cornflower-500 focus:ring-biloba-flower-500 ring-biloba-flower-500'
              placeholder='Celsius'
              value={celsius}
              onChange={handleCelsiusChange}
            />
            <div className='p-2 w-10 text-center font-bold text-biloba-flower-900'>
              °C
            </div>
          </div>
          <div className='flex'>
            <input
              type='number'
              className='w-full h-10 p-2 border-2 rounded-md border-biloba-flower-500 focus:outline-none focus:border-cornflower-500 focus:ring-biloba-flower-500 ring-biloba-flower-500'
              placeholder='Fahrenheit'
              value={fahrenheit}
              onChange={handleFahrenheitChange}
            />
            <div className='p-2 w-10 text-center font-bold text-biloba-flower-900'>
              °F
            </div>
          </div>
          <div className='flex'>
            <input
              type='number'
              className='w-full h-10 p-2 border-2 rounded-md border-biloba-flower-500 focus:outline-none focus:border-cornflower-500 focus:ring-biloba-flower-500 ring-biloba-flower-500'
              placeholder='Kelvin'
              value={kelvin}
              onChange={handleKelvinChange}
            />
            <div className='p-2 w-10 text-center font-bold text-biloba-flower-900'>
              K
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemperatureConverter;
