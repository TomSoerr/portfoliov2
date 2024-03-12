import React, { useState, useEffect } from 'react';
import AdvancedMarkdown from './AdvancedMarkdown';

export default function BlogWrapper({ path }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    import(`../blog/${path}.md?raw`)
      .then((module) => setData(module.default))
      .catch((err) => setError(err));
  }, [path]);

  if (error) {
    return (
      <div>
        Error loading file:
        {path}
      </div>
    );
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return <AdvancedMarkdown data={data} />;
}
