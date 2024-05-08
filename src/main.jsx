import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import './main.css';
import 'normalize.css';

import Home from './sites/Home.jsx';
import Kontakt from './sites/Kontakt.jsx';
import Projekte from './sites/Projekte.jsx';

import ProjectWrapper from './components/ProjectWrapper.jsx';

import content from './content.js';

function createRouts() {
  const routes = [];
  Object.entries(content).forEach(([key, value]) => {
    value.forEach((element) => {
      routes.push({
        path: `/${key}/${element}`,
        element: <ProjectWrapper path={element} />,
      });
    });
  });

  return routes;
}

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/projekte',
      element: <Projekte />,
    },
    {
      path: '/kontakt',
      element: <Kontakt />,
    },
    ...createRouts(),
  ],
  {
    basename: '/portfoliov2/',
  },
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
