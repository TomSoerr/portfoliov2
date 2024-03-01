import React from 'react'
import './App.css'
import markdowns from './projects/test.md?raw'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import 'katex/dist/katex.min.css'

const markdown = `Here is some JavaScript code:

~~~js
console.log('It works!')
~~~
`

function App () {
  return (
    <>
      <Markdown
        rehypePlugins={[rehypeKatex]}
        remarkPlugins={[remarkGfm, remarkMath]}
        components={{
          code (props) {
            const { children, className, node, ...rest } = props
            const match = /language-(\w+)/.exec(className || '')
            return match
              ? (
              <SyntaxHighlighter
                {...rest}
                PreTag="div"
                language={match[1]}
                style={solarizedlight}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
                )
              : (
              <code {...rest} className={className}>
                {children}
              </code>
                )
          }
        }}
      >
        {markdowns}
      </Markdown>
    </>
  )
}

export default App
