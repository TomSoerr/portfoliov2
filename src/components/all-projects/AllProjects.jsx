import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../image/Image.jsx';
import content from '../../content.js';
import './all-projects.css';

function beautifyName(name) {
  return name.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export default function AllProjects({ type, scroll }) {
  return (
    <ul id={type} className={(scroll) ? 'scroll' : ''}>
      {content.projekte.map((element) => (
        <li className="card" key={element}>
          <Link to={`/projekte/${element}`}>
            <Image
              src={`thumbnails/${element}.png`}
              alt={beautifyName(element)}
            />
            <h3>
              {beautifyName(element)}
              &#160;
            </h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}
