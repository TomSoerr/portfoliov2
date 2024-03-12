import React from 'react';
import { Link } from 'react-router-dom';
import Root from '../components/root/Root';

export default function Home() {
  return (
    <Root>
      <div>
        <h1>Hi, ich bin Tom,</h1>
        <p>ein self-taught Front-End-Entwickler aus Hamburg.</p>
        <h2>Über mich</h2>

        <p>Erfahren Sie mehr über meine Fähigkeiten und Projekte</p>
        <Link to="/projekte">Link to Projekte</Link>
      </div>
    </Root>
  );
}