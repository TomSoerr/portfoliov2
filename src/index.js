import content from './index.md';
import sanitizeMD from './sanitize-md.js';
// import toc from './components/toc/toc.handlebars';

import './index.css';
import './nav-footer.css';

const template = document.createElement('template');
// template.innerHTML = toc();

const main = document.querySelector('main');

main.append(sanitizeMD(content));
