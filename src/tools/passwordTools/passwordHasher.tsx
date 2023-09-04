import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import { GoCopy } from 'react-icons/go'; // Import the GoCopy component or any other copy icon component you prefer

const PasswordHasher: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [hashedPassword, setHashedPassword] = useState<string>('');
  const [isCopied, setIsCopied] = useState(false);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setIsCopied(false); // Reset the copied status when the password changes
  };

  const hashPassword = () => {
    if (password.trim() === '') {
      alert('Please enter a password.');
      return;
    }

    const hash = CryptoJS.SHA256(password).toString();
    setHashedPassword(hash);
  };

  const handleCopyClick = () => {
    if (hashedPassword.trim() !== '') {
      navigator.clipboard
        .writeText(hashedPassword)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 3000); // Hide the "Copied" tooltip after 3 seconds
        })
        .catch((error) => {
          console.error('Failed to copy: ', error);
        });
    }
  };

  return (
    <div className='min-h-screen bg-biloba-flower-100 py-8 lg:py-10'>
      <div className='p-4 max-w-2xl mx-auto'>
        <h2 className='text-2xl mb-4 font-lexend font-bold text-biloba-flower-700'>
          Password Hasher
        </h2>
        <label className='block mb-2 font-poppins'>
          Enter Password:
          <input
            type='password'
            className='w-full border-2 rounded-md mt-2 px-3 py-2 border-biloba-flower-500 shadow-sm focus:outline-none focus:border-cornflower-500'
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button
          className='bg-biloba-flower-500 text-white rounded-md mt-4 px-4 py-2 hover:bg-biloba-flower-700 font-poppins focus:outline-none'
          onClick={hashPassword}
        >
          Hash Password
        </button>

        {hashedPassword && (
          <div className='mt-4'>
            <h3 className='text-base font-poppins'>
              Hashed Password (SHA-256):
            </h3>
            <p className='bg-biloba-flower-400 rounded-md px-4 py-3 text-base font-poppins relative truncate'>
              {hashedPassword}
              <button
                className='bg-biloba-flower-500 hover:bg-biloba-flower-600 text-white text-2xl ml-2 p-1 rounded absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none'
                onClick={handleCopyClick}
              >
                {isCopied ? 'Copied' : <GoCopy />}
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordHasher;
