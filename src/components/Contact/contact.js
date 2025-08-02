import React from 'react';
import './contact.css';
import FacebookIcon from'../../assets/icons8-facebook-48.png';
import InstagramIcon from'../../assets/icons8-instagram-48.png';
import GithubIcon from'../../assets/icons8-github-50.png';
import LinkedInIcon from'../../assets/icons8-linkedin-48.png';

const Contact = () => {
  return (
    <section id='contactPage'>
        <div id='contact'>
            <h1 className='contactPageTItle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below discuss any work opportunities.</span>
            <form className='contactForm'>
                <input type='text' className='name' placeholder='Your Name'/>
                <input type='email' className='email' placeholder='Your Email'/>
                <textarea  className='msg' name='message' rows="5" placeholder='Your message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={FacebookIcon} alt='FacebookIcon' className='link'/>
                     <img src={InstagramIcon} alt='InstagramIcon' className='link'/>
                      <img src={GithubIcon} alt='GithubIcon' className='link'/>
                       <img src={LinkedInIcon} alt='LinkedInIcon' className='link'/>
                </div>
            </form>
        </div>

    </section>
  )
}

export default Contact;
