import React, { useState } from 'react';
import imageCompression from 'browser-image-compression';
import ConditionalImage from '@/components/conditionalImage';
import { VscCloudUpload } from 'react-icons/vsc';

interface ImageData {
  progress: number | null;
  inputSize: string | null;
  outputSize: string | null;
  inputUrl: string | null;
  outputUrl: string | null;
}

const ImageCompressor = () => {
  const [maxSizeMB, setMaxSizeMB] = useState<number>(1);
  const [maxWidthOrHeight, setMaxWidthOrHeight] = useState<number>(1024);
  const [webWorker, setWebWorker] = useState<ImageData>({
    progress: null,
    inputSize: null,
    outputSize: null,
    inputUrl: null,
    outputUrl: null,
  });
  const [mainThread, setMainThread] = useState<ImageData>({
    progress: null,
    inputSize: null,
    outputSize: null,
    inputUrl: null,
    outputUrl: null,
  });

  const handleChange =
    (target: 'maxSizeMB' | 'maxWidthOrHeight') =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (target === 'maxSizeMB') {
        setMaxSizeMB(Number(e.currentTarget.value));
      } else if (target === 'maxWidthOrHeight') {
        setMaxWidthOrHeight(Number(e.currentTarget.value));
      }
    };

  const onProgress = (p: number, useWebWorker: boolean) => {
    const targetName = useWebWorker ? 'webWorker' : 'mainThread';
    if (useWebWorker) {
      setWebWorker((prevState) => ({
        ...prevState,
        progress: p,
      }));
    } else {
      setMainThread((prevState) => ({
        ...prevState,
        progress: p,
      }));
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const files: FileList = e.dataTransfer.files;
      const file = files[0];
      compressImage(
        { target: { files: files } } as React.ChangeEvent<HTMLInputElement>,
        true,
      );
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const compressImage = async (
    event: React.ChangeEvent<HTMLInputElement>,
    useWebWorker: boolean,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;
    console.log('input', file);
    console.log(
      'ExifOrientation',
      await imageCompression.getExifOrientation(file),
    );
    const targetName = useWebWorker ? 'webWorker' : 'mainThread';
    if (useWebWorker) {
      setWebWorker((prevState) => ({
        ...prevState,
        inputSize: (file.size / 1024 / 1024).toFixed(2),
        inputUrl: URL.createObjectURL(file),
      }));
    } else {
      setMainThread((prevState) => ({
        ...prevState,
        inputSize: (file.size / 1024 / 1024).toFixed(2),
        inputUrl: URL.createObjectURL(file),
      }));
    }
    const options = {
      maxSizeMB: maxSizeMB,
      maxWidthOrHeight: maxWidthOrHeight,
      useWebWorker,
      onProgress: (p: number) => onProgress(p, useWebWorker),
    };
    const output = await imageCompression(file, options);
    console.log('output', output);
    if (useWebWorker) {
      setWebWorker((prevState) => ({
        ...prevState,
        outputSize: (output.size / 1024 / 1024).toFixed(2),
        outputUrl: URL.createObjectURL(output),
      }));
    } else {
      setMainThread((prevState) => ({
        ...prevState,
        outputSize: (output.size / 1024 / 1024).toFixed(2),
        outputUrl: URL.createObjectURL(output),
      }));
    }
  };

  return (
    <div className='bg-biloba-flower-100 min-h-screen py-8 lg:py-10'>
      <h1 className='font-lexend text-3xl py-8 lg:py-10 font-bold text-center text-biloba-flower-700'>
        Image Compressor
      </h1>
      <div className='max-w-7xl mx-auto px-3'>
        <div className='font-poppins max-w-lg mx-auto space-y-3'>
          <div className='flex items-center justify-start'>
            <label htmlFor='maxSizeMB' className='w-36'>
              Max Size (MB):{' '}
            </label>
            <input
              type='number'
              id='maxSizeMB'
              name='maxSizeMB'
              value={maxSizeMB}
              onChange={handleChange('maxSizeMB')}
              className='px-3 py-2 text-center text-lg rounded-md border-2 border-biloba-flower-500 focus:border-cornflower-500 focus:outline-none transition duration-150'
            />
          </div>
          <div className='flex items-center justify-start'>
            <label htmlFor='maxWidthOrHeight' className='w-36'>
              Max Width
            </label>
            <input
              type='number'
              id='maxWidthOrHeight'
              name='maxWidthOrHeight'
              value={maxWidthOrHeight}
              onChange={handleChange('maxWidthOrHeight')}
              className='px-3 py-2 text-center text-lg rounded-md border-2 border-biloba-flower-500 focus:border-cornflower-500 focus:outline-none transition duration-150'
            />
          </div>
        </div>
        <div className='grid lg:grid-cols-2 gap-4 py-6'>
          <div>
            <div
              className='flex items-start justify-center flex-col py-3 text-biloba-flower-900 font-poppins'
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <div className='text-xl font-lexend py-3 text-left'>
                Compress in web-worker
              </div>
              <div className='text-sm'>
                <span className='font-bold'>Asynchronously</span> optimizes
                images in the background, ensuring a seamless user experience
                with progress tracking and no main-thread interruptions.
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <label
                htmlFor='web-worker'
                className='flex flex-col items-center justify-center w-full h-64 border-2 border-biloba-flower-500 border-dashed rounded-lg cursor-pointer bg-biloba-flower-200'
              >
                <div className='flex flex-col items-center justify-center pt-5 pb-6 font-poppins'>
                  <VscCloudUpload className='text-2xl text-biloba-flower-600' />
                  <p className='mb-2 text-sm text-biloba-flower-600'>
                    <span className='font-semibold'>Click to upload</span> or
                    drag and drop
                  </p>
                </div>
                <input
                  id='web-worker'
                  type='file'
                  accept='image/*'
                  className='hidden'
                  onChange={(e) => compressImage(e, true)}
                />
              </label>
            </div>
          </div>
          <div>
            <div
              className='flex items-start justify-center flex-col py-3 text-biloba-flower-900 font-poppins'
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <div className='text-xl font-lexend py-3 text-left'>
                Compress in main-thread
              </div>
              <div className='text-sm'>
                <span className='font-bold'>Synchronously</span> compresses
                images, potentially causing delays in user interactions, making
                it less suitable for large image files.
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <label
                htmlFor='main-thread'
                className='flex flex-col items-center justify-center w-full h-64 border-2 border-biloba-flower-500 border-dashed rounded-lg cursor-pointer bg-biloba-flower-200'
              >
                <div className='flex flex-col items-center justify-center pt-5 pb-6 font-poppins'>
                  <VscCloudUpload className='text-2xl text-biloba-flower-600' />
                  <p className='mb-2 text-sm text-biloba-flower-600'>
                    <span className='font-semibold'>Click to upload</span> or
                    drag and drop
                  </p>
                </div>
                <input
                  id='main-thread'
                  type='file'
                  accept='image/*'
                  className='hidden'
                  onChange={(e) => compressImage(e, false)}
                />
              </label>
            </div>
          </div>
        </div>
        <div className='text-sm pb-6 font-lexend font-light'>
          Note: The difference between web-worker and main-thread compression is
          in performance only. The output will always be same.{' '}
        </div>
        <div>
          {(mainThread.inputUrl || webWorker.inputUrl) && (
            <div className='grid lg:grid-cols-2 gap-3 mx-auto'>
              <div className='mx-auto'>
                <div className='font-lexend text-center py-2 text-biloba-flower-700 font-bold'>
                  Input Preview
                </div>
                <ConditionalImage
                  src={mainThread.inputUrl || webWorker.inputUrl}
                  alt='input'
                  width={500}
                  height={500}
                  className='aspect-square w-full h-full rounded-md'
                />
              </div>
              <div className='mx-auto'>
                <div className='font-lexend text-center py-2 text-biloba-flower-700 font-bold pt-10 lg:pt-2'>
                  Output Preview
                </div>
                <ConditionalImage
                  src={mainThread.outputUrl || webWorker.outputUrl}
                  alt='output'
                  width={500}
                  height={500}
                  className='aspect-auto w-full h-full rounded-md'
                />
              </div>
            </div>
          )}
          <div className='font-poppins pt-3 text-center mt-20 lg:mt-10'>
            {webWorker.inputSize && (
              <>
                <span>Source image size: {webWorker.inputSize} mb</span>
                {webWorker.outputSize && (
                  <span>, Output image size: {webWorker.outputSize} mb</span>
                )}
              </>
            )}

            {mainThread.inputSize && (
              <>
                <span>Source image size: {mainThread.inputSize} mb</span>
                {mainThread.outputSize && (
                  <span>, Output image size: {mainThread.outputSize} mb</span>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCompressor;
