import React, { useEffect } from 'react';
import Main from '../components/main/Main.jsx';
import AllProjects from '../components/all-projects/AllProjects.jsx';
import Section from '../components/section/Section.jsx';
import Button from '../components/button/Button.jsx';

export default function Home() {
  useEffect(() => {
    document.title = 'Tom\'s Projekte';
  }, []);
  return (
    <Main>
      <header>
        <Section>
          <h1>Meine Projekte</h1>
          <p className="bold">
            Ich habe einige meiner besten Projekte zusammengetragen und
            aufbereitet. So können Sie einen Einblick in meine Arbeitsweise
            erhalten.
          </p>

          <p>
            Die Projekte sind sehr vielfältig und beinhalten unter
            anderem Logo-Entwicklung, Konzeption, Marktanalysen und
            Programmierung. Mein Ziel ist es, nicht nur eine schnelle, sondern
            eine nachhaltige und durchdachte Lösung zu finden. Dabei liegen meine
            Stärken besonders in der Organisation und Entwicklung der Projekte.
          </p>
          <p>
            Auf meinem
            {' '}
            <a href="https://github.com/TomSoerr">GitHub Profil</a>
            {' '}
            finden Sie zudem weitere Projekte und den
            Quellcode der hier gezeigten Projekte.
          </p>
          <Button src="/kontakt">Kontakt</Button>
        </Section>
      </header>
      <Section>
        <h2>Alle Projekte</h2>
        <AllProjects type="grid" />
      </Section>
    </Main>
  );
}
