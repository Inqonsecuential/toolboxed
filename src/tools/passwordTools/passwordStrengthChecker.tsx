import React, { useState } from 'react';

const PasswordStrengthChecker: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [strength, setStrength] = useState<string>('Weak');

  const checkPasswordStrength = (value: string) => {
    let score = 0;

    // Check the length of the password
    if (value.length >= 8) {
      score += 1;
    }

    // Check for uppercase letters
    if (/[A-Z]/.test(value)) {
      score += 1;
    }

    // Check for lowercase letters
    if (/[a-z]/.test(value)) {
      score += 1;
    }

    // Check for digits
    if (/\d/.test(value)) {
      score += 1;
    }

    // Check for special characters
    if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(value)) {
      score += 1;
    }

    // Determine the strength based on the score
    if (score <= 1) {
      setStrength('Very Weak');
    } else if (score <= 2) {
      setStrength('Weak');
    } else if (score <= 3) {
      setStrength('Medium');
    } else if (score <= 4) {
      setStrength('Strong');
    } else if (score === 5) {
      setStrength('Very Strong');
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
    checkPasswordStrength(value);
  };

  const getStrengthBarColor = (strength: string) => {
    switch (strength) {
      case 'Very Weak':
        return 'w-1/5 h-3 bg-red-500 rounded-md';
      case 'Weak':
        return 'w-2/5 h-3 bg-red-300 rounded-md';
      case 'Medium':
        return 'w-3/5 h-3 bg-yellow-300 rounded-md';
      case 'Strong':
        return 'w-4/5 h-3 bg-green-300 rounded-md';
      case 'Very Strong':
        return 'w-full h-3 bg-green-600 rounded-md';
      default:
        return 'bg-gray-400 rounded-md';
    }
  };

  const strengthBarClasses = `h-2 rounded ${getStrengthBarColor(strength)}`;

  return (
    <div className='min-h-screen bg-biloba-flower-100 py-8 lg:py-10'>
      <div className='max-w-7xl mx-auto'>
        <div className='p-4 max-w-lg mx-auto'>
          <h2 className='text-3xl mb-4 font-lexend font-bold text-center py-6 text-biloba-flower-700'>
            Password Strength Checker
          </h2>
          <label className='block mb-3 font-poppins'>
            Enter Password:
            <input
              type='password'
              className='w-full border-2 rounded-md px-3 py-2 border-biloba-flower-500 shadow-sm focus:outline-none focus:border-cornflower-500'
              placeholder='Password'
              value={password}
              onChange={handlePasswordChange}
            />
          </label>

          {password && (
            <div className='mt-4'>
              <h3 className='text-lg font-lexend'>Password Strength:</h3>
              <div className='bg-gray-400 h-3 rounded-md mt-2'>
                <div className={strengthBarClasses}></div>
              </div>
              <p className='text-lg font-semibold text-biloba-flower-600 mt-2 font-poppins'>
                {strength}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordStrengthChecker;
