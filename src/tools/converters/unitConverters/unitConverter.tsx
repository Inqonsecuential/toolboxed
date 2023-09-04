import React from 'react';
import { Tab } from '@headlessui/react';
import LengthConverter from '@/tools/converters/unitConverters/length';
import AreaConverter from '@/tools/converters/unitConverters/area';
import TemperatureConverter from '@/tools/converters/unitConverters/temp';
import TimeConverter from '@/tools/converters/unitConverters/time';
import VolumeConverter from '@/tools/converters/unitConverters/volume';
import DigitalStorageUnitConverter from '@/tools/converters/unitConverters/storage';

const UnitConverter = () => {
  return (
    <div className='min-h-screen bg-biloba-flower-100 py-8 lg:py-10'>
      <div className='max-w-7xl mx-auto px-3'>
        <Tab.Group>
          <Tab.List className='flex items-center justify-between lg:space-x-3 flex-wrap lg:flex-nowrap border-2 rounded-md overflow-hidden border-biloba-flower-700 font-lexend text-biloba-flower-700'>
            <Tab
              className={
                'px-3 py-2 w-full ui-selected:bg-biloba-flower-700 ui-selected:text-white ui-not-selected:bg-biloba-flower-100 ui-not-selected:text-biloba-flower-700'
              }
            >
              Length
            </Tab>
            <Tab
              className={
                'px-3 py-2 w-full ui-selected:bg-biloba-flower-700 ui-selected:text-white ui-not-selected:bg-biloba-flower-100 ui-not-selected:text-biloba-flower-700'
              }
            >
              Area
            </Tab>
            <Tab
              className={
                'px-3 py-2 w-full ui-selected:bg-biloba-flower-700 ui-selected:text-white ui-not-selected:bg-biloba-flower-100 ui-not-selected:text-biloba-flower-700'
              }
            >
              Temperature
            </Tab>
            <Tab
              className={
                'px-3 py-2 w-full ui-selected:bg-biloba-flower-700 ui-selected:text-white ui-not-selected:bg-biloba-flower-100 ui-not-selected:text-biloba-flower-700'
              }
            >
              Time
            </Tab>
            <Tab
              className={
                'px-3 py-2 w-full ui-selected:bg-biloba-flower-700 ui-selected:text-white ui-not-selected:bg-biloba-flower-100 ui-not-selected:text-biloba-flower-700'
              }
            >
              Volume
            </Tab>
            <Tab
              className={
                'px-3 py-2 w-full ui-selected:bg-biloba-flower-700 ui-selected:text-white ui-not-selected:bg-biloba-flower-100 ui-not-selected:text-biloba-flower-700'
              }
            >
              Digital Storage
            </Tab>
          </Tab.List>
          <Tab.Panels className=''>
            <Tab.Panel>
              <LengthConverter />
            </Tab.Panel>
            <Tab.Panel>
              <AreaConverter />
            </Tab.Panel>
            <Tab.Panel>
              <TemperatureConverter />
            </Tab.Panel>
            <Tab.Panel>
              <TimeConverter />
            </Tab.Panel>
            <Tab.Panel>
              <VolumeConverter />
            </Tab.Panel>
            <Tab.Panel>
              <DigitalStorageUnitConverter />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default UnitConverter;
