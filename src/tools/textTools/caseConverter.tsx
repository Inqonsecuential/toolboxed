import React, { useState } from 'react';
import { IoCopyOutline } from 'react-icons/io5';

const TextCaseConverter: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [convertedText, setConvertedText] = useState<string>('');
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const convertToUppercase = () => {
    setConvertedText(inputText.toUpperCase());
  };

  const convertToSentenceCase = () => {
    const sentences = inputText.split('. ');
    const capitalizedSentences = sentences.map((sentence) => {
      return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
    });
    setConvertedText(capitalizedSentences.join('. '));
  };

  const convertToLowercase = () => {
    setConvertedText(inputText.toLowerCase());
  };

  const convertToReverseCase = () => {
    const reverseText = inputText.split('').reverse().join('');
    setConvertedText(reverseText);
  };

  const convertToMirroredCase = () => {
    const mirroredText = inputText.split('').reverse().join('') + inputText;
    setConvertedText(mirroredText);
  };

  const convertToCapitalizedCase = () => {
    const words = inputText.split(' ');
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    setConvertedText(capitalizedWords.join(' '));
  };

  const convertToAlternatingCase = () => {
    const alternatingText = inputText
      .split('')
      .map((char, index) =>
        index % 2 === 0 ? char.toUpperCase() : char.toLowerCase(),
      )
      .join('');
    setConvertedText(alternatingText);
  };

  const convertToTitleCase = () => {
    const words = inputText.split(' ');
    const titleCaseWords = words.map((word, index) => {
      const lowercasedWord = word.toLowerCase();
      if (
        index === 0 || // First word of title or heading
        (index > 0 && words[index - 1].endsWith(':')) || // First word after a colon
        (index > 0 && words[index - 1].endsWith('—')) || // First word after an em dash
        (index > 0 && words[index - 1].endsWith('.') && index !== 1) // First word after end punctuation
      ) {
        return lowercasedWord.charAt(0).toUpperCase() + lowercasedWord.slice(1);
      } else if (
        word.length >= 4 || // Major words
        (word.includes('-') && word.split('-')[1].length >= 4) // Second part of hyphenated major words
      ) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      } else if (index > 0 && ['a', 'an', 'the'].includes(lowercasedWord)) {
        return lowercasedWord;
      } else if (lowercasedWord.length <= 3) {
        return lowercasedWord;
      } else {
        return lowercasedWord.charAt(0).toUpperCase() + lowercasedWord.slice(1);
      }
    });
    setConvertedText(titleCaseWords.join(' '));
  };

  const convertToInverseCase = () => {
    const inverseText = inputText
      .split('')
      .map((char) =>
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase(),
      )
      .join('');
    setConvertedText(inverseText);
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
        <h2 className='text-3xl font-lexend font-bold text-center pb-6 text-biloba-flower-700'>
          Text Case Converter
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
                onClick={convertToUppercase}
              >
                Uppercase
              </button>
              <button
                className='px-3 py-2 font-poppins bg-biloba-flower-600 hover:bg-biloba-flower-700 text-white rounded-md focus:outline-none'
                onClick={convertToSentenceCase}
              >
                Sentence Case
              </button>
              <button
                className='px-3 py-2 font-poppins bg-biloba-flower-600 hover:bg-biloba-flower-700 text-white rounded-md focus:outline-none'
                onClick={convertToLowercase}
              >
                Lowercase
              </button>
              <button
                className='px-3 py-2 font-poppins bg-biloba-flower-600 hover:bg-biloba-flower-700 text-white rounded-md focus:outline-none'
                onClick={convertToCapitalizedCase}
              >
                Capitalized Case
              </button>
              <button
                className='px-3 py-2 font-poppins bg-biloba-flower-600 hover:bg-biloba-flower-700 text-white rounded-md focus:outline-none'
                onClick={convertToAlternatingCase}
              >
                Alternating Case
              </button>
              <button
                className='px-3 py-2 font-poppins bg-biloba-flower-600 hover:bg-biloba-flower-700 text-white rounded-md focus:outline-none'
                onClick={convertToTitleCase}
              >
                Title Case
              </button>
              <button
                className='px-3 py-2 font-poppins bg-biloba-flower-600 hover:bg-biloba-flower-700 text-white rounded-md focus:outline-none'
                onClick={convertToInverseCase}
              >
                Inverse Case
              </button>
              <button
                className='px-3 py-2 font-poppins bg-biloba-flower-600 hover:bg-biloba-flower-700 text-white rounded-md focus:outline-none'
                onClick={convertToReverseCase}
              >
                Reverse Text
              </button>
              <button
                className='px-3 py-2 font-poppins bg-biloba-flower-600 hover:bg-biloba-flower-700 text-white rounded-md focus:outline-none'
                onClick={convertToMirroredCase}
              >
                Mirror Text
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

export default TextCaseConverter;
