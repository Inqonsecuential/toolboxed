import { PiPasswordBold, PiPlaceholder } from 'react-icons/pi';
import {
  BsCheck2Circle,
  BsHash,
  BsCurrencyExchange,
  BsCalendar4Range,
  BsStopwatch,
  BsFillGrid3X3GapFill,
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

export const links = {
  passwordTools: [
    {
      name: 'Password Generator',
      description: 'Generate a strong and secure random password with ease.',
      link: '/password-tools/password-generator',
      icon: <PiPasswordBold />,
    },
    {
      name: 'Password Strength Checker',
      description:
        'Evaluate the robustness of your password to ensure it can withstand cyber threats.',
      link: '/password-tools/password-strength-checker',
      icon: <GiStrongbox />,
    },
    {
      name: 'Password Hasher',
      description:
        'Convert your password into an encrypted code for added security.',
      link: '/password-tools/password-hasher',
      icon: <BsHash />,
    },
    {
      name: 'Password Breach Checker',
      description:
        'Check if your password has ever been compromised on the internet.',
      link: '/password-tools/password-breach-checker',
      icon: <BsCheck2Circle />,
    },
  ],
  timers: [
    {
      name: 'Countdown Timer',
      description:
        'Set up a countdown to eagerly anticipate a special event in your life.',
      link: '/timers/countdown-timer',
      icon: <PiClockCountdownFill />,
    },
    {
      name: 'Minutes Countdown',
      description:
        'Track time with precision by counting down minutes and seconds.',
      link: '/timers/minutes-countdown',
      icon: <PiClockCountdownFill />,
    },
    {
      name: 'Stopwatch',
      description:
        'Measure time intervals accurately with a user-friendly stopwatch.',
      link: '/timers/stopwatch',
      icon: <BsStopwatch />,
    },
  ],
  textTools: [
    {
      name: 'Case Converter',
      description:
        'Easily change text to uppercase, lowercase, or title case format.',
      link: '/text-tools/case-converter',
      icon: <LuCaseSensitive />,
    },
    {
      name: 'Text Encoder',
      description:
        'Transform your text into various secret codes like base64, binary, and hex.',
      link: '/text-tools/text-encoder',
      icon: <SiTextpattern />,
    },
    {
      name: 'Text Encryptor',
      description:
        'Protect your text by encrypting it with advanced encryption methods like AES and DES.',
      link: '/text-tools/text-encryptor',
      icon: <MdEnhancedEncryption />,
    },
  ],

  unitConverter: [
    {
      name: 'Unit Converter',
      description: 'Convert units effortlessly using our comprehensive tool.',
      link: '/converters/unit-converter',
      icon: <SiConvertio />,
    },
    {
      name: 'Currency Converter',
      description:
        'Exchange currencies with ease and stay updated on international rates.',
      link: '/converters/currency-converter',
      icon: <BsCurrencyExchange />,
    },
  ],

  calculator: [
    {
      name: 'Calculator',
      description:
        'Perform mathematical calculations efficiently without any hassle.',
      link: '/calculators/calculator',
      icon: <AiOutlineCalculator />,
    },
    {
      name: 'EMI Calculator',
      description:
        'Calculate Equated Monthly Installments to manage your finances effectively.',
      link: '/calculators/emi-calculator',
      icon: <GiPayMoney />,
    },
    {
      name: 'Area Calculator',
      description:
        'Measure spaces accurately without the need for physical tools.',
      link: '/calculators/area-calculator',
      icon: <BiArea />,
    },
    {
      name: 'Ovulation Calculator',
      description:
        "Plan your family's future using our helpful ovulation prediction tool.",
      link: '/ovulation-predictor',
      icon: <BsCalendar4Range />,
    },
    {
      name: 'Tip Calculator',
      description:
        'Quickly calculate tips and ensure your waiter receives the right gratuity.',
      link: '/calculators/tip-calculator',
      icon: <GiPayMoney />,
    },
    {
      name: 'Tax Calculator',
      description: 'Calculate GST. Useful for quick price adjustments.',
      link: '/calculators/tax-calculator',
      icon: <HiOutlineReceiptTax />,
    },
    {
      name: 'Bill Splitter',
      description:
        'Fairly divide bills among friends and simplify group expenses.',
      link: '/calculators/bill-splitter',
      icon: <LuSplit />,
    },
  ],

  imageTools: [
    {
      name: 'Placeholder Image Generator',
      description:
        'Create eye-catching placeholder images for your creative projects effortlessly.',
      link: '/image-tools/placeholder-image-generator',
      icon: <PiPlaceholder />,
    },
  ],
  games: [
    {
      name: '2048',
      description: 'Merge to 2048.',
      link: '/games/2048',
      icon: <BsFillGrid3X3GapFill />,
    },
  ],
};
