import React from 'react';

interface ShapeAreaCalculatorProps {}

const ShapeAreaCalculator: React.FC<ShapeAreaCalculatorProps> = () => {
  const shapes: string[] = [
    'circle',
    'sphere',
    'square',
    'rectangle',
    'prism',
    'cylinder',
    'pyramid',
  ];

  const calculateArea = (shape: string, dimensions: number[]): number => {
    switch (shape) {
      case 'circle':
        return Math.PI * dimensions[0] ** 2;
      case 'sphere':
        return 4 * Math.PI * dimensions[0] ** 2;
      case 'square':
        return dimensions[0] ** 2;
      case 'rectangle':
        return dimensions[0] * dimensions[1];
      case 'prism':
        const [length, width, height] = dimensions;
        const baseArea = length * width;
        const basePerimeter = 2 * (length + width);
        const lateralArea = basePerimeter * height;
        return 2 * baseArea + lateralArea;
      case 'cylinder':
        return 2 * Math.PI * dimensions[0] * (dimensions[0] + dimensions[1]);
      case 'pyramid':
        return (
          dimensions[0] ** 2 +
          (dimensions[0] *
            dimensions[1] *
            Math.sqrt(
              dimensions[2] ** 2 + dimensions[0] ** 2 + dimensions[1] ** 2,
            )) /
            2
        );
      default:
        throw new Error('Unsupported shape');
    }
  };

  const dimensionsMap: { [key: string]: string[] } = {
    circle: ['radius'],
    sphere: ['radius'],
    square: ['side'],
    rectangle: ['length', 'width'],
    prism: ['length', 'width', 'height'],
    cylinder: ['radius', 'height'],
    pyramid: ['base length', 'height', 'slant height'],
  };

  const [selectedShape, setSelectedShape] = React.useState<string>(shapes[0]);
  const [isMetric, setIsMetric] = React.useState<boolean>(true);
  const initialDimensions: number[] = dimensionsMap[selectedShape].map(() => 0);
  const [dimensions, setDimensions] =
    React.useState<number[]>(initialDimensions);
  const area = calculateArea(selectedShape, dimensions);

  const handleShapeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedShape(e.target.value);
    setDimensions(initialDimensions);
  };

  const handleDimensionChange = (index: number, value: string) => {
    if (/^\d*$/.test(value) || value === '') {
      setDimensions((prevDimensions) => {
        const newDimensions = [...prevDimensions];
        newDimensions[index] = +value;
        return newDimensions;
      });
    }
  };

  const toggleUnits = () => {
    setIsMetric((prevIsMetric) => !prevIsMetric);
  };

  const units = isMetric ? 'sq. cm' : 'sq. in';
  const unitConversionFactor = isMetric ? 1 : 0.155;

  return (
    <div className='bg-biloba-flower-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md mx-auto bg-white rounded-xl p-8 shadow-md space-y-4'>
        <h3 className='text-3xl text-center font-semibold text-biloba-flower-700 font-lexend py-6'>
          Surface Area Calculator
        </h3>
        <div>
          <label className='text-base font-poppins font-medium text-gray-700'>
            Select a shape:
          </label>
          <select
            className='mt-1 block w-full font-poppins px-3 py-2 rounded-md border-2 border-biloba-flower-500 shadow-sm focus:outline-none'
            value={selectedShape}
            onChange={handleShapeChange}
          >
            {shapes.map((shape) => (
              <option key={shape} value={shape}>
                {shape.charAt(0).toUpperCase() + shape.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className='flex space-x-3 items-center'>
          <label className='text-base font-poppins font-medium text-gray-700'>
            Units:
          </label>
          <button
            className='mt-1 px-4 py-2 border rounded-md font-poppins text-sm font-medium text-white bg-biloba-flower-600 hover:bg-biloba-flower-700 focus:outline-none'
            onClick={toggleUnits}
          >
            {isMetric ? 'Metric' : 'Imperial'}
          </button>
        </div>
        {dimensionsMap[selectedShape].map((dimension, index) => (
          <div key={index}>
            <label className='text-base font-medium text-gray-700 font-poppins'>
              {dimension.charAt(0).toUpperCase() + dimension.slice(1)} (
              {isMetric ? 'cm' : 'in'}):
            </label>
            <input
              type='text'
              className='mt-1 block w-full font-poppins px-3 py-2 rounded-md shadow-sm border-2 border-biloba-flower-500 focus:outline-none focus:border-cornflower-500 focus:ring-biloba-flower-500'
              value={dimensions[index]}
              onChange={(e) => handleDimensionChange(index, e.target.value)}
            />
          </div>
        ))}
        <p className='text-lg text-biloba-flower-700 font-poppins'>
          Area: {area ? area.toFixed(2) : 0} {units}
        </p>
      </div>
    </div>
  );
};

export default ShapeAreaCalculator;
