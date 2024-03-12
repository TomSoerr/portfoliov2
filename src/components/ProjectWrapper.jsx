import React, { useState, useEffect } from 'react';
import SimpleMarkdown from './SimpleMarkdown';
import Root from './root/Root';

export default function BlogWrapper({ path }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    import(`../projekte/${path}.md?raw`)
      .then((module) => setData(module.default))
      .catch((err) => setError(err));
  }, [path]);

  if (error) {
    return (
      <Root>
        <div>
          Error loading file:
          {path}
        </div>
      </Root>
    );
  }

  if (!data) {
    return <Root><div>Loading...</div></Root>;
  }

  return <Root><SimpleMarkdown data={data} /></Root>;
}
