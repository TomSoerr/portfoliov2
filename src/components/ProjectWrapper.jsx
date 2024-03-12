import React, { useState, useEffect } from 'react';
import SimpleMarkdown from './SimpleMarkdown';
import Root from './root/Root';
import Section from './section/Section';

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
        <Section>
          Error loading file:
          {path}
        </Section>
      </Root>
    );
  }

  if (!data) {
    return <Root><Section>Loading...</Section></Root>;
  }

  return (
    <Root>
      <Section>
        <SimpleMarkdown data={data} />
      </Section>
    </Root>
  );
}
