import React from 'react';
import './works.css';
import Work1 from '../../assets/work1.png';
import Work2 from '../../assets/work1.1.png';
import Work3 from '../../assets/work2.png';
import Work4 from '../../assets/work2.1.png';

const Works = () => {
  return (
    <section id='works'>
       <h2 className='worksTitle'>My Portfolio</h2>
       <span className='worksDesc'> I take the prode paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help business achieve their goals and create a strong online presence.</span>
       <div className='worksImgs'>
        <img src={Work1} alt='work1' className='worksImg'/>
        <img src={Work2} alt='work2' className='worksImg'/>
        <img src={Work3} alt='work3' className='worksImg'/>
        <img src={Work4} alt='work4' className='worksImg'/>
       </div>
       <button className='workBtn'>See more</button>
    </section>
  )
}

export default Works;
