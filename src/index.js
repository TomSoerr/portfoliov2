import addCurrentSiteClass from './current-site-class.js';
import sanitizeMD from './sanitize-md.js';
import responsiveWrapper from './responsive-wrapper.js';
import header from './components/header/header.js';
import contentMD from './index.md';
import { tocWrapper, buildToc } from './components/toc/toc.js';

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
      link: 'projects.html',
    },
    buttonBottom: {
      text: 'Read more about me',
      link: '#read-more',
    },
  }),
);

// //// CONTENT ////
const wrapper = document.createElement('div');
wrapper.classList.add('tst-content-wrapper');
responsiveWrapper(wrapper);

// // ADD MARKDOWN CONTENT //
const content = document.createElement('article');
content.innerHTML = sanitizeMD(contentMD);

// // ADD ID TO FIRST HEADING //
const contentHeading = content.querySelectorAll('h2')[0];
contentHeading.id = 'read-more';

// // APPEND TO WRAPPER //
wrapper.append(content, tocWrapper());

// //// APPEND TO DOM ////

fragment.append(wrapper);

main.append(fragment);

// //// TOC ////
buildToc();
