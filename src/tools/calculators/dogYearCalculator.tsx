import React, { useState } from "react";

const DogYearCalculator: React.FC = () => {
  const [humanAge, setHumanAge] = useState<number>(0);
  const [dogAge, setDogAge] = useState<number | null>(null);

  const calculateDogAge = () => {
    // Formula to calculate dog age (7 dog years for every 1 human year)
    const dogAgeResult = humanAge * 7;
    setDogAge(dogAgeResult);
  };

  return (
    <div className="min-h-screen bg-biloba-flower-50 py-8 lg:py-10">
      <h1 className="text-3xl font-lexend text-center py-8 font-bold text-biloba-flower-700">
        Dog Year Calculator
      </h1>
      <div className="flex items-center justify-center flex-col">
        <div className="space-x-3 flex items-center justify-center flex-col sm:flex-row font-poppins text-biloba-flower-900">
          <label htmlFor="humanAge">Enter your age in human years:</label>
          <input
            type="number"
            className="text-center mt-6 sm:mt-0 border-2 border-biloba-flower-500 focus:outline-none focus:border-cornflower-500 rounded-md px-3 py-2 transition-all duration-150"
            id="humanAge"
            value={humanAge}
            onChange={(e) => setHumanAge(parseInt(e.target.value))}
          />
        </div>
        <button
          className="my-6 px-3 py-2 font-lexend text-white bg-biloba-flower-600 hover:bg-biloba-flower-700 rounded-md transition-all duration-150"
          onClick={calculateDogAge}
        >
          Calculate
        </button>
      </div>
      <div className="flex items-center justify-center font-poppins">
        {dogAge !== null && (
          <div className="flex items-center justify-center text-biloba-flower-900">
            Your age in dog years is:{" "}
            <div className="ml-2 text-2xl font-martian font-bold text-biloba-flower-700">
              {dogAge}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DogYearCalculator;
