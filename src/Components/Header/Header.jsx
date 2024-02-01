import React from 'react'
import './Header.css'
import CTA from './CTA'

import Me from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
          <h1>Bhushan</h1>
          <h5 className='taxt-light'>Front-end developer</h5>
          <CTA/>
          <HeaderSocials/>
          <div className="me">
            <img src={Me} alt="" />
          </div>
        <a href="#Contact" className='scroll-down'>Scroll_Down</a>
      </div>
    </header>
  )
}

export default Header