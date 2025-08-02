import React from 'react';
import './intro.css';
import {Link} from 'react-scroll';
import bg from '../../assets/profile.jpg';
import btnImg from '../../assets/icons8-hire-me-50.png';
const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
           <span className='hello'>Hello,</span>
           <span className='introText'>I'm<span className='introName'> Dipika</span> <br/>Web Developer</span>
           <p className='intropara'>I am a skilled web developer with experience in creating responsive, user- <br/>friendly webapplications using React, JavaScript, HTML, CSS, and Node.js.</p>
          <Link><button className='btn'><img src={btnImg} alt='Hire' className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt='Profile' className='bg'/>
    </section>
  
  )
}

export default Intro;


