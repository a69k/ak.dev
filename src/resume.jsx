import React from 'react';
import './assets/stylesheets/resume.scss'
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import { useTypewriter } from 'react-simple-typewriter';
import { Tooltip } from 'react-tooltip'


export default function Resume(){

  const [text1] = useTypewriter({
    words: [`Ahmed Khaled`],
    typeSpeed: 50
  });

  return (
    <div>
      <Navbar/>
      <div id="intro">
    
      <h1 data-tip='react-tooltip'>{text1}</h1>
      <Tooltip id="my-tooltip" />
      <h2>Software Engineer & Web Developer </h2> 
      <p>Based in Cairo, Egypt</p>


      </div>
      <div class="resumeSection">
        <h2 className='resumeSectionTitle'>Education</h2><hr/>
          <div class="resumeItem">
            <h3 class="resumeContentTitle"> Ain Shams University <span>Cairo, Egypt</span></h3>
            <p class="resumeContent">Pursuing a Bachelor of Science in Computer Science </p>
            <p class="resumeContent">Current GPA: <u>3.3</u> </p>
          </div>
      </div>
      <div class="resumeSection">
        <h2 className='resumeSectionTitle'>Technical Skills</h2><hr/>
        <div class="resumeItem">
            <p class="resumeContent"><span class="resumePoint">Programming Languages:</span> JS + (React.js & Svelte),HTML5, CSS3 + (SASS, Tailwind), Python, C++ </p>
            <p class="resumeContent"><span class="resumePoint">Design:</span> Adobe Photoshop, Adobe Illustrator, Figma </p>
            <p class="resumeContent"><span class="resumePoint">Microsoft Office:</span> Word, Excel, Powerpoint</p>
          </div>
        </div>
      <div class="resumeSection">
      <h2 className='resumeSectionTitle'>Experience</h2><hr/>
      <div class="resumeItem">
        <p class="resumeContentTitle">OSC FCIS<span>2024 Season</span></p>
          <p class="resumeContent">Web Development Team Member </p>      
        <p class="resumeContentTitle">Freelance Graphic Designer <span>2018-Current</span></p>
          <p class="resumeContent">Mostly Gaming Community Related Designs</p>
        </div>
      </div>
      <div class="resumeSection">
      <h2 className='resumeSectionTitle'>Projects</h2><hr/>
      <div class="resumeItem">
      <p class="resumeContentTitle">NAVERIS<span>NASA SPACE APPS 2023</span></p>
        <p class="resumeContent">an app that predicts natural disasters using AI continously fed by data and gives early warnings to potential affected areas </p>  
        <p class="resumeContent">contributed in designing the UI, and rendering data obtained from the models, obtained a galactic problem solver certificate as recognition for the effort </p>  
      </div>
      </div>
      <div class="resumeSection">
      <div class="resumeItem">
        <h2 className='resumeSectionTitle'>Hobbies</h2><hr/>
            <p class="resumeContent"><span class="resumePoint">Programming:</span> i mostly do fun projects to challenge myself and learn</p>
            <p class="resumeContent"><span class="resumePoint">Motorsport:</span> passionate about everything motorsports especially formula 1</p>
            <p class="resumeContent"><span class="resumePoint">Gaming:</span> a bit of fun (sometimes infuriating)</p>
        </div>
      </div>
    <Footer/>
    </div>

  );
}

