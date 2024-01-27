import {React} from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Navbar from './Components/navbar';
import Footer from './Components/footer'
import Content from './Components/mainPageContent'
import './assets/stylesheets/home.scss'

export default function Home (){
  const [text1] = useTypewriter({
    words: [`Hi, I'm Ahmed`],
    typeSpeed: 50
  });
  const [text2] = useTypewriter({
    words: [`software engineer, designer, and student`],
    typeSpeed: 50
  });


  return (
    <div className='home'>
      <Navbar />
      <div className='intro'>
        <h1>{text1}<span id="cursor"><Cursor/></span></h1>
        <p>{text2}</p>
      </div>
      <Content />
      <Footer />
    </div>
  );
};



