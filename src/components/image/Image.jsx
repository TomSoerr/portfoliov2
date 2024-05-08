import React from 'react';

export default function Image({ className, src, alt }) {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <img src={baseUrl + src} alt={alt} className={className} />
  );
}
