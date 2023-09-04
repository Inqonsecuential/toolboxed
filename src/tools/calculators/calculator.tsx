import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [expression, setExpression] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      try {
        const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, '');
        setResult(eval(sanitizedExpression).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setExpression('');
      setResult('');
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  return (
    <div className='bg-biloba-flower-200 h-screen flex flex-col justify-center items-center'>
      <div className='bg-white w-full max-w-xs px-3 py-4 rounded-md flex flex-col flex-wrap shadow-md text-biloba-flower-700 font-poppins h-44 bg-biloba-flower-950/10'>
        <div className='expression'>{expression}</div>
        <div className='font-bold underline'>{result}</div>
      </div>
      <div className='mt-4 w-full max-w-xs grid grid-cols-4 gap-2'>
        {[
          '7',
          '8',
          '9',
          '+',
          '4',
          '5',
          '6',
          '-',
          '1',
          '2',
          '3',
          'X',
          'C',
          '0',
          '=',
          '/',
        ].map((value) => (
          <button
            key={value}
            onClick={() => handleButtonClick(value)}
            className={`${
              value === '=' || value === 'C'
                ? 'bg-biloba-flower-600 hover:bg-biloba-flower-700 col-span-3'
                : 'bg-biloba-flower-500 hover:bg-biloba-flower-600'
            } text-white px-5 py-3 rounded-md font-medium font-poppins text-lg focus:outline-none w-full max-w-xs`}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
