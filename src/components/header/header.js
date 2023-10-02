import headerHDS from './header.handlebars';
import './header.css';

export default function header(content) {
  const template = document.createElement('template');
  template.innerHTML = headerHDS(content);
  return template.content;
}
