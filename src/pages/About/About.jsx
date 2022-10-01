import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About</h2>
            <h3>Vignesh Vicky</h3>
            <h6 className='fs-17'>The Library of Immortal world is the largest library in the world, with millions of books, photographs, newspapers, maps and manuscripts in its collections. The Library is the main research arm of the U.S. Congress and the home of the U.S. Copyright Office.

The Library preserves and provides access to a rich, diverse and enduring source of knowledge to inform, inspire and engage you in your intellectual and creative endeavors. Whether you are new to the Library of Immortals or an experienced researcher, we have a world-class staff ready to assist you online and in person.

I encourage you to visit the Library of Immortal Books in person in Washington, D.C., explore the Library online from wherever you are and connect with us on social media.</h6>
            {/* <p className='fs-17'></p> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
