import React from "react";
import "./About.css";
import Me from "../../assets/me-about.png";
import { FaAward, FaSchool, FaUsers } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { MdCastForEducation } from "react-icons/md";

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
              <VscFolderLibrary className="about_icon" />
              <h5>Certificate</h5>
              <small>4+ Meta</small>
            </article>

            <article className="about-card">
              <FaSchool className="about_icon" />
              <h5>Education</h5>
              <small>Post Graduate</small>
            </article>
          </div>

          <p>
            Aspiring front-end developer with a strong foundation in web
            development and a background in computer applications. Proficient in
            React, JavaScript, HTML/CSS, and database technologies like MongoDB
            and MySQL. Built responsive and interactive projects like a hotel
            booking platform and a food ordering app. Passionate about UI/UX and
            eager to contribute to real-world solutions as a full-stack
            developer.
          </p>

          <a href="#Contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
