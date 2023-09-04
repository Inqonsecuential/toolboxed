import { useState, useEffect } from 'react';
import { GoCopy } from 'react-icons/go';

const generateRandomPassword = (
  length: number,
  options: { numbers: boolean; uppercase: boolean; special: boolean },
): string => {
  let charset = 'abcdefghijklmnopqrstuvwxyz';
  if (options.uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (options.numbers) charset += '0123456789';
  if (options.special) charset += '!@#$%^&*()_-+=';

  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
};

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState<number>(12);
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [generatedPasswords, setGeneratedPasswords] = useState<string[]>([]);
  const [showCopiedTooltip, setShowCopiedTooltip] = useState(false);
  const [options, setOptions] = useState({
    numbers: true,
    uppercase: true,
    special: true,
  });

  // Load saved passwords and generated passwords from local storage on initial render
  useEffect(() => {
    const savedPasswords = localStorage.getItem('generatedPasswords');
    if (savedPasswords) {
      setGeneratedPasswords(JSON.parse(savedPasswords));
    }
  }, []);

  // Save generated passwords and last 5 passwords to local storage whenever they change
  useEffect(() => {
    localStorage.setItem(
      'generatedPasswords',
      JSON.stringify(generatedPasswords),
    );
  }, [generatedPasswords]);

  // Save generated passwords and last 5 passwords to local storage whenever they change

  useEffect(() => {
    localStorage.setItem(
      'generatedPasswords',
      JSON.stringify(generatedPasswords),
    );
  }, [generatedPasswords]);

  const handleGeneratePassword = () => {
    const newPassword = generateRandomPassword(passwordLength, options);
    setGeneratedPassword(newPassword);
    const updatedGeneratedPasswords = [
      newPassword,
      ...generatedPasswords.slice(0, 4),
    ];
    setGeneratedPasswords(updatedGeneratedPasswords);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(generatedPassword);
    setShowCopiedTooltip(true);
    setTimeout(() => {
      setShowCopiedTooltip(false);
    }, 1500); // Hide the tooltip after 1.5 seconds
  };

  const handleClearLocalStorage = () => {
    localStorage.removeItem('generatedPasswords');
    setGeneratedPasswords([]);
  };

  return (
    <div className='min-h-screen bg-biloba-flower-100 py-8 lg:py-10'>
      <div className='bg-biloba-flower-50 p-6 rounded max-w-2xl mx-auto shadow-md'>
        <h1 className='text-3xl font-semibold mb-4 text-biloba-flower-700 font-lexend'>
          Password Generator
        </h1>
        <div className='flex items-center justify-start space-x-3'>
          <label className='block text-biloba-flower-700 font-poppins'>
            Password Length:
          </label>
          <input
            type='text'
            value={passwordLength.toString()}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '');
              setPasswordLength(parseInt(value));
            }}
            className='w-16 px-3 py-2 border-2 rounded-md focus:outline-none border-biloba-flower-500 focus:ring focus:border-cornflower-500 font-poppins text-center'
          />
        </div>
        <div className='flex flex-col lg:flex-row items-start space-y-2 lg:space-y-0 justify-start mt-4 lg:space-x-4 font-poppins text-sm'>
          <div className='flex'>
            <input
              type='checkbox'
              checked={options.numbers}
              onChange={() =>
                setOptions((prevOptions) => ({
                  ...prevOptions,
                  numbers: !prevOptions.numbers,
                }))
              }
              className='mr-1 accent-biloba-flower-600'
            />
            <label>Include Numbers</label>
          </div>
          <div className='flex'>
            <input
              type='checkbox'
              checked={options.uppercase}
              onChange={() =>
                setOptions((prevOptions) => ({
                  ...prevOptions,
                  uppercase: !prevOptions.uppercase,
                }))
              }
              className='mr-1 accent-biloba-flower-600'
            />
            <label>Include Uppercase Letters</label>
          </div>
          <div className='flex'>
            <input
              type='checkbox'
              checked={options.special}
              onChange={() =>
                setOptions((prevOptions) => ({
                  ...prevOptions,
                  special: !prevOptions.special,
                }))
              }
              className='mr-1 accent-biloba-flower-600'
            />
            <label>Include Special Characters</label>
          </div>
        </div>
        <button
          onClick={handleGeneratePassword}
          className='mt-4 px-4 py-2 text-base bg-biloba-flower-600 text-white rounded-md hover:bg-biloba-flower-700 focus:outline-none focus:ring focus:bg-biloba-flower-700 font-poppins'
        >
          Generate Password
        </button>
        {generatedPassword && (
          <div className='mt-6'>
            <h2 className='text-lg font-semibold text-biloba-flower-900 font-lexend'>
              Generated Password
            </h2>
            <div className='mt-2 p-3 bg-biloba-flower-200 rounded-lg flex items-center'>
              <p className='text-biloba-flower-900 flex-grow font-lexend'>
                {generatedPassword}
              </p>
              <button
                onClick={handleCopyToClipboard}
                className='px-3 py-3 bg-biloba-flower-600 text-white rounded-md hover:bg-biloba-flower-700 focus:outline-none focus:ring focus:bg-biloba-flower-700 relative'
              >
                <GoCopy className='text-lg font-extrabold' />
                {showCopiedTooltip && (
                  <span className='absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-biloba-flower-400 text-biloba-flower-800 px-3 py-2 rounded text-xs font-poppins'>
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </div>
        )}

        <div className='mt-6'>
          <h2 className='text-lg font-semibold text-biloba-flower-700 font-lexend'>
            Last 5 Passwords
          </h2>
          <ul className='mt-2 space-y-2'>
            {generatedPasswords.map((password, index) => (
              <li key={index} className='text-biloba-flower-900 font-lexend'>
                {password}
              </li>
            ))}
          </ul>
          {generatedPasswords.length > 5 && (
            <button
              onClick={() =>
                setGeneratedPasswords(generatedPasswords.slice(0, 5))
              }
              className='mt-2 text-biloba-flower-800 hover:underline focus:outline-none'
            >
              Show Less
            </button>
          )}
        </div>
        {generatedPasswords.length > 0 && (
          <div className='mt-6'>
            <button
              onClick={handleClearLocalStorage}
              className='px-3 py-1 bg-cornflower-600 text-white rounded-md hover:bg-cornflower-600 focus:outline-none focus:ring focus:bg-cornflower-600 font-poppins'
            >
              Clear Passwords
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordGenerator;
