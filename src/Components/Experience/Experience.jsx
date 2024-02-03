import React from 'react'
import './Experience.css'
import { BsFillPatchCheckFill } from "react-icons/bs"

const Experience = () => {
  return (
    <section  id="Experience">
      <h5>what Skills I Have</h5>
      <h2>My Experience</h2>

      <div className=" container experience-container">
        <div className="experience-frontend">
           <h3>Frontend Development</h3>
           <div className="experience-content">
            <article className='experience-details'>
                 <BsFillPatchCheckFill  className="check-icon"/>
                 <div>
                 <h4>HTML</h4>
                 <small>Experienced</small>
                 </div>
              
            </article>

            <article className='experience-details'>
                 <BsFillPatchCheckFill className="check-icon"/>
                 <div>
                 <h4>CSS</h4>
                 <small>Intermediate</small>

                 </div>

            </article>

            <article className='experience-details'>
                 <BsFillPatchCheckFill className="check-icon"/>
                 <div>
                 <h4>JavaScript</h4>
                 <small>Intermediate</small>
                 </div>

            </article>


            <article className='experience-details'>
                 <BsFillPatchCheckFill className="check-icon"/>
                 <div>
                 <h4>React</h4>
                 <small>Beginer</small>
                 </div>

            </article>

            <article className='experience-details'>
                 <BsFillPatchCheckFill className="check-icon"/>
                     <div>
                     <h4>Tailwind</h4>
                 <small>Intermediate</small>
                     </div>
            </article>
           </div>
        </div>
        {/* --------Backend skills----- */}

        <div className="experience-backend">
            <h3>Backend Devlopment</h3>
            <div className="experience-content">
            <article className='experience-details'>
                 <BsFillPatchCheckFill className="check-icon"/>
                     <div>
                     <h4>MySql</h4>
                 <small>Experienced</small>
                     </div>
            </article>

            <article className='experience-details'>
                 <BsFillPatchCheckFill className="check-icon"/>
                 <div>
                 <h4>MongoDb</h4>
                 <small>Intermediate</small>
                 </div>

            </article>

            <article className='experience-details'>
                 <BsFillPatchCheckFill className="check-icon"/>
                <div>
                <h4>Python</h4>
                 <small>Intermediate</small>
                </div>
            </article>
           </div>
        </div>
      </div>

    </section>
  )
}

export default Experience