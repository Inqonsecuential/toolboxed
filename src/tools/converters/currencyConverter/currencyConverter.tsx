import React, { useState } from 'react';
import axios from 'axios';
import { countriesData } from '@/tools/converters/currencyConverter/countriesData';

interface ConversionResult {
  date: string;
  historical: boolean;
  info: {
    quote: number;
    timestamp: number;
  };
  query: {
    amount: number;
    from: string;
    to: string;
  };
  result: number;
  success: boolean;
}

interface apikeyProps {
  apikey: string;
}

const CurrencyConverter: React.FC<apikeyProps> = ({ apikey }) => {
  const [amount, setAmount] = useState<number>(10);
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('GBP');
  const [conversionResult, setConversionResult] =
    useState<ConversionResult | null>(null);

  const convertCurrency = async () => {
    try {
      const response = await axios.get(
        `https://api.apilayer.com/currency_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`,
        {
          headers: {
            apikey: `${apikey}`,
          },
        },
      );

      setConversionResult(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error converting currency:', error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      convertCurrency();
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^0-9.]/g, ''); // Allow only digits and decimals
    setAmount(newValue === '' ? 0 : parseFloat(newValue));
  };

  return (
    <div className='bg-biloba-flower-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-3xl mb-4 font-lexend font-bold text-center py-8 lg:py-10 text-biloba-flower-700'>
          Currency Converter
        </h1>
        <div className='max-w-lg mx-auto'>
          <div className='mb-4'>
            <label className='block font-poppins'>
              Amount:
              <input
                type='text'
                className='rounded px-3 py-2 text-lg w-full border-2 border-biloba-flower-500 shadow-sm focus:outline-none focus:border-cornflower-500'
                value={amount === 0 ? '' : amount} // Display empty string if amount is 0
                onChange={handleAmountChange}
                onKeyDown={handleKeyDown}
              />
            </label>
          </div>
          <div className='mb-4 font-poppins'>
            <label className='block'>
              From Currency:
              <select
                className='border-2 rounded-md px-3 py-2 w-full bg-biloba-flower-50 border-biloba-flower-500 shadow-sm focus:outline-none focus:border-cornflower-500'
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
              >
                {countriesData.map((country) => (
                  <option
                    key={country.code}
                    value={country.currency.code}
                    className='font-poppins'
                  >
                    {`${country.currency.code} - ${country.currency.symbol} - ${country.name}`}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className='mb-4 font-poppins'>
            <label className='block'>
              To Currency:
              <select
                className='border-2 rounded-md px-3 py-2 w-full bg-biloba-flower-50 border-biloba-flower-500 shadow-sm focus:outline-none focus:border-cornflower-500'
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                {countriesData.map((country) => (
                  <option
                    key={country.code}
                    value={country.currency.code}
                    className='font-poppins hover:bg-biloba-flower-600'
                  >
                    {`${country.currency.code} - ${country.currency.symbol} - ${country.name}`}
                  </option>
                ))}
              </select>
            </label>
          </div>
          {conversionResult ? (
            <div className='mt-4 font-poppins text-biloba-flower-900 '>
              <div className='text-center w-full bg-biloba-flower-600 px-3 py-2 text-xl text-white font-bold'>
                {conversionResult.result} {toCurrency}
              </div>
              <button
                type='reset'
                onClick={() => setConversionResult(null)}
                className='text-center w-full bg-biloba-flower-500 hover:bg-biloba-flower-600 px-3 py-2 text-white font-bold mt-4 rounded'
              >
                Reset
              </button>
            </div>
          ) : (
            <button
              className=' mt-4 bg-biloba-flower-500 hover:bg-biloba-flower-600 text-white py-2 px-4 rounded font-poppins text-center w-full'
              onClick={convertCurrency}
            >
              Convert
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
