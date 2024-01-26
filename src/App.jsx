import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Resume from './resume';
import Blog from './Blog'

export default function App () {
  return (
    <Router>
    <Routes>
      <Route index element = {<Home/>}/>
      <Route path = "/blog" element = {<Blog/>}/>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/resume" element = {<Resume/>}/>
    </Routes>
    </Router>
  );
};

