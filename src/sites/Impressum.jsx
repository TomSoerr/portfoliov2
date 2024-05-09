import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Main from '../components/main/Main';
import Section from '../components/section/Section';

export default function Impressum() {
  useEffect(() => {
    document.title = 'Impressum';
  }, []);

  return (
    <Main>
      <Section>
        <p>
          Mit dieser Website und allen Unterseiten von tomsoerr.github.io
          verfolge ich
          {' '}
          <strong>keine</strong>
          {' '}
          geschäftlichen Absichten und verdiene auch kein
          Geld. Ich habe die Websites als Hobby- und Schulprojekte erstellt und
          sie dienen gemäß § 5 TMG und § 18 MStV ausschließlich privaten Zwecken.
          {/* Somit fallen die Websites nicht unter die Impressumspflicht. */}
        </p>
        <p>
          Müssen Sie mich dennoch erreichen, nutzen Sie dafür bitte das
          {' '}
          <Link className="hide" to="/kontakt">Formular</Link>
          .
        </p>
      </Section>
    </Main>
  );
}
