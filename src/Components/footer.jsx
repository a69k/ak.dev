import React from 'react';
import CityTime from './cityClock';
import '../assets/stylesheets/footer.scss'
import linkedin from '../assets/Vectors/linkedin.svg'
import github from '../assets/Vectors/github.svg'
import mail from '../assets/Vectors/mail.svg'


export default function Footer () {
  return (
  <div className='footer'>
    <div className='footerIcons'>
        <li><a href="https://www.linkedin.com/in/ahmedkhaled14/" target="_blank"> <img src={linkedin}></img> </a></li>
        <li><a href="https://github.com/a04k/" target="_blank"><img src= {github}></img></a></li>
        <li><a href="mailto:63ahmedkhaled@gmail.com"><img src ={mail}></img></a></li>
  </div>
  <div className='time'><CityTime/></div>
  <p>ahmed.dev 📦🚀 2024</p>
  </div>
  );
};

