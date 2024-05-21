import { useState } from 'react';
import './App.css';
import PostsList from './features/posts/PostsList';

export default function App() {

  return (
    <div className="app">
      <h1>Brett's React on Rails Blog</h1>
      <p>Find this application layout in client/src/App.jsx</p>
      <PostsList />
    </div>
  );
};
