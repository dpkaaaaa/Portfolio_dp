import React, { useState } from 'react';
import './works.css';
import Work1 from '../../assets/work1.png';
import Work2 from '../../assets/work1.1.png';
import Work3 from '../../assets/work2.png';
import Work4 from '../../assets/work2.1.png';
import Work5 from '../../assets/work3.png';



const projects = [
  {
    title: "Specspecs – Eyewear E-commerce Website",
    desc: "A responsive platform for buying and selling eyewear, built with HTML, CSS, JavaScript, PHP, and MySQL. Features dynamic product listings, filtering, detailed views, and eSewa payment integration for a smooth shopping experience across desktop and mobile devices.",
    images: [Work1, Work2],
  },
  {
    title: "Portal – Nagrik App",
    desc: "A government services web portal built with Django and Python, featuring secure user authentication, citizenship verification, and +2 exam result display. The project focuses on providing a reliable backend for safe data handling while offering an intuitive and accessible interface for users.",
    images: [Work3, Work4],
  },
  {
    title: "Event Recommendation System",
    desc: "A smart web application that suggests events based on user interests. It provides fast, personalized recommendations using a search index and recommendation engine, making it easy for users to discover relevant events.",
    images: [Work5],
  },
  {
    title: "Project Four",
    desc: "Description for Project Four.",
    images: [],
  },
  // Add more projects here
];

const Works = () => {
  const [visibleCount, setVisibleCount] = useState(2); // show first 2 projects initially

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 2); // load 2 more projects each click
  };

  return (
    <section id='works'>
      <h2 className='worksTitle'>My Projects</h2>
  
       <div className='worksContainer'>
    {projects.slice(0, visibleCount).map((project, index) => (
      <div key={index} className='projectCard'>
        <h3 className='projectTitle'>
          {index + 1}. {project.title}
        </h3>
        <p className='projectDesc'>{project.desc}</p>
        <div className='projectImgs'>
          {project.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${project.title} - Image ${i + 1}`}
              className='projectImg'
            />
          ))}
        </div>
      </div>
    ))}
  </div>

      {visibleCount < projects.length && (
        <button className='workBtn' onClick={handleSeeMore}>See more</button>
      )}
    </section>






    // <section id='works'>  
    //    <h2 className='worksTitle'>My Projects</h2>
    //    <span className='worksDesc'> I take the prode paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help business achieve their goals and create a strong online presence.</span>
    //    <div className='worksImgs'>
    //     <img src={Work1} alt='work1' className='worksImg'/>
    //     <img src={Work2} alt='work2' className='worksImg'/>
    //     <img src={Work3} alt='work3' className='worksImg'/>
    //     <img src={Work4} alt='work4' className='worksImg'/>
    //    </div>
    //    <button className='workBtn'>See more</button>
    // </section>
  )
}

export default Works;
