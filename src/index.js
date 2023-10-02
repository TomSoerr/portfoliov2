import addCurrentSiteClass from './current-site-class.js';
import header from './components/header/header.js';
import contentMD from './index.md';
import sanitizeMD from './sanitize-md.js';
// import toc from './components/toc/toc.handlebars';

import './index.css';
import './nav-footer.css';

const main = document.querySelector('main');
const fragment = document.createDocumentFragment();

addCurrentSiteClass();

// //// HEADER ////
fragment.append(
  header({
    summary:
      'Ich bin ein angehender Front-End-Entwickler mit meinen Stärken in HTML und CSS. Ich habe auch gute Kenntnisse in JavaScript, Illustrator/InDesign und einen professionellen Workflow mit Git. Ich habe bereits mit ReactJS und Django gearbeitet und habe Basiswissen in Python, Photoshop, Netzwerktechnik und IT-Sicherheit',
    headline: 'Moin',
    buttonTop: {
      text: 'My projects',
      link: '/projects',
    },
    buttonBottom: {
      text: 'Read more about me',
      link: '#read-more',
    },
  }),
);

// //// CONTENT ////
const content = document.createElement('article');
content.innerHTML = sanitizeMD(contentMD);

// Add id to first h2 on page
const contentHeading = content.querySelectorAll('h2')[0];
contentHeading.id = 'read-more';
fragment.append(content);

main.append(fragment);
