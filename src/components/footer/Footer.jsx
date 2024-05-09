import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import content from '../../content';
import beautifyName from '../helper/beautifyName';

function Footer() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <footer className="section-outer">
      <div className="section bg">
        <div className="section-content">

          <img src={`${baseUrl}img/logo-dark.svg`} alt="Logo" />
          <p className="about"> Tom Soerr 2024 ©</p>

          <div className="social">
            <h3>Socials</h3>
            <ul>
              <li>
                <a className="link" href="https://www.linkedin.com/in/tom-soerr-b5707a265/">LinkedIn</a>
              </li>
              <li>
                <a className="link" href="https://www.xing.com/profile/Tom_Soerr/cv">Xing</a>
              </li>
              <li>
                <a className="link" href="https://github.com/TomSoerr">GitHub</a>
              </li>

            </ul>
          </div>

          <div className="legal">
            <h3>Rechtliches</h3>
            <ul>
              <li>
                <Link to="/impressum">Impressum</Link>
              </li>
            </ul>
          </div>

          <div className="projekte">
            <h3>Projekte</h3>
            <ul>
              {content.projekte.map((element) => (
                <li key={element}>
                  <Link to={`/projekte/${element}`}>

                    {beautifyName(element)}

                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
