import { useState } from 'react';
import { Outlet } from "react-router-dom"
import './App.css';
import PostsList from './features/posts/PostsList';
import NavBar from './components/NavBar'

export default function App() {

  return (
    <div className="app">
        <NavBar />
        <h1>Brett's React on Rails Blog</h1>
        <p>Find this application layout in client/src/App.jsx</p>
        <PostsList />
      </div>
  );
};
