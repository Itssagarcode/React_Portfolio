import React from "react";
import './Footer.css'
import {  FaGithub, FaInstagram, FaLinkedin, } from 'react-icons/fa'
 

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer-logo">
        <ul className="permalinks">
          <li><a href="#">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Experience">Experience</a></li>
          <li><a href="#Services">Services</a></li>
          <li><a href="#Portfolio">Portfolio</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </a>
      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/bhushan-42659b265"><FaLinkedin/></a>
        <a href="https://github.com/Itssagarcode"><FaGithub/></a>
        <a href=""><FaInstagram/></a>
      </div>
      <div className="footer-copyright">bhushan @copyrights 2024</div>
    </footer>
  );
};

export default Footer;
