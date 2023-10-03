import addCurrentSiteClass from './current-site-class.js';
import header from './components/header/header.js';
import contentMD from './index.md';
import sanitizeMD from './sanitize-md.js';
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
      link: '/projects',
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

['resize', 'load'].forEach((event) => {
  window.addEventListener(event, () => {
    if (wrapper.children[0].offsetHeight !== wrapper.children[1].offsetHeight) {
      wrapper.classList.add('tst-wrapped');
    } else {
      wrapper.classList.remove('tst-wrapped');
    }
  });
});

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
