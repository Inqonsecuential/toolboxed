import React, { useState } from 'react';
import { IoCopyOutline } from 'react-icons/io5';
import CryptoJS from 'crypto-js';

const TextEncryptor: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [convertedText, setConvertedText] = useState<string>('');
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const encryptTextAES = () => {
    const encryptedText = CryptoJS.AES.encrypt(
      inputText,
      process.env.NEXT_PUBLIC_AES_SECRET_KEY as string,
    ).toString();
    setConvertedText(encryptedText);
  };

  const encryptTextDES = () => {
    const encryptedText = CryptoJS.DES.encrypt(
      inputText,
      process.env.NEXT_PUBLIC_DES_SECRET_KEY as string,
    ).toString();
    setConvertedText(encryptedText);
  };

  const encryptTextTripleDES = () => {
    const encryptedText = CryptoJS.TripleDES.encrypt(
      inputText,
      process.env.NEXT_PUBLIC_TRIPLE_DES_SECRET_KEY as string,
    ).toString();
    setConvertedText(encryptedText);
  };

  const encryptTextRabbit = () => {
    const encryptedText = CryptoJS.Rabbit.encrypt(
      inputText,
      process.env.NEXT_PUBLIC_RABBIT_SECRET_KEY as string,
    ).toString();
    setConvertedText(encryptedText);
  };

  const encryptTextRC4 = () => {
    const encryptedText = CryptoJS.RC4.encrypt(
      inputText,
      process.env.NEXT_PUBLIC_RC4_SECRET_KEY as string,
    ).toString();
    setConvertedText(encryptedText);
  };

  const encryptTextRC4Drop = () => {
    const encryptedText = CryptoJS.RC4Drop.encrypt(
      inputText,
      process.env.NEXT_PUBLIC_RC4_DROP_SECRET_KEY as string,
    ).toString();
    setConvertedText(encryptedText);
  };

  const encryptTextSHA1 = () => {
    const encryptedText = CryptoJS.SHA1(
      (inputText + process.env.NEXT_PUBLIC_SHA1_SECRET_KEY) as string,
    ).toString();
    setConvertedText(encryptedText);
  };

  const encryptTextSHA256 = () => {
    const encryptedText = CryptoJS.SHA256(
      (inputText + process.env.NEXT_PUBLIC_SHA256_SECRET_KEY) as string,
    ).toString();
    setConvertedText(encryptedText);
  };

  const copyToClipboard = () => {
    if (convertedText) {
      navigator.clipboard.writeText(convertedText);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000); // Display the message for 3 seconds (3000 milliseconds)
    }
  };

  const clearCopiedStatus = () => {
    setIsCopied(false);
  };

  return (
    <div className='min-h-screen py-8 lg:py-10 bg-biloba-flower-100'>
      <div className='max-w-7xl mx-auto py-8 lg:py-10'>
        <h2 className='text-3xl font-lexend text-center font-bold pb-6 text-biloba-flower-700'>
          Text Encryptor
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-3'>
          <div className=''>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className='border-biloba-flower-700 border-2 bg-biloba-flower-50 rounded-md w-full h-72 p-3 font-poppins text-biloba-flower-700 focus:outline-none focus:border-cornflower-500 focus:ring-biloba-flower-500'
              placeholder='Enter text...'
            />
            <div className='flex gap-3 flex-wrap justify-center mt-4'>
              <button
                className='px-3 py-2 font-poppins bg-biloba-flower-600 hover:bg-biloba-flower-700 text-white rounded-md focus:outline-none'
                onClick={encryptTextAES}
              >
                AES
              </button>
              <button
                className='px-3 py-2 font-poppins bg-biloba-flower-600 hover:bg-biloba-flower-700 text-white rounded-md focus:outline-none'
                onClick={encryptTextDES}
              >
                DES
              </button>
              <button
                className='px-3 py-2 font-poppins bg-biloba-flower-600 hover:bg-biloba-flower-700 text-white rounded-md focus:outline-none'
                onClick={encryptTextTripleDES}
              >
                Triple DES
              </button>
              <button
                className='px-3 py-2 font-poppins bg-biloba-flower-600 hover:bg-biloba-flower-700 text-white rounded-md focus:outline-none'
                onClick={encryptTextRabbit}
              >
                Rabbit
              </button>
              <button
                className='px-3 py-2 font-poppins bg-biloba-flower-600 hover:bg-biloba-flower-700 text-white rounded-md focus:outline-none'
                onClick={encryptTextRC4}
              >
                RC4
              </button>
              <button
                className='px-3 py-2 font-poppins bg-biloba-flower-600 hover:bg-biloba-flower-700 text-white rounded-md focus:outline-none'
                onClick={encryptTextRC4Drop}
              >
                RC4 Drop
              </button>
              <button
                className='px-3 py-2 font-poppins bg-biloba-flower-600 hover:bg-biloba-flower-700 text-white rounded-md focus:outline-none'
                onClick={encryptTextSHA1}
              >
                SHA1
              </button>
              <button
                className='px-3 py-2 font-poppins bg-biloba-flower-600 hover:bg-biloba-flower-700 text-white rounded-md focus:outline-none'
                onClick={encryptTextSHA256}
              >
                SHA256
              </button>
            </div>
          </div>
          <div className='border-biloba-flower-700 border-2 bg-biloba-flower-50 truncate rounded-md w-full h-72 p-3 font-poppins text-biloba-flower-700 focus:outline-none focus:border-cornflower-500 focus:ring-biloba-flower-500'>
            <div className='relative w-full h-full'>
              {convertedText ? convertedText : 'Converted Text'}{' '}
              {isCopied ? (
                <span className='absolute bottom-0 right-0'>
                  Copied to clipboard!
                </span>
              ) : (
                <button
                  onClick={copyToClipboard}
                  onMouseLeave={clearCopiedStatus}
                  className='absolute bottom-0 right-0 focus:outline-none text-sm font-medium text-biloba-flower-500 hover:text-biloba-flower-700'
                >
                  <IoCopyOutline className='inline-block text-biloba-flower-500 hover:text-biloba-flower-700 text-xl' />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextEncryptor;
