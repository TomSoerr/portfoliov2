import './toc.css';
import tocHDS from './toc.handlebars';
import tocItemHDS from './toc-item.handlebars';

const template = document.createElement('template');

function hdsToNode(hds) {
  const temp = template.cloneNode();
  temp.innerHTML = hds;
  return temp.content;
}

function buildToc() {
  const temp = document.createDocumentFragment();

  document
    .querySelectorAll('h2:not(.tst-toc-item), h3:not(.tst-toc-item)')
    .forEach((heading) => {
      // Check if heading has an id, if not, create one
      heading.id =
        heading.id || Math.floor(Math.random() * 10 ** 15).toString();

      // Create dom elements
      temp.append(
        hdsToNode(
          tocItemHDS({
            id: heading.id,
            text: heading.textContent,
          }),
        ),
      );
    });
  document.querySelector('#tst-toc ul').append(temp);
}

const tocWrapper = () => hdsToNode(tocHDS({}));

export { tocWrapper, buildToc };
