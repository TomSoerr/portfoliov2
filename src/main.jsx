import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import createRouts from './content.jsx';

import './main.css';
import 'normalize.css';

import Home from './sites/Home.jsx';
import UeberMich from './sites/UeberMich.jsx';
import Kontakt from './sites/Kontakt.jsx';
import Blog from './sites/Blog.jsx';
import Projekte from './sites/Projekte.jsx';

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
