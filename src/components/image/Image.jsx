import React from 'react';

export default function Image({ className, src, alt }) {
  return (
    <img src={src} alt={alt} className={className} />
  );
}
