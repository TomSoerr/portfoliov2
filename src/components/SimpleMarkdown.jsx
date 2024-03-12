import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import PropTypes from 'prop-types';

/**
 * @param {Object} input
 * @param {String} input.data - The markdown content to render
 */
export default function SimpleMarkdown({ data }) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
    >
      {data}
    </Markdown>
  );
}

SimpleMarkdown.propTypes = {
  data: PropTypes.string.isRequired,
};
