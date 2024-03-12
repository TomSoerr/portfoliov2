import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Root from '../components/root/Root';
import content from '../content.js';
import Section from '../components/section/Section.jsx';

export default function Home() {
  useEffect(() => {
    document.title = 'Tom\'s Projekte';
  }, []);
  return (
    <Root>
      <Section>
        <h1>Projekte</h1>
        <ul>
          {content.projekte.map((element) => (
            <li key={element}>
              <Link to={`/projekte/${element}`}>{element}</Link>
            </li>
          ))}
        </ul>
      </Section>
    </Root>
  );
}
