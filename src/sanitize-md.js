import sanitizeHtml from 'sanitize-html';

export default function sanitizeMD(md) {
  return sanitizeHtml(md, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
    allowedAttributes: { img: ['src', 'alt'] },
    allowedSchemes: ['data', 'http', 'https'],
    allowedClasses: {
      code: ['language-*'],
    },
  });
}
