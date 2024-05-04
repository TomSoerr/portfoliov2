import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="section bg">
      <div className="section-content">

        <img src="/img/logo-dark.svg" alt="Logo" />
        <p className="about">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
          maiores cum dolorem neque ullam aperiam, ut tempore molestias? Nobis
          possimus molestias eligendi voluptates id rerum!
        </p>

        <div className="social">
          <h3>Socials</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ueber-mich">Über mich</Link>
            </li>
            <li>
              <Link to="/projekte">Projekte</Link>
            </li>

          </ul>
        </div>

        <div className="blog">
          <h3>Blog</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ueber-mich">Über mich</Link>
            </li>
            <li>
              <Link to="/projekte">Projekte</Link>
            </li>
          </ul>
        </div>

        <div className="sitemap">
          <h3>Sitemap</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ueber-mich">Über mich</Link>
            </li>
            <li>
              <Link to="/projekte">Projekte</Link>
            </li>
            <li>
              <Link to="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
