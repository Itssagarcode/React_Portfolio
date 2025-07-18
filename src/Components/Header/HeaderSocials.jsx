import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/bhushan-42659b265/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/Itssagarcode" target='_blank'><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials