import React from 'react';
import Image from 'next/image';

interface ConditionalImageProps {
  src: string | null;
  alt: string;
  width: number;
  height: number;
  className: string;
}

const ConditionalImage: React.FC<ConditionalImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
}) => {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    );
  } else {
    return null;
  }
};

export default ConditionalImage;
