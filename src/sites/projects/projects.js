import addCurrentSiteClass from '../../current-site-class.js';
import header from '../../components/header/header.js';
import sanitizeMD from '../../sanitize-md.js';
import { tocWrapper, buildToc } from '../../components/toc/toc.js';

import '../../index.css';
import './projects.css';
import '../../nav-footer.css';

const main = document.querySelector('main');
const fragment = document.createDocumentFragment();

addCurrentSiteClass();

// //// HEADER ////
fragment.append(
  header({
    summary:
      'In the last couple of years I have tried a few programming and markup languages. After all I sticked with HTML, CSS and JavaScript. I have done many of the "Odin Project" courses and studied screen design at the BMK in Hamburg. On the page are all my projects from little to big. I hope you enjoy them.',
    headline: 'Work',
    buttonTop: {
      text: 'Contact me',
      link: '',
    },
    buttonBottom: {
      text: 'See more about me',
      link: '#read-more',
    },
  }),
);

// //// CONTENT ////
const wrapper = document.createElement('div');
wrapper.classList.add('tst-content-wrapper');

// ['resize', 'load'].forEach((event) => {
//   window.addEventListener(event, () => {
//     if (wrapper.children[0].offsetHeight !== wrapper.children[1].offsetHeight) {
//       wrapper.classList.add('tst-wrapped');
//     } else {
//       wrapper.classList.remove('tst-wrapped');
//     }
//   });
// });

// // ADD MARKDOWN CONTENT //
// const content = document.createElement('article');
// content.innerHTML = sanitizeMD(contentMD);

// // ADD ID TO FIRST HEADING //
// const contentHeading = content.querySelectorAll('h2')[0];
// contentHeading.id = 'read-more';

// // APPEND TO WRAPPER //
wrapper.append(tocWrapper());

// //// APPEND TO DOM ////

fragment.append(wrapper);

main.append(fragment);

// //// TOC ////
buildToc();
