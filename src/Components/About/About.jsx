import React from 'react'
import Me from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'

const About = () => {
  return (
    <section id='About'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
          <div className='about-me'>
            <div className="about-me-image">
              <img src={Me} alt="" />
            </div>
          </div>

          {/* -------right portion---- */}

          <div className='about-content'>
            <div className="about-cards">
              <article className='about-card'>
                 <FaAward/>
                <h5>Experience</h5>
                <small>Fresher</small>
              </article>
            </div>
          </div>
      </div>
    </section>
  )
}

export default About