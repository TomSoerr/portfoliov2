import React, { useEffect } from 'react';
import Main from '../components/main/Main';
import Section from '../components/section/Section';

export default function Kontakt() {
  useEffect(() => {
    document.title = 'Kontakt';
  }, []);

  return (
    <Main>
      <Section>
        <form>
          <label htmlFor="name">
            Name:
            <input type="text" id="name" name="name" required />
          </label>
          <label htmlFor="message">
            Message:
            <textarea id="message" name="message" required />
          </label>
          <span>Verbessen Sie nicht zu schreiben, wie ich Ihnen antworten soll.</span>
          <label htmlFor="verification">
            Bitte zähle die folgenden Zahlen zur Verifikation zusammen:
            {' '}
            <span>1,1 + 1,9</span>
            <input type="number" id="verification" name="verification" required />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Section>
    </Main>
  );
}
