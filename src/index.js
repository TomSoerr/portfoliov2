import content from './index.md';
import sanitizeMD from './sanitize-md.js';
import addCurrentSiteClass from './current-site-class.js';
// import toc from './components/toc/toc.handlebars';

import './index.css';
import './nav-footer.css';

addCurrentSiteClass();

const template = document.createElement('template');
template.innerHTML = sanitizeMD(content);

const main = document.querySelector('main');

main.append(template.content);
