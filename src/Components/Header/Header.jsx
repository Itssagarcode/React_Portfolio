import React from 'react'
import './Header.css'
import CTA from './CTA'
import Me from '../../assets/me.png'
const Header = () => {
  return (
    <div>
      <div className="container header_container">
        <h5>Hello I'm</h5>
          <h1>Bhushan</h1>
          <h5 className='taxt-light'>Front-end developer</h5>
          <CTA/>
          <div className="me">
            <img src="" alt="" />
          </div>
        <a href="#Contact" className='scroll-down'>Scroll_Down</a>
      </div>
    </div>
  )
}

export default Header