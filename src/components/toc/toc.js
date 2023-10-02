import './toc.css';

const tocNav = document.createElement('nav');
const tocList = document.createElement('ul');

const tocListItems = document.createElement('li');
const tocLinks = document.createElement('a');

function buildToc() {
  const template = document.createDocumentFragment();

  document.querySelectorAll('h2, h3').forEach((heading) => {
    // Check if heading has an id, if not, create one
    heading.id = heading.id || Math.floor(Math.random() * 10 ** 15).toString();

    // Create dom elements
    const li = tocListItems.cloneNode();
    const a = tocLinks.cloneNode();
    a.textContent = heading.textContent;
    a.href = `#${heading.id}`;
    li.append(a);
    template.append(li);
  });
  tocList.append(template);
}

function tocWrapper() {
  tocNav.classList.add('toc');
  tocNav.append(tocList);
  return tocNav;
}

export { tocWrapper, buildToc };
