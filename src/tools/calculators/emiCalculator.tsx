import React, { useState } from 'react';

const EMIcalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<string>('');
  const [interestRate, setInterestRate] = useState<string>('');
  const [loanTenure, setLoanTenure] = useState<string>('');
  const [interestFrequency, setInterestFrequency] = useState<string>('monthly');
  const [emi, setEmi] = useState<number | null>(null);
  const [totalInterest, setTotalInterest] = useState<number | null>(null);
  const [totalPayableAmount, setTotalPayableAmount] = useState<number | null>(
    null,
  );

  const handleLoanAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numeric input or an empty string
    if (/^[0-9]*$/.test(value) || value === '') {
      setLoanAmount(value);
    }
  };

  const handleInterestRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow numeric input or decimals with up to two decimal places
    if (/^\d+(\.\d{0,2})?$/.test(value) || value === '') {
      setInterestRate(value);
    }
  };

  const handleLoanTenureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numeric input or an empty string
    if (/^[0-9]*$/.test(value) || value === '') {
      setLoanTenure(value);
    }
  };

  const calculateEMI = () => {
    // Convert input values to numbers
    const parsedLoanAmount = parseFloat(loanAmount);
    const parsedInterestRate = parseFloat(interestRate);
    const parsedLoanTenure = parseFloat(loanTenure);

    // Validate input values
    if (
      isNaN(parsedLoanAmount) ||
      isNaN(parsedInterestRate) ||
      isNaN(parsedLoanTenure) ||
      parsedLoanAmount <= 0 ||
      parsedInterestRate <= 0 ||
      parsedLoanTenure <= 0
    ) {
      alert(
        'Please enter valid numeric values for Loan Amount, Interest Rate, and Loan Tenure.',
      );
      return;
    }

    // Calculate Monthly Interest Rate if interest is provided annually
    const monthlyInterestRate =
      interestFrequency === 'yearly'
        ? parsedInterestRate / 12 / 100
        : parsedInterestRate / 100;

    // Calculate EMI using the formula
    const emiValue =
      (parsedLoanAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, parsedLoanTenure)) /
      (Math.pow(1 + monthlyInterestRate, parsedLoanTenure) - 1);

    setEmi(emiValue);

    // Calculate Total Interest and Total Payable Amount
    const totalInterestValue = emiValue * parsedLoanTenure - parsedLoanAmount;
    setTotalInterest(totalInterestValue);

    const totalPayableAmountValue = emiValue * parsedLoanTenure;
    setTotalPayableAmount(totalPayableAmountValue);
  };

  return (
    <div className='min-h-screen bg-biloba-flower-100'>
      <div className='max-w-7xl mx-auto p-4'>
        <h2 className='text-3xl font-bold font-lexend py-6 lg:py-10 text-biloba-flower-800'>
          EMI Calculator
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label
              className='block text-sm font-semibold font-poppins pb-1'
              htmlFor='loanAmount'
            >
              Loan Amount:
            </label>
            <input
              type='text'
              id='loanAmount'
              value={loanAmount}
              onChange={handleLoanAmountChange}
              className='w-full px-3 py-2 font-poppins rounded-md border border-biloba-flower-300 focus:outline-none focus:ring focus:border-biloba-flower-500 ring-biloba-flower-500'
              placeholder='Enter Loan Amount'
            />
          </div>
          <div>
            <label
              className='block text-sm font-semibold font-poppins pb-1'
              htmlFor='interestRate'
            >
              Interest Rate (%):
            </label>
            <input
              type='text'
              id='interestRate'
              value={interestRate}
              onChange={handleInterestRateChange}
              className='w-full px-3 py-2 font-poppins rounded-md border border-biloba-flower-300 focus:outline-none focus:ring focus:border-biloba-flower-500 ring-biloba-flower-500'
              placeholder='Enter Interest Rate'
            />
          </div>
          <div>
            <label
              className='block text-sm font-semibold font-poppins pb-1'
              htmlFor='interestFrequency'
            >
              Interest Frequency:
            </label>
            <select
              id='interestFrequency'
              value={interestFrequency}
              onChange={(e) => setInterestFrequency(e.target.value)}
              className='w-full px-3 py-2 font-poppins rounded-md border border-biloba-flower-300 focus:outline-none focus:ring focus:border-biloba-flower-500 ring-biloba-flower-500'
            >
              <option value='monthly'>Monthly</option>
              <option value='yearly'>Yearly</option>
            </select>
          </div>
          <div>
            <label
              className='block text-sm font-semibold font-poppins pb-1'
              htmlFor='loanTenure'
            >
              Loan Tenure (months):
            </label>
            <input
              type='text'
              id='loanTenure'
              value={loanTenure}
              onChange={handleLoanTenureChange}
              className='w-full px-3 py-2 font-poppins rounded-md border border-biloba-flower-300 focus:outline-none focus:ring focus:border-biloba-flower-500 ring-biloba-flower-500'
              placeholder='Enter Loan Tenure'
            />
          </div>
        </div>
        <button
          onClick={calculateEMI}
          className='mt-4 px-4 py-2 bg-biloba-flower-500 text-white rounded-md hover:bg-biloba-flower-600 focus:outline-none focus:ring focus:bg-biloba-flower-600 font-poppins ring-biloba-flower-600'
        >
          Calculate EMI
        </button>
        {emi !== null && (
          <div className='mt-4 bg-biloba-flower-300 p-4 shadow-xl rounded-md max-w-md mx-auto'>
            <h3 className='font-bold text-xl text-biloba-flower-700 mb-2 font-lexend'>
              Results:
            </h3>
            <div className='space-y-3'>
              <div>
                <div className='font-semibold font-poppins text-sm text-biloba-flower-900'>
                  EMI:
                </div>
                <div className='text-xl bg-biloba-flower-600 text-white font-bold font-lexend px-3 py-2 rounded-md text-center'>
                  {emi.toFixed(2)}
                </div>
              </div>
              <div>
                <div className='font-semibold font-poppins text-sm text-biloba-flower-900'>
                  Total Interest:
                </div>
                <div className='text-xl bg-biloba-flower-600 text-white font-bold font-lexend px-3 py-2 rounded-md text-center'>
                  {totalInterest?.toFixed(2)}
                </div>
              </div>
              <div>
                <div className='font-semibold font-poppins text-sm text-biloba-flower-900'>
                  Total Payable Amount (Principal + Interest):
                </div>
                <div className='text-xl bg-biloba-flower-600 text-white font-bold font-lexend px-3 py-2 rounded-md text-center'>
                  {totalPayableAmount?.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EMIcalculator;
