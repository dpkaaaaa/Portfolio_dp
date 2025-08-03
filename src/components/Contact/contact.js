import React, { useRef } from 'react';
import './contact.css';
import FacebookIcon from '../../assets/icons8-facebook-48.png';
import InstagramIcon from '../../assets/icons8-instagram-48.png';
import GithubIcon from '../../assets/icons8-github-30.png';
import LinkedInIcon from '../../assets/icons8-linkedin-48.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_t1z1tgq', 'template_nff21hq', form.current, {
        publicKey: 'A81n3hnlDvQTopB4TI-RE',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Email sent successfully.');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send email. Please try again later.');
        },
      );
  };
  
  return (
    <section id='contactPage'>
      <div id='contact'>
        <h1 className='contactPageTItle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type='text' className='name' placeholder='Your Name' name='your_name' required />
          <input type='email' className='email' placeholder='Your Email' name='your_email' required />
          <textarea className='msg' name='message' rows="5" placeholder='Your message' required></textarea>
          <button type='submit' value='Send' className='submitBtn'>Submit</button>
          <div className='links'>
            <a href="https://www.facebook.com/dipika.prajapati.35380" target="_blank" rel="noopener noreferrer" >
            <img src={FacebookIcon} alt='FacebookIcon' className='link' />
            </a>
            <a href="https://www.instagram.com/dipikaa__p/" target="_blank" rel="noopener noreferrer" >
            <img src={InstagramIcon} alt='InstagramIcon' className='link' />
            </a>
             <a href="https://github.com/dpkaaaaa" target="_blank" rel="noopener noreferrer" >
            <img src={GithubIcon} alt='GithubIcon' className='link' />
            </a>
             <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" >
            <img src={LinkedInIcon} alt='LinkedInIcon' className='link' />
            </a>
          </div>
        </form>
      </div>

    </section>
  )
}

export default Contact;
