import addCurrentSiteClass from '../../current-site-class.js';
import sanitizeMD from '../../sanitize-md.js';
import responsiveWrapper from '../../responsive-wrapper.js';
import { tocWrapper, buildToc } from '../../components/toc/toc.js';
import projectSlider from '../../components/project-list/project-list.js';
import 'github-markdown-css';

import '../../index.css';
import './project.css';
import '../../nav-footer.css';

import allContent from '../../project-data/project-list-data.js';

const main = document.querySelector('main');
const fragment = document.createDocumentFragment();

const currentProject = addCurrentSiteClass();

// //// SLIDER ////
const aside = document.createElement('aside');
aside.classList.add('tst-project-slider');
aside.innerHTML = projectSlider(allContent);
fragment.append(aside);

// //// CONTENT ////
const wrapper = document.createElement('div');
wrapper.classList.add('tst-content-wrapper');
responsiveWrapper(wrapper);

// // ADD MARKDOWN CONTENT //
const content = document.createElement('article');
content.innerHTML = sanitizeMD(allContent[currentProject]);
content.classList.add('markdown-body');

// // APPEND TO WRAPPER //
wrapper.append(content, tocWrapper());

// //// APPEND TO DOM ////

fragment.append(wrapper);

main.append(fragment);

// //// TOC ////
buildToc();
