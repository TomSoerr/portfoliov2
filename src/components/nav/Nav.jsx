import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import { v4 as uuid } from 'uuid';

function NavUl({ links }) {
  return (
    <ul>
      {links.map((link) => (
        <li key={uuid()}>
          <NavLink exact={(link.exact) ? 'true' : 'false'} to={link.to}>
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

function MenuBtn() {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const toggleClass = () => button.classList.toggle('open');

    if (button) {
      button.addEventListener('click', toggleClass);
    }

    return () => {
      if (button) {
        button.removeEventListener('click', toggleClass);
      }
    };
  }, []);

  return (
    <button type="button" ref={buttonRef}>
      <div />
      <span>Toggle</span>
    </button>
  );
}

export default function Nav() {
  return (
    <nav className="section bg">
      <div className="section-content">
        <NavLink to="/">tom.soerr</NavLink>
        <MenuBtn />
        <NavUl
          links={[
            { to: '/', name: 'Home', exact: true },
            { to: '/ueber-mich', name: 'Über mich' },
            { to: '/projekte', name: 'Projekte' },
            { to: '/kontakt', name: 'Kontakt' },
          ]}
        />
      </div>
    </nav>
  );
}
