import headerHDS from './header.handlebars';
import responsiveWrapper from '../../responsive-wrapper.js';
import './header.css';

export default function header(content) {
  const template = document.createElement('template');
  template.innerHTML = headerHDS(content);
  responsiveWrapper(template.content.querySelector('header'));
  return template.content;
}
