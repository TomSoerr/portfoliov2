import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <img src="/img/logo-dark.svg" alt="Logo" />
      <p className="about">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
        maiores cum dolorem neque ullam aperiam, ut tempore molestias? Nobis
        possimus molestias eligendi voluptates id rerum!
      </p>

      <address>
        <p>MP JavaScript</p>
        <p>123 Main St</p>
        <p>Anytown, USA</p>
      </address>

      <div className="sitemap">
        <h3>Sitemap</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/nav">Navigation</Link>
          </li>
          <li>
            <Link to="/footer">Footer</Link>
          </li>
          <li>
            <a href="#">Plugins</a>
          </li>
          <li>
            <a href="#">Links</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
