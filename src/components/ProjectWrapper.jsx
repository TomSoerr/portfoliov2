import React, { useState, useEffect } from 'react';
import SimpleMarkdown from './SimpleMarkdown';
import Root from './root/Root';
import Section from './section/Section';
import Image from './image/Image';
import AllProjects from './all-projects/AllProjects';
import './project-wrapper.css';

export default function ProjectWrapper({ path }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.body.classList.add('project-wrapper');

    return () => {
      document.body.classList.remove('project-wrapper');
    };
  }, []);

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
    <>
      <AllProjects type="slider-v" />
      <Root>
        <Section>
          <Image className="hero-img" src={`thumbnails/${path}.png`} alt={`${path} Hero Bild`} />
          <SimpleMarkdown data={data} />
        </Section>
        <Section>
          <h2>Weitere Projekte</h2>
          <AllProjects type="slider-h" scroll />
        </Section>
      </Root>
    </>
  );
}
