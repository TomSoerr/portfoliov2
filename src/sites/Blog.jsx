import React from 'react';
import { Link } from 'react-router-dom';
import Root from '../components/root/Root';

export default function Home() {
  useEffect(() => {
    document.title = 'Tom\'s Blog';
  }, []);
  return (
    <Root>
      <h1>Blog</h1>

    </Root>
  );
}
