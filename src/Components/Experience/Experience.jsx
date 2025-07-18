import React from 'react'
import './Experience.css'
import { BsFillPatchCheckFill } from "react-icons/bs"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaFigma, FaJava, FaProjectDiagram, FaUserAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiMysql, SiVisualstudiocode, SiCanva, SiAdobexd,  } from 'react-icons/si';
import { MdOutlineDesignServices, MdTextFields } from 'react-icons/md';

const Experience = () => {
       const skills = [
    {
      title: "Frontend",
      items: [
        { name: "HTML", icon: <FaHtml5 color="#e34c26" /> },
        { name: "CSS", icon: <FaCss3Alt color="#264de4" /> },
        { name: "JavaScript", icon: <FaJs color="#f7df1e" /> },
        { name: "React", icon: <FaReact color="#61dbfb" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss color="#38bdf8" /> },
      ],
    },
   {
  title: "UI/UX Design",
  items: [
    { name: "Figma", icon: <FaFigma color="#a259ff" /> },
    { name: "Typography", icon: <MdTextFields color="#f59e0b" /> },
    { name: "Wireframing", icon: <FaProjectDiagram color="#6366f1" /> },
    { name: "User Research", icon: <FaUserAlt color="#3b82f6" /> },
    { name: "Prototyping", icon: <MdOutlineDesignServices color="#ef4444" /> },
  ],
}
,
    {
      title: "Database",
      items: [
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "MySQL", icon: <SiMysql color="#00758F" /> },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Git", icon: <FaGitAlt color="#F05032" /> },
        { name: "GitHub", icon: <FaGithub color="#fff" /> },
        { name: "VS Code", icon: <SiVisualstudiocode color="#0078d7" /> },
        { name: "Figma", icon: <FaFigma color="#a259ff" /> },
        { name: "Canva", icon: <SiCanva color="#00C4CC" /> },
      ],
    },
  ];
  return (
    <section  id="Experience">
      <h5>what Skills I Have</h5>
      <h2 className='heading'>My Skills</h2>

      <div className=" container experience-container">
        <div className="experience-frontend">
                <div className="skills-grid">
        {skills.map((category, index) => (
          <div className="skill-card" key={index}>
            <h3 className="skill-title">{category.title}</h3>
            <ul className="skill-list">
              {category.items.map((item, i) => (
                <li key={i} className="skill-item">
                  <span className="icon">{item.icon}</span>
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
         
           </div>
        </div>
      


    </section>





  )
}

export default Experience