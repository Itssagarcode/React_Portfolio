import React from "react";
import './About.css'
import Me from "../../assets/me-about.jpg";
import { FaAward, FaUsers } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="About">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={Me} alt="" />
          </div>
        </div>

        {/* -------right portion---- */}

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className="about-card">
              <FaUsers className="about_icon" />
              <h5>Clients</h5>
              <small>Fresher</small>
            </article>

            <article className="about-card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>Fresher</small>
            </article>
          </div>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
            tempore, voluptatem numquam quis cum unde voluptates qui et rem
            quisquam magnam accusamus possimus sint doloremque, beatae,
            necessitatibus dolorum odio laudantium!
          </p>

          <a href="#Contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
