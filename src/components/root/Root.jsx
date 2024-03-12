import React from 'react';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import './Root.css';

export default function Root({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
