import './project-list.css';
import projectSliderHBS from './project-list.handlebars';
import sanitizeMD from '../../sanitize-md.js';

export default function projectSlider(allProjects) {
  const projectArray = [];
  Object.keys(allProjects).forEach((project) => {
    let template = document.createElement('template');
    template.innerHTML = sanitizeMD(allProjects[project]);
    template = template.content;
    projectArray.push({
      href: project,
      img: template.querySelector('img').src,
      alt: template.querySelector('img').alt,
      heading: template.querySelector('h1').textContent,
    });
  });
  return projectSliderHBS({ project: projectArray });
}
