import React from 'react';
import './Section.css';

export default function Section({ children }) {
  return (
    <section className="section">
      <div className="section-content">{children}</div>
    </section>
  );
}
