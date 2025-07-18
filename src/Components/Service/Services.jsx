import React from 'react'
import {BiCheck} from 'react-icons/bi'
import './Services.css'
const Services = () => {
  return (
    <section id="Services">
      <h5>What I offers</h5>
      <h2>Services</h2>

      <div className='container services-container'>
          <article className='service'>
            <div className="service-head">
              <h3>Responsive Web Design</h3>
            </div>
            <ul className='service-list'>
               <li>
                <BiCheck className='service-list-icon'/>
                <p>Designs adapt seamlessly across mobile, tablet, and desktop screens.</p>
               </li>
               <li>
                <BiCheck className='service-list-icon'/>
                <p>Focused on enhancing accessibility and user experience across devices.</p>
               </li>
               <li>
                <BiCheck className='service-list-icon'/>
                <p>Implements flexible grid systems using media queries and modern CSS.</p>
               </li>

            </ul>
          </article>
          {/* END of UI/UX */}

          <article className='service'>
            <div className="service-head">
              <h3>Frontend Development</h3>
            </div>
            <ul className='service-list'>
               <li>
                <BiCheck className='service-list-icon'/>
                <p>Builds reusable, modular components using React.js.</p>
               </li>
               <li>
                <BiCheck className='service-list-icon'/>
                <p>Implements state management and routing for smooth navigation.</p>
               </li>
               <li>
                <BiCheck className='service-list-icon'/>
                <p>Integrates with APIs to fetch and display dynamic content.</p>
               </li>
            </ul>
          </article>
          {/* ---------- */}

          <article className='service'>
            <div className="service-head">
              <h3>UI/UX Design</h3>
            </div>
            <ul className='service-list'>
               <li>
                <BiCheck className='service-list-icon'/>
                <p>Creates modern layouts using spacing, typography, and visual hierarchy.</p>
               </li>
               <li>
                <BiCheck className='service-list-icon'/>
                <p>Enhances visual appeal with icons, gradients, and animations.</p>
               </li>
               <li>
                <BiCheck className='service-list-icon'/>
                <p>Converts wireframes or mockups into pixel-perfect UI.</p>
               </li>
            </ul>
          </article>
      </div>
    </section>
  )
}

export default Services