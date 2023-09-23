import React from 'react';
import { PiPasswordBold, PiPlaceholder } from 'react-icons/pi';
import {
  BsCheck2Circle,
  BsHash,
  BsCurrencyExchange,
  BsCalendar4Range,
} from 'react-icons/bs';
import { GiStrongbox, GiPayMoney } from 'react-icons/gi';
import { SiConvertio, SiTextpattern } from 'react-icons/si';
import { LuCaseSensitive } from 'react-icons/lu';
import { MdEnhancedEncryption } from 'react-icons/md';
import { AiOutlineCalculator } from 'react-icons/ai';
import { BiArea } from 'react-icons/bi';
import { HiOutlineReceiptTax } from 'react-icons/hi';
import { LuSplit } from 'react-icons/lu';
import { PiClockCountdownFill } from 'react-icons/pi';
import GridComponent from '@/components/gridComponent';

const IndexPage = () => {
  return (
    <div className='min-h-screen bg-biloba-flower-100 py-8 lg:py-10'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='font-lexend text-3xl text-center text-biloba-flower-700 font-bold'>
          ToolBoxed
        </h1>
        <p className='font-poppins mt-4 text-center mx-auto'>
          Your one-stop toolbox for all things practical and playful. From
          calculators to creative generators, we&apos;ve got you covered!
        </p>
        <GridComponent component={links.calculator} category='Calculators' />
        <GridComponent component={links.timers} category='Timers' />
        <GridComponent
          component={links.passwordTools}
          category='Password Tools'
        />
        <GridComponent component={links.textTools} category='Text Tools' />
        <GridComponent
          component={links.unitConverter}
          category='Unit Converter'
        />
        <GridComponent
          component={links.imageTools}
          category='Image Component'
        />
      </div>
    </div>
  );
};

export default IndexPage;

const links = {
  passwordTools: [
    {
      name: 'Password Generator',
      description: 'Generate a totally rad random password!',
      link: '/password-tools/password-generator',
      icon: <PiPasswordBold />,
    },
    {
      name: 'Password Strength Checker',
      description:
        'Find out if your password is as strong as a fortress or just a cardboard box!',
      link: '/password-tools/password-strength-checker',
      icon: <GiStrongbox />,
    },
    {
      name: 'Password Hasher',
      description:
        'Turn your password into a secret code even James Bond would envy!',
      link: '/password-tools/password-hasher',
      icon: <BsHash />,
    },
    {
      name: 'Password Breach Checker',
      description:
        'Discover if your passwords secret life was exposed on the internet!',
      link: '/password-tools/password-breach-checker',
      icon: <BsCheck2Circle />,
    },
  ],
  timers: [
    {
      name: 'Countdown Timer',
      description: 'Countdown to a special event in your life!',
      link: '/timers/countdown-timer',
      icon: <PiClockCountdownFill />,
    },
    {
      name: 'Minutes Countdown',
      description: 'Countdown minutes and seconds!',
      link: '/timers/minutes-countdown',
      icon: <PiClockCountdownFill />,
    },
  ],
  textTools: [
    {
      name: 'Case Converter',
      description:
        'Transform text into uppercase, lowercase, or even give it a fancy title!',
      link: '/text-tools/case-converter',
      icon: <LuCaseSensitive />,
    },
    {
      name: 'Text Encoder',
      description:
        'Turn your text into secret codes like base64, binary, hex, and more!',
      link: '/text-tools/text-encoder',
      icon: <SiTextpattern />,
    },
    {
      name: 'Text Encryptor',
      description:
        'Give your text a cloak of invisibility with AES, DES, and more encryption!',
      link: '/text-tools/text-encryptor',
      icon: <MdEnhancedEncryption />,
    },
  ],

  unitConverter: [
    {
      name: 'Unit Converter',
      description: 'Convert units like a wizard with our magical tool!',
      link: '/converters/unit-converter',
      icon: <SiConvertio />,
    },
    {
      name: 'Currency Converter',
      description:
        'Turn your money into other money with our coin-flipping converter!',
      link: '/converters/currency-converter',
      icon: <BsCurrencyExchange />,
    },
  ],

  calculator: [
    {
      name: 'Calculator',
      description: 'Do math without breaking a sweat!',
      link: '/calculators/calculator',
      icon: <AiOutlineCalculator />,
    },
    {
      name: 'EMI Calculator',
      description: 'Calculate EMI and stay on top of your finances!',
      link: '/calculators/emi-calculator',
      icon: <GiPayMoney />,
    },
    {
      name: 'Area Calculator',
      description: 'Measure spaces without getting tangled in measuring tapes!',
      link: '/calculators/area-calculator',
      icon: <BiArea />,
    },
    {
      name: 'Ovulation Calculator',
      description: 'Plan your future family with our handy ovulation wizard!',
      link: '/ovulation-predictor',
      icon: <BsCalendar4Range />,
    },
    {
      name: 'Tip Calculator',
      description: 'Calculate tips and make your waiter happy!',
      link: '/calculators/tip-calculator',
      icon: <GiPayMoney />,
    },
    {
      name: 'Tax Calculator',
      description: 'Calculate taxes and make your accountant happy!',
      link: '/calculators/tax-calculator',
      icon: <HiOutlineReceiptTax />,
    },
    {
      name: 'Bill Splitter',
      description: 'Split bills and make your friends happy!',
      link: '/calculators/bill-splitter',
      icon: <LuSplit />,
    },
  ],

  imageTools: [
    {
      name: 'Placeholder Image Generator',
      description: 'Create cool placeholder images for your creative projects!',
      link: '/image-tools/placeholder-image-generator',
      icon: <PiPlaceholder />,
    },
  ],
};
