import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  HashRouter, Routes, Route,
} from 'react-router-dom';

import './main.css';
import 'normalize.css';

import Home from './sites/Home.jsx';
import Kontakt from './sites/Kontakt.jsx';
import Projekte from './sites/Projekte.jsx';
import Impressum from './sites/Impressum.jsx';

import ScrollToTop from './components/ScrollToTop.jsx';
import Nav from './components/nav/Nav.jsx';
import Footer from './components/footer/Footer.jsx';

import ProjectWrapper from './components/ProjectWrapper.jsx';

import content from './content.js';

function createRoutes() {
  const routes = [];
  Object.entries(content).forEach(([key, value]) => {
    value.forEach((element) => {
      routes.push(
        <Route key={key} path={`/${key}/${element}`} element={<ProjectWrapper path={element} />} />,
      );
    });
  });

  return routes;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projekte" element={<Projekte />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/impressum" element={<Impressum />} />
        {createRoutes()}
      </Routes>
      <Footer />
    </HashRouter>

  </React.StrictMode>,
);
