import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import { v4 as uuid } from 'uuid';

function NavUl({ links, isOpen, toggleOpen }) {
  return (
    <ul onClick={isOpen ? toggleOpen : undefined}>
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

function MenuBtn({ isOpen, toggleOpen }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;

    if (button) {
      button.addEventListener('click', toggleOpen);
    }

    return () => {
      if (button) {
        button.removeEventListener('click', toggleOpen);
      }
    };
  }, [toggleOpen]);

  return (
    <button type="button" ref={buttonRef} className={isOpen ? 'open' : ''}>
      <div />
      <span>Toggle</span>
    </button>
  );
}

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <nav className="section-outer">
      <div className="section bg">
        <div className="section-content">
          <NavLink to="/">tom.soerr</NavLink>
          <MenuBtn isOpen={isOpen} toggleOpen={toggleOpen} />
          <NavUl
            isOpen={isOpen}
            toggleOpen={toggleOpen}
            links={[
              { to: '/', name: 'Home', exact: true },
              { to: '/projekte', name: 'Projekte' },
              { to: '/kontakt', name: 'Kontakt' },
            ]}
          />
        </div>
      </div>
    </nav>
  );
}
