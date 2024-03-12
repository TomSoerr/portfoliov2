import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import 'katex/dist/katex.min.css';
import PropTypes from 'prop-types';

const markdownComponents = {
  code: (props) => {
    const { children, className } = props;
    const match = /language-(\w+)/.exec(className || '');
    return match ? (
      <SyntaxHighlighter PreTag="div" language={match[1]} style={oneLight}>
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className}>{children}</code>
    );
  },
};

/**
 * @param {Object} input
 * @param {String} input.data - The markdown content to render
 */
export default function AdvancedMarkdown({ data }) {
  return (
    <Markdown
      rehypePlugins={[rehypeKatex]}
      remarkPlugins={[remarkGfm, remarkMath]}
      components={markdownComponents}
    >
      {data}
    </Markdown>
  );
}

AdvancedMarkdown.propTypes = {
  data: PropTypes.string.isRequired,
};
