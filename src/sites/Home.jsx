import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Root from '../components/root/Root';
import Section from '../components/section/Section';
import AllProjects from '../components/all-projects/AllProjects';

export default function Home() {
  useEffect(() => {
    document.title = 'Tom\'s Portfolio';
  }, []);

  return (
    <Root>
      <header>
        <Section>
          <h1>Moin Moin</h1>
          <p className="bold">
            Ich bin Tom, ein self-taught Frontend-Webentwickler und
            Screendesigner aus Norddeutschland. Hier finden Sie meine größten
            Projekte, seitdem ich 2021 angefangen habe, programmieren zu lernen.
          </p>

          <div>
            <p>
              Zu Beginn meiner Laufbahn machte ich Online-Kurse wie „freeCodeCamp“
              und große Teile des „Odin Projektes“. So lernte ich autodidaktisch
              HTML, CSS und JavaScript. Anschließend machte
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
          </div>

        </Section>
      </header>
      <Section>
        <h2>Neuste Projekte</h2>
        <AllProjects type="slider-h" />
        <Link to="/projekte">Alle Projekte</Link>
      </Section>
    </Root>
  );
}
