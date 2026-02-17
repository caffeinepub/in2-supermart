import { type ImgHTMLAttributes } from 'react';

interface ResponsiveImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  priority?: boolean;
  aspectRatio?: string;
}

export default function ResponsiveImage({
  src,
  alt,
  priority = false,
  aspectRatio,
  className = '',
  ...props
}: ResponsiveImageProps) {
  const loadingStrategy = priority ? 'eager' : 'lazy';

  return (
    <img
      src={src}
      alt={alt}
      loading={loadingStrategy}
      className={`w-full h-auto object-cover ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
      {...props}
    />
  );
}

