import React, { useState } from 'react';
import axios from 'axios';
import { CgDanger } from 'react-icons/cg';
import { AiFillSafetyCertificate } from 'react-icons/ai';

const API_URL = 'https://api.pwnedpasswords.com/range/';

const PasswordChecker: React.FC = () => {
  const [password, setPassword] = useState('');
  const [isCompromised, setIsCompromised] = useState(false);
  const [breachCount, setBreachCount] = useState<number | null>(null);
  const [hasCheckedPassword, setHasCheckedPassword] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const checkPassword = async () => {
    if (password) {
      const hashedPassword = sha1(password).toUpperCase();
      const prefix = hashedPassword.slice(0, 5);
      const suffix = hashedPassword.slice(5);

      try {
        const response = await axios.get(`${API_URL}${prefix}`);
        const hashes = response.data.split('\n');

        const compromisedHash = hashes.find((hash: string) =>
          hash.startsWith(suffix),
        );

        if (compromisedHash) {
          setIsCompromised(true);
          const [, count] = compromisedHash.split(':');
          setBreachCount(parseInt(count));
        } else {
          setIsCompromised(false);
          setBreachCount(0);
        }

        setHasCheckedPassword(true); // Mark that password has been checked
      } catch (error) {
        console.error('Error checking password:', error);
      }
    }
  };

  return (
    <div className='bg-biloba-flower-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <h3 className='text-3xl font-lexend text-center py-8 lg:py-10 font-bold text-biloba-flower-700'>
          Password Checker
        </h3>
        <div className='w-full mx-auto flex items-center justify-center flex-col'>
          <input
            type='password'
            className='w-full max-w-xl border-biloba-flower-500 text-center border-2 rounded-md px-3 py-3 font-poppins text-biloba-flower-700 focus:outline-none focus:border-cornflower-500'
            placeholder='Enter your password'
            value={password}
            onChange={handleChange}
          />
          <div>
            <button
              onClick={checkPassword}
              className='mt-4 px-3 py-2 border-2 rounded-md font-poppins text-sm font-medium text-white bg-biloba-flower-600 hover:bg-biloba-flower-700 focus:outline-none'
            >
              Check your Password
            </button>
          </div>
        </div>
        {hasCheckedPassword && (
          <div className='text-xl text-center font-poppins mt-4 font-semibold'>
            {isCompromised ? (
              <div className='flex items-center justify-center text-biloba-flower-900 flex-col lg:flex-row'>
                <CgDanger className='text-3xl mr-2 text-red-700' /> This
                password has been compromised in {breachCount} data breach(es).
                Please choose a different one.
              </div>
            ) : (
              <div className='flex items-center justify-center text-biloba-flower-900 flex-col lg:flex-row'>
                <AiFillSafetyCertificate className='text-3xl mr-2 text-green-700' />{' '}
                This password has not been compromised.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordChecker;

// Helper function to compute SHA-1 hash (not recommended for security-sensitive applications)
function sha1(input: string): string {
  const crypto = require('crypto');
  const hash = crypto.createHash('sha1');
  hash.update(input);
  return hash.digest('hex');
}
