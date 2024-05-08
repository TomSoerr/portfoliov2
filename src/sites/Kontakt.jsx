import React, { useEffect } from 'react';
import Main from '../components/main/Main';
import Section from '../components/section/Section';

export default function Home() {
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
          <label htmlFor="email">
            E-Mail:
            <input type="email" id="email" name="email" required />
          </label>
          <label htmlFor="phone">
            Telefon:
            <input type="tel" id="phone" name="phone" />
          </label>
          <label htmlFor="message">
            Message:
            <textarea id="message" name="message" required />
          </label>
          <label htmlFor="verification">
            Human verification (please enter the number 10):
            <input type="number" id="verification" name="verification" min="10" max="10" required />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Section>
    </Main>
  );
}
