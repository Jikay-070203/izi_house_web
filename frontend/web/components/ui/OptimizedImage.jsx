import Image from 'next/image';
import { useState } from 'react';

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 85,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);

  // Handle local vs external images
  const isExternal = src?.startsWith('http') || src?.startsWith('//');
  const imageSrc = isExternal ? src : src?.startsWith('/') ? src : `/${src}`;

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-md" />
      )}
      <Image
        src={imageSrc}
        alt={alt || ''}
        width={width}
        height={height}
        priority={priority}
        quality={quality}
        onLoadingComplete={() => setIsLoading(false)}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
