import React, { useState } from 'react'
import './Nav.css'
import {AiFillBook, AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessage } from 'react-icons/bi'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#About" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><AiOutlineUser/></a>
      <a href="#Experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiFillBook/></a>
      <a href="#Services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#Contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessage/></a>
    </nav>
  )
}

export default Nav