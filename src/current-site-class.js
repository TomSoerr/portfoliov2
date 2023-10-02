// get current url add class with file/site name to body

export default function addCurrentSiteClass() {
  const body = document.querySelector('body');
  const url = window.location.href;
  const path = url.split('/').pop();
  const pathName = path.split('.').shift();
  body.classList.add(pathName);
}
