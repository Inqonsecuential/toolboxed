import React, { useState } from 'react';
import Image from 'next/image';
import { IoCopyOutline } from 'react-icons/io5';

const PlaceholderImageGenerator: React.FC = () => {
  const [width, setWidth] = useState<string>('300');
  const [height, setHeight] = useState<string>('250');
  const [bgColor, setBgColor] = useState<string>('#cccccc');
  const [textColor, setTextColor] = useState<string>('#000000');
  const [text, setText] = useState<string>('');
  const [imageFormat, setImageFormat] = useState<string>('gif');
  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(null);

  const handleGenerateImage = () => {
    const encodedText = encodeURIComponent(text);
    const imageUrl = `https://dummyimage.com/${width}x${height}/${bgColor.slice(
      1,
    )}/${textColor.slice(1)}.${imageFormat}${
      encodedText ? '&text=' + encodedText : ''
    }`;

    setPreviewImageUrl(imageUrl);
  };

  const handleDownloadImage = () => {
    if (previewImageUrl) {
      // Create an invisible anchor element
      const downloadLink = document.createElement('a');
      downloadLink.href = previewImageUrl;
      downloadLink.download = `placeholder_image.${imageFormat}`;

      // Trigger a click event on the anchor element
      downloadLink.style.display = 'none';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  const handleCopyToClipboard = () => {
    if (previewImageUrl) {
      navigator.clipboard.writeText(previewImageUrl);
    }
  };

  return (
    <div className='min-h-screen py-y lg:py-10 bg-biloba-flower-100'>
      <div className='max-w-7xl mx-auto p-4'>
        <div className='max-w-lg mx-auto'>
          <h1 className='text-3xl font-semibold py-6 lg:py-10 font-lexend text-biloba-flower-700'>
            Placeholder Image Generator
          </h1>
          <div className='flex items-center justify-start space-x-4'>
            <div className='mb-4'>
              <label className='block text-sm pb-2 font-poppins'>
                Width (px):
              </label>
              <input
                type='text'
                className='w-20 rounded-md font-poppins px-3 py-2 border-2 border-biloba-flower-500 focus:outline-none focus:border-cornflower-500 focus:ring-biloba-flower-500 ring-biloba-flower-500'
                value={width}
                onChange={(e) => setWidth(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label className='block text-sm pb-2 font-poppins'>
                Height (px):
              </label>
              <input
                type='text'
                className='w-20 rounded-md px-3 py-2 font-poppins border-2 border-biloba-flower-500 focus:outline-none focus:border-cornflower-500 focus:ring-biloba-flower-500 ring-biloba-flower-500'
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
          </div>
          <div className='flex items-center justify-start space-x-3'>
            <div className='mb-4'>
              <label className='block text-sm font-poppins pb-2'>
                Background Color:
              </label>
              <input
                type='color'
                className='w-32 h-10 border-2 border-biloba-flower-500 rounded-md px-2 py-1'
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-poppins pb-2'>
                Text Color:
              </label>
              <input
                type='color'
                className='w-32 h-10 border-2 border-biloba-flower-500 rounded-md px-2 py-1'
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
              />
            </div>
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-poppins pb-2'>
              Custom Text (Optional)
            </label>
            <input
              type='text'
              className='w-full max-w-md rounded-md px-3 py-2 font-poppins border-2 border-biloba-flower-500 focus:outline-none focus:border-cornflower-500 focus:ring-biloba-flower-500 ring-biloba-flower-500'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label className='block'>Image Format:</label>
            <select
              className='w-20 rounded-md px-3 py-2 font-poppins border-2 border-biloba-flower-500 focus:outline-none focus:border-cornflower-500 focus:ring-biloba-flower-500 ring-biloba-flower-500'
              value={imageFormat}
              onChange={(e) => setImageFormat(e.target.value)}
            >
              <option value='gif'>GIF</option>
              <option value='jpg'>JPG</option>
              <option value='png'>PNG</option>
            </select>
          </div>
          <button
            className='bg-biloba-flower-500 hover:to-biloba-flower-600 font-poppins text-white px-4 py-2 rounded mr-2'
            onClick={handleGenerateImage}
          >
            Generate Placeholder Image
          </button>
          <button
            className='bg-cornflower-600 hover:bg-cornflower-700 font-poppins text-white px-4 py-2 rounded'
            onClick={handleDownloadImage}
            disabled={!previewImageUrl}
          >
            Download Image
          </button>
          {previewImageUrl && (
            <div className='mt-4'>
              <h2 className='text-lg font-semibold mb-2 font-lexend'>
                Image Preview
              </h2>
              <Image
                src={previewImageUrl}
                alt='Placeholder'
                className='mt-2 rounded-md'
                priority
                height={+height}
                width={+width}
              />
              <div className='mt-4'>
                <label className='block font-poppins'>Image URL:</label>
                <div className='w-full flex items-center justify-between px-3 py-2 font-poppins bg-biloba-flower-200 border-2 border-biloba-flower-500 cursor-text rounded-md '>
                  <div className='truncate'>{previewImageUrl}</div>
                  <button onClick={handleCopyToClipboard}>
                    <IoCopyOutline className='inline-block text-biloba-flower-500 hover:text-biloba-flower-700 text-xl' />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaceholderImageGenerator;
