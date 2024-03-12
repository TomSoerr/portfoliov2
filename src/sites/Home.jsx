import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Root from '../components/root/Root';
import Section from '../components/section/Section';

export default function Home() {
  useEffect(() => {
    document.title = 'Tom\'s Portfolio';
  }, []);

  return (
    <Root>
      <Section>
        <h1>Hi, ich bin Tom,</h1>
        <p>ein self-taught Front-End-Entwickler aus Hamburg.</p>
        <h2>Über mich</h2>

        <p>Erfahren Sie mehr über meine Fähigkeiten und Projekte</p>
        <Link to="/projekte">Link to Projekte</Link>
      </Section>
    </Root>
  );
}
