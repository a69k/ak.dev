import {React} from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/stylesheets/nav.scss';

function Navbar () {
  const location = useLocation();

  const getLocation = () => {
    const currentLocation = location.pathname.toLowerCase();
    if (currentLocation === '/blog') {
      return '.blog';
    } else if (currentLocation === '/resume') {
      return '.resume';
    } else {
      return '.dev'; 
    } 
  }
  const ps= 60;

  return (
    <nav>
      <Link to="/" className="logo">
        <h1 className="logo">ak<span id='dev'>{getLocation()}</span></h1>
      </Link>

      <ul>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><a href="https://github.com/a04k/" target="_blank" rel="noopener noreferrer">Github</a></li>
  {/*
        <li><a href="https://www.linkedin.com/in/ahmedkhaled14/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="mailto:63ahmedkhaled@gmail.com">Contact</a></li>
  */}
      </ul>
    </nav>
  );
};

export default Navbar;
