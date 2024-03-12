import React from 'react';
import { Link } from 'react-router-dom';
import Root from '../components/root/Root';
import content from '../content.js';

export default function Home() {
  useEffect(() => {
    document.title = 'Tom\'s Projekte';
  }, []);
  return (
    <Root>
      <h1>Projekte</h1>
      <ul>
        {content.projekte.map((element) => (
          <li key={element}>
            <Link to={`/projekte/${element}`}>{element}</Link>
          </li>
        ))}
      </ul>
    </Root>
  );
}
