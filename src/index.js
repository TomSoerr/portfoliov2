import content from './index.md';
import sanitizeMD from './sanitize-md.js';
import toc from './components/toc/toc.handlebars';

import './index.css';
import './footer.css';
import './nav.css';

const template = document.createElement('template');
template.innerHTML = toc();

document.body.append(template.content, sanitizeMD(content));
