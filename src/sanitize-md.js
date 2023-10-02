import sanitizeHtml from 'sanitize-html';

export default function sanitizeMD(md) {
  return sanitizeHtml(md, {
    allowedClasses: {
      code: ['language-*'],
    },
  });
}
