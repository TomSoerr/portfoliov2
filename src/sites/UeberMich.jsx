import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Root from '../components/root/Root';
import Section from '../components/section/Section';

export default function Home() {
  useEffect(() => {
    document.title = 'Über Tom';
  }, []);
  return (
    <Root>
      <Section>
        <h1>Über mich</h1>

        <p>
          Ich bin ein angehender Front-End-Entwickler mit meinen Stärken in HTML
          und CSS. Ich habe auch gute Kenntnisse in JavaScript, Illustrator/
          InDesign und einen professionellen Workflow mit Git. Ich habe bereits
          mit ReactJS und Django gearbeitet und habe Basiswissen in Python,
          Photoshop, Netzwerktechnik und IT-Sicherheit. Außerdem bin ich erfahren
          im Umgang mit Unix Terminals. Ich bemühe mich stets, in jedem Projekt
          mein Bestes zu geben und sicherzustellen, dass meine Arbeit gut strukturiert ist.
        </p>
        <Link to="/kontakt">Kontakt aufnehmen</Link>
      </Section>
    </Root>
  );
}
