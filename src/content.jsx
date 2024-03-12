import React from 'react';
import Root from './Root.jsx';
import BlogWrapper from './components/BlogWrapper.jsx';

/* *****************************************************************************
********************************************************************************
***************************************************************************** */

// Hier müssen die einzelnen Beiträge als strings aufgelistet werden
const content = {
  blog: ['optimizing-images-for-web'],
  projekte: ['battleship', 'test'],
};

/* *****************************************************************************
********************************************************************************
***************************************************************************** */

function createRouts() {
  const routes = [];
  Object.entries(content).forEach(([key, value]) => {
    value.forEach((element) => {
      routes.push({
        path: `/${key}/${element}`,
        element: key === 'projects' ? <Root path={element} /> : <BlogWrapper path={element} />,
      });
    });
  });

  return routes;
}

export default createRouts;
