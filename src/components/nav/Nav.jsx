import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import Image from '../image/Image';

function Nav() {
  return (
    <nav className="section bg">
      <div className="section-content">
        <Link to="/"><Image src="/img/logo-dark.svg" alt="Logo" /></Link>
        <button type="button" onClick={(e) => e.target.classList.toggle('open')}>
          <span>Toggle</span>
        </button>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ueber-mich">Über mich </Link>
          </li>
          <li>
            <Link to="/kontakt">Kontakt</Link>
          </li>
          <li>
            <Link to="/projekte">Projekte</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
