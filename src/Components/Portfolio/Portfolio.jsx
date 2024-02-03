import React from 'react'
import './Portfolio.css'
import Img1 from '../../assets/portfolio1.jpg'
import Img2 from '../../assets/portfolio2.jpg'
import Img3 from '../../assets/portfolio3.jpg'
import Img4 from '../../assets/portfolio4.jpg'
import Img5 from '../../assets/portfolio5.png'
import Img6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: Img1,
    title: "currency Convertor",
    github: "https://github.com/Itssagarcode",
    demo: "https://www.linkedin.com/in/bhushan-42659b265/",
  },
  {
    id: 2,
    image: Img2,
    title: "currency Convertor",
    github: "https://github.com/Itssagarcode",
    demo: "https://www.linkedin.com/in/bhushan-42659b265/",
  },
  {
    id: 3,
    image: Img3,
    title: "currency Convertor",
    github: "https://github.com/Itssagarcode",
    demo: "https://www.linkedin.com/in/bhushan-42659b265/",
  },
  {
    id: 4,
    image: Img4,
    title: "currency Convertor",
    github: "https://github.com/Itssagarcode",
    demo: "https://www.linkedin.com/in/bhushan-42659b265/",
  },
  {
    id: 5,
    image: Img5,
    title: "currency Convertor",
    github: "https://github.com/Itssagarcode",
    demo: "https://www.linkedin.com/in/bhushan-42659b265/",
  },
  {
    id: 6,
    image: Img6,
    title: "currency Convertor",
    github: "https://github.com/Itssagarcode",
    demo: "https://www.linkedin.com/in/bhushan-42659b265/",
  },
];

const Portfolio = () => {
  return (
   <section id="Portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio-container">
    {
      data.map(({id,image,title,github,demo}) =>{
        return (
          <article key={id} className='portfolio-item'>
          <div className="portfolio-item-image">
            <img src={image} alt="" />
          </div>
          <h3>{title}</h3>
          <div className='portfolio-item-cta'>
          <a href={github} className="btn" target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
         </article>
        )
      })

}
      </div>  
   </section>
  )
}

export default Portfolio