import React from 'react'
import {Link } from 'react-router-dom'
import '../assets/stylesheets/home.scss'

export default function content() {
  //I'll eventually build a backend for editing this instead of writing markup
  return (
  <div className='content'>
  <h2> having fun with programming in my free time, I guess... You're currently looking at my website built with <u>React.js</u> and <u>SASS</u> </h2>
  <h2> a little bit about me: 
    <ul><li>in my sophomore year of pursuing a B.S in computer science @ ain shams university  </li>
        <li>learning some programming languages: C++, Javascript (+ react, svelte), HTML5, CSS(+sass, tailwind) </li>
        <li>sometimes do a bit of design work mainly graphic design but also UI</li>
        <li>currently a web dev team member at OSC (Open Source Community) FCIS </li>
        <li>participated in NASA Space Apps Cairo 2023</li>
  </ul>
  ok, enough with the intro..., oh and i'll (maybe) sometimes <u><Link to="/blog">Blog</Link></u>.
  </h2>

  <h1 id='projLabel'>some of the projects i've worked on: </h1>
  <div className='proj'>
  
  <a class='cards' href="https://github.com/TheGrandMasons/NAVERIS" target="_blank" rel="noopener noreferrer">
    <h3 class="projName">NAVERIS</h3>
    <p class="projInfo">a NASA Space Apps AI Project with a user interface to display data</p>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />

  </a>
  <a class='cards' href="https://github.com/a04k/Portfolio" target="_blank" rel="noopener noreferrer">
    <h3 class="projName">PortfolioB</h3>
    <p class="projInfo">my portfolio & blog website (the site you're on right now!)</p>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
  </a>
  <a class='cards' href="https://github.com/a04k/C207Proj" target="_blank" rel="noopener noreferrer">
    <h3 class="projName">Club DB</h3>
    <p class="projInfo">a Database project for a hypothetical sports and social club, as a university project</p>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
  </a>
  </div> 
  </div>
  )
}

