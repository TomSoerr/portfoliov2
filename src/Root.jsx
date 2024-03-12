import React from 'react';

export default function Root({ path }) {
  return (
    <div>
      <h1>Welcome to the root Component</h1>
      {path}
    </div>
  );
}
