import React, { useState } from 'react';
import Calendar from 'react-calendar';

interface PredictionResult {
  ovulationDate: Date;
  fertileWindowStart: Date;
  fertileWindowEnd: Date;
  pregnancyTestDate: Date;
  dueDate: Date;
  nextCycleStartDate: Date;
}

const PredictiveComponent: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [cycleLength, setCycleLength] = useState<number | null>(28);

  const [predictionResult, setPredictionResult] =
    useState<PredictionResult | null>(null);

  const calculatePredictions = () => {
    if (selectedDate && cycleLength) {
      const ovulationDay = new Date(selectedDate);
      ovulationDay.setDate(selectedDate.getDate() + 14);

      const fertileWindowStart = new Date(ovulationDay);
      fertileWindowStart.setDate(ovulationDay.getDate() - 5);

      const fertileWindowEnd = new Date(ovulationDay);
      fertileWindowEnd.setDate(ovulationDay.getDate() + 4);

      const pregnancyTestDate = new Date(ovulationDay);
      pregnancyTestDate.setDate(ovulationDay.getDate() + 10);

      const dueDate = new Date(ovulationDay);
      dueDate.setDate(ovulationDay.getDate() + 280);

      const nextCycleStartDate = new Date(selectedDate);
      nextCycleStartDate.setDate(selectedDate.getDate() + 28);

      setPredictionResult({
        ovulationDate: ovulationDay,
        fertileWindowStart,
        fertileWindowEnd,
        pregnancyTestDate,
        dueDate,
        nextCycleStartDate,
      });
    }
  };
  return (
    <div className='min-h-screen bg-biloba-flower-100'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center'>
          <div className='container text-center mx-auto'>
            <h1 className='pt-8 text-3xl sm:text-4xl font-bold font-lexend text-biloba-flower-700'>
              Ovulation and Pregnancy Due Date Calculator
            </h1>
            <div className='text-sm mt-3 px-2 sm:px-0 max-7xl mx-auto font-poppins'>
              Menstrual periods are different from woman to woman and month to
              month. Use this calculator to see when you may be ovulating to
              help find your most fertile days.
            </div>
          </div>
        </div>
        <div className='text-center grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div className='px-1'>
            <div className='mb-4 pt-6 flex items-center justify-center space-x-3 flex-col md:flex-row'>
              <label
                className='block text-sm font-medium font-poppins'
                htmlFor='cycleLength'
              >
                Enter Average Length of Menstrual Cycle (in days):
              </label>
              <input
                className='rounded px-3 py-2 bg-biloba-flower-200 w-20 text-center font-poppins border-2 border-biloba-flower-500 shadow-sm focus:outline-none focus:border-cornflower-500'
                type='text'
                id='cycleLength'
                value={cycleLength || ''}
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value.replace(
                    /[^0-9]/g,
                    '',
                  );
                  setCycleLength(parseInt(e.currentTarget.value) || null);
                }}
              />
            </div>
            <div className='text-center text-sm font-poppins pb-3 font-semibold'>
              Select the first day of your last period
            </div>
            <div className='flex justify-center'>
              <Calendar
                onChange={(date) => setSelectedDate(date as Date)}
                value={selectedDate}
                className='border rounded-lg shadow-sm border-biloba-flower-500'
              />
            </div>
          </div>
          <div className='flex text-left items-center justify-center flex-col px-2'>
            <button
              className='bg-biloba-flower-700 text-white rounded py-2 px-4 hover:bg-biloba-flower-900 font-bold w-full max-w-sm font-poppins'
              onClick={calculatePredictions}
            >
              Calculate Predictions
            </button>

            {predictionResult && (
              <div className='mt-4 font-poppins'>
                <h2 className='text-xl font-semibold mb-2 text-center font-lexend py-3 text-biloba-flower-700'>
                  Predictions
                </h2>
                <div className='space-y-3'>
                  <div className=''>
                    <div className='text-sm font-semibold pb-1'>
                      Ovulation Date:
                    </div>
                    <div className='px-3 py-2 bg-biloba-flower-600 text-white text-center rounded-md font-lexend font-semibold'>
                      {predictionResult.ovulationDate.toDateString()}
                    </div>
                  </div>
                  <div className=''>
                    <div className='text-sm font-semibold pb-1'>
                      Fertile Window
                    </div>
                    <div className='px-3 py-2 bg-biloba-flower-600 text-white text-center rounded-md font-lexend font-semibold'>
                      {predictionResult.fertileWindowStart.toDateString()} to{' '}
                      {predictionResult.fertileWindowEnd.toDateString()}
                    </div>
                  </div>
                  <div className=''>
                    <div className='text-sm font-semibold pb-1'>
                      Pregnancy Test Date:
                    </div>
                    <div className='px-3 py-2 bg-biloba-flower-600 text-white text-center rounded-md font-lexend font-semibold'>
                      {predictionResult.pregnancyTestDate.toDateString()}
                    </div>
                  </div>
                  <div className=''>
                    <div className='text-sm font-semibold'>Due Date:</div>
                    <div className='px-3 py-2 bg-biloba-flower-600 text-white text-center rounded-md font-lexend font-semibold'>
                      {predictionResult.dueDate.toDateString()}
                    </div>
                  </div>
                  <div className=''>
                    <div className='text-sm font-semibold'>
                      Next Menstrual Cycle Start Date:
                    </div>
                    <div className='px-3 py-2 bg-biloba-flower-600 text-white text-center rounded-md font-lexend font-semibold'>
                      {predictionResult.nextCycleStartDate.toDateString()}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='px-3 sm:px-0 text-center mt-5 mb-3 text-xs font-poppins'>
          Only your physician can accurately determine your due date or the date
          of your conception based on his/her knowledge of your complete medical
          condition.
        </div>
      </div>
    </div>
  );
};

export default PredictiveComponent;
