import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/stylesheets/nav.scss';

function Navbar() {
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
  };

  const [divStyle, setDivStyle] = useState({
    display: 'none',
  });

  const handleClick = () => {
    setDivStyle((prevStyle) => ({
      display: prevStyle.display === 'none' ? 'block' : 'none',
    }));
  };

  return (
    <div>
      <nav>
        <Link to="/" className="logo">
          <h1 className="logo">
            ak<span id='dev'>{getLocation()}</span>
          </h1>
        </Link>

        <ul>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><a href="https://github.com/a04k/" target="_blank" rel="noopener noreferrer">Github</a></li>
          {/* Add your other navigation items here */}
          <li><button id="x" onClick={handleClick}>x</button></li>
        </ul>
      </nav>
      
      <div className="mobNav" style={divStyle}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><a href="https://github.com/a04k/" target="_blank" rel="noopener noreferrer">Github</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
