import React, { useEffect } from 'react';
import Main from '../components/main/Main';
import Section from '../components/section/Section';
import Form from '../components/form/Form';

export default function Kontakt() {
  useEffect(() => {
    document.title = 'Kontakt';
  }, []);

  return (
    <Main>
      <header id="contact-header">
        <Section>
          <h1>Kontaktformular</h1>
        </Section>
      </header>
      <Section>
        <p className="contact-form-align">
          Alle Felder mit einem * sind Pflichtfelder.
        </p>
        <Form />
      </Section>
    </Main>
  );
}
