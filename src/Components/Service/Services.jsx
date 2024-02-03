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
              <h3>UI/UX Design</h3>
            </div>
            <ul className='service-list'>
               <li>
                <BiCheck className='service-list-icon'/>
                <p>Lorem ipsum dolor sit amet.</p>
               </li>
               <li>
                <BiCheck className='service-list-icon'/>
                <p>Lorem ipsum dolor sit amet.</p>
               </li>
               <li>
                <BiCheck className='service-list-icon'/>
                <p>Lorem ipsum dolor sit amet.</p>
               </li>
               <li>
                <BiCheck className='service-list-icon'/>
                <p>Lorem ipsum dolor sit amet.</p>
               </li>
               <li>
                <BiCheck className='service-list-icon'/>
                <p>Lorem ipsum dolor sit amet.</p>
               </li>
            </ul>
          </article>
          {/* END of UI/UX */}

          <article className='service'>
            <div className="service-head">
              <h3>React Application</h3>
            </div>
            <ul className='service-list'>
               <li>
                <BiCheck className='service-list-icon'/>
                <p>Lorem ipsum dolor sit amet.</p>
               </li>
               <li>
                <BiCheck className='service-list-icon'/>
                <p>Lorem ipsum dolor sit amet.</p>
               </li>
               <li>
                <BiCheck className='service-list-icon'/>
                <p>Lorem ipsum dolor sit amet.</p>
               </li>
               <li>
                <BiCheck className='service-list-icon'/>
                <p>Lorem ipsum dolor sit amet.</p>
               </li>
               <li>
                <BiCheck className='service-list-icon'/>
                <p>Lorem ipsum dolor sit amet.</p>
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
                <p>Lorem ipsum dolor sit amet.</p>
               </li>
               <li>
                <BiCheck className='service-list-icon'/>
                <p>Lorem ipsum dolor sit amet.</p>
               </li>
               <li>
                <BiCheck className='service-list-icon'/>
                <p>Lorem ipsum dolor sit amet.</p>
               </li>
               <li>
                <BiCheck className='service-list-icon'/>
                <p>Lorem ipsum dolor sit amet.</p>
               </li>
               <li>
                <BiCheck className='service-list-icon'/>
                <p>Lorem ipsum dolor sit amet.</p>
               </li>
            </ul>
          </article>
      </div>
    </section>
  )
}

export default Services