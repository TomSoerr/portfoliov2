import React, { useEffect } from 'react';
import Main from '../components/main/Main';
import Section from '../components/section/Section';
import AllProjects from '../components/all-projects/AllProjects';
import Button from '../components/button/Button';

export default function Home() {
  useEffect(() => {
    document.title = "Tom's Portfolio";
  }, []);
  return (
    <Main>
      <header>
        <Section>
          <h1>Moin Moin</h1>
          <p>
            Ich bin Tom, Webentwickler und Screendesigner mit einer Leidenschaft
            für Details. Auf meinem Portfolio präsentiere ich einige meiner
            Projekte, die meine Entwicklung seit meinem Einstieg in die
            Programmierung im Jahr 2021 widerspiegeln.
          </p>
          <p>
            Mein Weg begann mit den Online-Kursen von{' '}
            <a href="https://www.freecodecamp.org/">freeCodeCamp</a> und dem{' '}
            <a href="https://www.theodinproject.com/">Odin Project</a>, wo ich
            mir die Grundlagen von HTML, CSS und JavaScript aneignete.
            Anschließend absolvierte ich eine Ausbildung zum
            gestaltungstechnischen Assistenten mit Schwerpunkt Screen-Design, in
            der ich meine Fähigkeiten in der Webentwicklung vertiefte und
            professionelle Tools wie Adobe Illustrator, Photoshop, InDesign und
            Figma beherrschte.
          </p>
          <p>
            Derzeit studiere ich Angewandte Informatik, um meine technischen
            Kenntnisse weiter auszubauen. Während mein bisheriger Fokus auf dem
            Frontend lag, konzentriere ich mich nun verstärkt auf die
            Softwareentwicklung. Neben Webtechnologien bringe ich auch
            Erfahrungen in LaTeX, Python, C und Cybersecurity mit.
          </p>
          <p>
            Schauen Sie sich gern meine Projekte an – ich freue mich über Ihr
            Feedback und spannende neue Herausforderungen!
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
