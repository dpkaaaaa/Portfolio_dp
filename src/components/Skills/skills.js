import React from 'react';
import './skills.css';
import UIDesign from '../../assets/icons8-ui-ux-design-80.png';
import WebDesign from '../../assets/icons8-web-design-48.png';

const Skills = () => {
  return (
    <section id='skills'>
       <span className='skillTittle'>What I do</span>
       <span className='skillDesc'>I’m a web developer who enjoys creating responsive and user-friendly websites using the MERN stack (MongoDB, Express, React, Node.js). I love solving real-world problems with clean, simple code and intuitive design. I’m especially interested in working on features like recommendation systems and scheduling tools. Always eager to learn and grow, I enjoy improving user experiences and collaborating on meaningful projects.</span>
       
       <div className='skillBars'>
          <div className='skillBar'>
            <img src={UIDesign}alt='UIDesgin' className='skillBarImg'/>
            <div className='skillBarText'> 
                 <h2>UI/UX Design</h2>
                 <p>This is a demo text, you can write your own content here.</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
            <div className='skillBarText'> 
                 <h2>Web Design</h2>
                 <p>This demo text can be changed while making the production ready website.</p>
            </div>
          </div>
        
       </div>
    </section>
  )
}

export default Skills;
