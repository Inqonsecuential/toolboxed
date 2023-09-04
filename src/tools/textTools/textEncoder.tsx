import React, { useState } from 'react';
import { IoCopyOutline } from 'react-icons/io5';

const TextEncoder: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [convertedText, setConvertedText] = useState<string>('');
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const convertToBinary = () => {
    const binary = inputText
      .split('')
      .map((char) => char.charCodeAt(0).toString(2))
      .join(' ');
    setConvertedText(binary);
  };

  const convertToHex = () => {
    const hex = inputText
      .split('')
      .map((char) => char.charCodeAt(0).toString(16))
      .join(' ');
    setConvertedText(hex);
  };

  const convertToOctal = () => {
    const octal = inputText
      .split('')
      .map((char) => char.charCodeAt(0).toString(8))
      .join(' ');
    setConvertedText(octal);
  };

  const convertToBase16 = () => {
    const base16 = inputText
      .split('')
      .map((char) => char.charCodeAt(0).toString(16))
      .join(' ');
    setConvertedText(base16);
  };

  const convertToBase32 = () => {
    const base32 = inputText
      .split('')
      .map((char) => char.charCodeAt(0).toString(32))
      .join(' ');
    setConvertedText(base32);
  };

  const convertToBase64 = () => {
    const base64 = btoa(inputText);
    setConvertedText(base64);
  };

  const convertToMorse = () => {
    const morseCodeMap: { [key: string]: string } = {
      a: '.-',
      b: '-...',
      c: '-.-.',
      d: '-..',
      e: '.',
      f: '..-.',
      g: '--.',
      h: '....',
      i: '..',
      j: '.---',
      k: '-.-',
      l: '.-..',
      m: '--',
      n: '-.',
      o: '---',
      p: '.--.',
      q: '--.-',
      r: '.-.',
      s: '...',
      t: '-',
      u: '..-',
      v: '...-',
      w: '.--',
      x: '-..-',
      y: '-.--',
      z: '--..',
      '0': '-----',
      '1': '.----',
      '2': '..---',
      '3': '...--',
      '4': '....-',
      '5': '.....',
      '6': '-....',
      '7': '--...',
      '8': '---..',
      '9': '----.',
      ' ': '/',
    };

    const morseCode = inputText
      .toLowerCase()
      .split('')
      .map((char) => morseCodeMap[char] || char)
      .join(' ');
    setConvertedText(morseCode);
  };

  const convertToLeetSpeak = () => {
    const leetSpeak = inputText
      .toLowerCase()
      .replace(/a/g, '4')
      .replace(/e/g, '3')
      .replace(/l/g, '1')
      .replace(/t/g, '7');
    setConvertedText(leetSpeak);
  };

  const convertToPigLatin = () => {
    const words = inputText.split(' ');
    const pigLatinWords = words.map((word) => {
      const firstLetter = word[0].toLowerCase();
      if (/[aeiou]/.test(firstLetter)) {
        return word + 'ay';
      } else {
        const consonantCluster = word.match(/^[^aeiou]+/);
        if (consonantCluster) {
          return (
            word.slice(consonantCluster[0].length) + consonantCluster[0] + 'ay'
          );
        } else {
          return word + 'ay';
        }
      }
    });
    setConvertedText(pigLatinWords.join(' '));
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
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl font-lexend text-center font-bold pb-6 text-biloba-flower-700'>
          Text Encoder
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-3'>
          <div className=''>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className='border-biloba-flower-700 bg-biloba-flower-50 border-2 rounded-md w-full h-72 p-3 font-poppins text-biloba-flower-700 focus:outline-none focus:border-cornflower-500 focus:ring-biloba-flower-500'
              placeholder='Enter text...'
            />
            <div className='flex gap-3 flex-wrap justify-center mt-4'>
              <button
                className='px-3 py-2 font-poppins bg-biloba-flower-600 hover:bg-biloba-flower-700 text-white rounded-md focus:outline-none'
                onClick={() => convertToBinary()}
              >
                Binary
              </button>
              <button
                className='px-3 py-2 font-poppins bg-biloba-flower-600 hover:bg-biloba-flower-700 text-white rounded-md focus:outline-none'
                onClick={convertToHex}
              >
                Hex
              </button>
              <button
                className='px-3 py-2 font-poppins bg-biloba-flower-600 hover:bg-biloba-flower-700 text-white rounded-md focus:outline-none'
                onClick={convertToOctal}
              >
                Octal
              </button>
              <button
                className='px-3 py-2 font-poppins bg-biloba-flower-600 hover:bg-biloba-flower-700 text-white rounded-md focus:outline-none'
                onClick={convertToBase16}
              >
                Base16
              </button>
              <button
                className='px-3 py-2 font-poppins bg-biloba-flower-600 hover:bg-biloba-flower-700 text-white rounded-md focus:outline-none'
                onClick={convertToBase32}
              >
                Base32
              </button>
              <button
                className='px-3 py-2 font-poppins bg-biloba-flower-600 hover:bg-biloba-flower-700 text-white rounded-md focus:outline-none'
                onClick={convertToBase64}
              >
                Base64
              </button>
              <button
                className='px-3 py-2 font-poppins bg-biloba-flower-600 hover:bg-biloba-flower-700 text-white rounded-md focus:outline-none'
                onClick={convertToMorse}
              >
                Morse Code
              </button>
              <button
                className='px-3 py-2 font-poppins bg-biloba-flower-600 hover:bg-biloba-flower-700 text-white rounded-md focus:outline-none'
                onClick={convertToLeetSpeak}
              >
                1337 Speak
              </button>
              <button
                className='px-3 py-2 font-poppins bg-biloba-flower-600 hover:bg-biloba-flower-700 text-white rounded-md focus:outline-none'
                onClick={convertToPigLatin}
              >
                Pig Latin
              </button>
            </div>
          </div>
          <div className='border-biloba-flower-700 bg-biloba-flower-50 border-2 rounded-md w-full h-72 p-3 font-poppins text-biloba-flower-700 focus:outline-none focus:border-cornflower-500 focus:ring-biloba-flower-500'>
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

export default TextEncoder;
