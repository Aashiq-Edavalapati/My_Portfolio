"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, Trophy, Target, Zap, ThumbsUp, Star, Award, Brain } from "lucide-react";
import styles from "./Projects.module.css";
import portfolioPreview from '../assets/portfolioPreview.jpg';
import luxeRidePreview from '../assets/luxeRidePreview.png';
import agriChainPreview from '../assets/agriChainPreview.png';

const projects = [
  {
    title: "Link-Us",
    description:
      "LinkUs is a Python-based Social Networking System that enables users to connect based on shared hobbies and mutual connections. It offers functionalities such as user registration, hobby management and friend recommendations based on different criteria. It also features a post and messaging system to facilitate interaction among users.",
    technologies: ["Python", "Data Structures and Algorithms"],
    image: "https://as2.ftcdn.net/v2/jpg/00/71/77/63/1000_F_71776384_zRstSHXTHOfRmvuXy1jQGnt14QO3SqhH.jpg",
    github: "https://github.com/adithya-menon-r/Link-Us",
  },
  {
    title: "Personal Portfolio",
    description: "A personal portfolio website built using Vite, React to showcase my skills, projects, certifications, and achievements. It features a modern UI, smooth animations, and a responsive design. Deployed on Vercel for fast performance.",
    technologies: ["React", "CSS"],
    image: portfolioPreview,
    github: "https://github.com/Aashiq-Edavalapati/My_Portfolio",
  },
  {
    title: "LuxeRide Rentals",
    description: "A modern and efficient Car Rental Website designed for seamless vehicle booking and management. This platform ensures a hassle-free experience for users looking to rent cars, with real-time availability, secure authentication, and an intuitive UI.",
    technologies: ["HTML", "CSS", "JS", "Node JS", "Electron"],
    image: luxeRidePreview,
    github: "https://github.com/Aashiq-Edavalapati/Car-Rental-Website",
  },
  {
    title: "AgriChain",
    description: "AgriChain is a blockchain-powered platform that connects farmers and consumers directly, ensuring fair pricing, transparency, and sustainability in agriculture through smart contracts and AI-driven insights.",
    technologies: ["Next JS", "Tailwind CSS", "Node JS", "Express", "Gemini API"],
    image: agriChainPreview,
    github: "https://github.com/tokenomists/AgriChain",
  }
]

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null)

  return (
    <section id="projects" className={styles.projects}>
      <h2 className="section-title">Projects & Achievements</h2>

      {/* Projects Grid */}
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${styles.projectCard} ${expandedProject === index ? styles.expanded : ""}`}
            onMouseEnter={() => setExpandedProject(index)}
            onMouseLeave={() => setExpandedProject(null)}
          >
            <div className={styles.projectImageContainer}>
              <img src={project.image || "/placeholder.svg"} alt={project.title} className={styles.projectImage} />
            </div>
            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectTechnologies}>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

