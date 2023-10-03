// get current url add class with file/site name to body

export default function addCurrentSiteClass() {
  const body = document.querySelector('body');
  const url = window.location.href;
  const path = url.split('/').pop();
  const pathName = path.split('.').shift();
  if (
    pathName !== 'index' ||
    pathName !== 'projects' ||
    pathName !== 'contact'
  ) {
    body.classList.add('project');
  }
  body.classList.add(pathName);
  return pathName;
}
