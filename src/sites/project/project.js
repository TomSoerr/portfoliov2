import addCurrentSiteClass from '../../current-site-class.js';
import sanitizeMD from '../../sanitize-md.js';
import { tocWrapper, buildToc } from '../../components/toc/toc.js';

import '../../index.css';
import './project.css';
import '../../nav-footer.css';

import allContent from '../../project-data/project-list-data.js';

const main = document.querySelector('main');
const fragment = document.createDocumentFragment();

const currentProject = addCurrentSiteClass();

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
const content = document.createElement('article');
content.innerHTML = sanitizeMD(allContent[currentProject]);

// // APPEND TO WRAPPER //
wrapper.append(content, tocWrapper());

// //// APPEND TO DOM ////

fragment.append(wrapper);

main.append(fragment);

// //// TOC ////
buildToc();
