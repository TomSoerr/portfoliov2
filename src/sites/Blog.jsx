import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Root from '../components/root/Root';
import Section from '../components/section/Section';

export default function Home() {
  useEffect(() => {
    document.title = 'Tom\'s Blog';
  }, []);
  return (
    <Root>
      <Section>
        <h1>Blog</h1>
      </Section>
    </Root>
  );
}
