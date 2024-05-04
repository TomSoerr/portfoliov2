import React from 'react';
import { Link } from 'react-router-dom';
import './button.css';

export default function Button({ children, src }) {
  return (
    <div className="button">
      <Link to={src}>
        {children}
      </Link>
    </div>
  );
}
