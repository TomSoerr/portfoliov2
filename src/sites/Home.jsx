import React, { useEffect } from 'react';
import Main from '../components/main/Main';
import Section from '../components/section/Section';
import AllProjects from '../components/all-projects/AllProjects';
import Button from '../components/button/Button';

export default function Home() {
  useEffect(() => {
    document.title = 'Tom\'s Portfolio';
  }, []);
  return (
    <Main>
      <header>
        <Section>
          <h1>Moin Moin</h1>
          <p>
            Ich bin Tom, ein self-taught Frontend-Webentwickler und
            Screendesigner aus Norddeutschland. Hier finden Sie meine größten
            Projekte, seitdem ich 2021 angefangen habe, programmieren zu lernen.
          </p>
          <p>
            Zu Beginn meiner Laufbahn machte ich Online-Kurse wie
            {' '}
            <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
            {' '}
            und große Teile des
            {' '}
            <a href="https://www.theodinproject.com/">Odin Projektes</a>
            {' '}
            Anschließend machte
            ich eine Ausbildung zum gestaltungstechnischen Assistenten mit
            Schwerpunkt Screen-Design. In dieser Ausbildung sammelte ich weiter
            Erfahrungen in der Webentwicklung und lernte es, mit Adobe
            Illustrator, Photoshop, InDesign und Figma zu arbeiten. Somit
            erstrecken sich meine Fähigkeiten von der Konzeption, zur Gestaltung
            bis hin zur Entwicklung.
          </p>
          <p>
            Ferner habe ich rudimentäre Kenntnisse in LaTeX, Python und
            der Netzwerktechnik.
          </p>
          <Button src="/kontakt">Kontakt aufnehmen</Button>
        </Section>
      </header>
      <Section>
        <h2>Neuste Projekte</h2>
        <AllProjects type="slider-h" />

        <div className="right">
          <Button src="/projekte">Alle Projekte</Button>
        </div>
      </Section>
    </Main>
  );
}
