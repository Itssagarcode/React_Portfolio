import React from 'react'
import './Portfolio.css'
import Img1 from '../../assets/portfolio1.png'
import Img2 from '../../assets/portfolio2.png'
import Img3 from '../../assets/portfolio3.png'
import Img4 from '../../assets/portfolio4.png'
import Img5 from '../../assets/portfolio5.png'
import Img6 from '../../assets/portfolio6.png'

const data = [
  {
    id: 1,
    image: Img1,
    title: "Hotel Booking WebApp",
    github: "https://github.com/Itssagarcode/Hotel-Booking-web-app",
    demo: "https://hotel-booking-mu-six.vercel.app/",
  },
  {
    id: 2,
    image: Img2,
    title: "Food Odering WebApp",
    github: "https://github.com/Itssagarcode/React_projects/tree/main/food-deliver-app-react/frontend",
    demo: "https://bhushan-food-ordering.netlify.app/",
  },
  {
    id: 3,
    image: Img3,
    title: "Pokedex",
    github: "https://github.com/Itssagarcode/Pokedex_project",
    demo: "https://bhushan-pokedex.netlify.app/",
  },
  {
    id: 4,
    image: Img4,
    title: "Youtube Clone React",
    github: "https://github.com/Itssagarcode/React_projects/tree/main/Youtube-clone",
    demo: "https://bhushan-youtube-clone.netlify.app/",
  },
  {
    id: 5,
    image: Img5,
    title: "OneRail Ticket Booking App Design",
    github: "https://github.com/Itssagarcode",
    demo: "https://www.figma.com/proto/lq31d7lg4xzdTzuIyIX3VS/OneRail?page-id=0%3A1&node-id=2-505&p=f&viewport=127%2C-840%2C0.32&t=5H4NhaphSftEaUO9-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2%3A602&show-proto-sidebar=1",
  },
  {
    id: 6,
    image: Img6,
    title: "Interior Design Website Landing Page Design",
    github: "https://github.com/Itssagarcode",
    demo: "https://www.figma.com/proto/a30hRaYCeeSgYiX2lO5K8V/Interior-Design?page-id=0%3A1&node-id=1-3&viewport=433%2C165%2C0.11&t=60tNhrzjhOwj6JQ4-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A3",
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