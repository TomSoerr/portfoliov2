import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import './main.css';
import 'normalize.css';

import Home from './sites/Home.jsx';
import UeberMich from './sites/UeberMich.jsx';
import Kontakt from './sites/Kontakt.jsx';
import Blog from './sites/Blog.jsx';
import Projekte from './sites/Projekte.jsx';

import BlogWrapper from './components/BlogWrapper.jsx';
import ProjectWrapper from './components/ProjectWrapper.jsx';

import content from './content.js';

function createRouts() {
  const routes = [];
  Object.entries(content).forEach(([key, value]) => {
    value.forEach((element) => {
      routes.push({
        path: `/${key}/${element}`,
        element: key === 'blog'
          ? <BlogWrapper path={element} />
          : <ProjectWrapper path={element} />,
      });
    });
  });

  return routes;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/projekte',
    element: <Projekte />,
  },
  {
    path: '/ueber-mich',
    element: <UeberMich />,
  },
  {
    path: '/kontakt',
    element: <Kontakt />,
  },
  ...createRouts(),
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
