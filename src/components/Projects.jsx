"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import styles from "./Projects.module.css";
import portfolioPreview from '../assets/portfolioPreview.jpg';
import luxeRidePreview from '../assets/luxeRidePreview.png';
import agriChainPreview from '../assets/agriChainPreview.png';
import gradiaPreview from "../assets/gradiaPreview.png";
import LeetCode from "./LeetCode";

const projects = [
  {
    title: "Gradia",
    description: "Gradia is an AI powered grading tool designed to help teachers evaluate student answers quickly and fairly. It uses Retrieval Augmented Generation (RAG) to match answers with the uploaded course material and grade responses accordingly - no random AI hallucinations, just grounded grading. It also provides students with helpful feedback and citations, so they know what they did right, what went wrong, and how to improve next time.",
    technologies: ["Python", "Node JS", "Next JS", "Express", "Gemini API", "GCP"],
    image: gradiaPreview,
    github: "https://github.com/tokenomists/Gradia",
    liveDemo: "https://gradia-tokenomists.vercel.app/"
  },
  {
    title: "AgriChain",
    description: "AgriChain is a blockchain-powered platform that connects farmers and consumers directly, ensuring fair pricing, transparency, and sustainability in agriculture through smart contracts and AI-driven insights.",
    technologies: ["Next JS", "Tailwind CSS", "Node JS", "Express", "Gemini API"],
    image: agriChainPreview,
    github: "https://github.com/tokenomists/AgriChain",
    liveDemo: null, 
  },
  {
    title: "Link-Us",
    description:
      "LinkUs is a Python-based Social Networking System that enables users to connect based on shared hobbies and mutual connections. It offers functionalities such as user registration, hobby management and friend recommendations based on different criteria. It also features a post and messaging system to facilitate interaction among users.",
    technologies: ["Python", "Data Structures and Algorithms"],
    image: "https://as2.ftcdn.net/v2/jpg/00/71/77/63/1000_F_71776384_zRstSHXTHOfRmvuXy1jQGnt14QO3SqhH.jpg",
    github: "https://github.com/adithya-menon-r/Link-Us",
    liveDemo: null,
  },
  {
    title: "Personal Portfolio",
    description: "A personal portfolio website built using Vite, React to showcase my skills, projects, certifications, and achievements. It features a modern UI, smooth animations, and a responsive design. Deployed on Vercel for fast performance.",
    technologies: ["React", "CSS"],
    image: portfolioPreview,
    github: "https://github.com/Aashiq-Edavalapati/My_Portfolio",
    liveDemo: "https://aashiqedavalapati.vercel.app/",
  },
  {
    title: "LuxeRide Rentals",
    description: "A modern and efficient Car Rental Website designed for seamless vehicle booking and management. This platform ensures a hassle-free experience for users looking to rent cars, with real-time availability, secure authentication, and an intuitive UI.",
    technologies: ["HTML", "CSS", "JS", "Node JS", "Electron"],
    image: luxeRidePreview,
    github: "https://github.com/Aashiq-Edavalapati/Car-Rental-Website",
    liveDemo: null,
  }
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  const handleToggleProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  const handleProjectInteraction = (project) => {
    setSelectedProject(project);
    setShowPreview(true);
  };

  const closePreview = () => {
    setShowPreview(false);
  };

  return (
    <section id="projects" className={styles.projects}>
      <h2 className="section-title">Projects & Achievements</h2>

      {/* Projects Grid */}
      <div className={styles.projectGrid}>
        {displayedProjects.map((project, index) => (
          <motion.div
            key={index}
            className={`${styles.projectCard} ${expandedProject === index ? styles.expanded : ""}`}
            onMouseEnter={() => setExpandedProject(index)}
            onMouseLeave={() => setExpandedProject(null)}
            onClick={() => handleProjectInteraction(project)}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <div className={styles.projectImageContainer}>
              <img src={project.image || "/placeholder.svg"} alt={project.title} className={styles.projectImage} />
              {project.liveDemo && (
                <div className={styles.viewLiveOverlay}>
                  <span>Click to view live preview</span>
                </div>
              )}
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
              <div className={styles.projectLinks}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  <Github size={16} />
                  GitHub
                </a>
                {project.liveDemo && (
                  <button className={`${styles.projectLink} ${styles.demoLink}`}>
                    <ExternalLink size={16} />
                    Live Demo
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All / View Less Button */}
      {projects.length > 3 && (
        <div className={styles.viewMoreContainer}>
          <button className={styles.viewMoreButton} onClick={handleToggleProjects}>
            {showAllProjects ? (
              <>
                <span>View Less</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 15l-6-6-6 6"></path>
                </svg>
              </>
            ) : (
              <>
                <span>View All</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </>
            )}
          </button>
        </div>
      )}

      {/* Preview Modal */}
      <AnimatePresence>
        {showPreview && selectedProject && (
          <motion.div
            className={styles.previewModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.previewContent}
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className={styles.previewHeader}>
                <h3>{selectedProject.title}</h3>
                <button className={styles.closeButton} onClick={closePreview}>
                  <X size={24} />
                </button>
              </div>

              <div className={styles.previewBody}>
                {selectedProject.liveDemo ? (
                  <div className={styles.iframeContainer}>
                    <iframe
                      src={selectedProject.liveDemo}
                      title={`${selectedProject.title} Preview`}
                      className={styles.previewIframe}
                      sandbox="allow-scripts allow-same-origin allow-forms"
                      loading="lazy" />
                  </div>
                ) : (
                  <div className={styles.noPreview}>
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className={styles.fallbackImage} />
                    <p>Live preview not available for this project</p>
                  </div>
                )}
              </div>

              <div className={styles.previewFooter}>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.previewLink}
                >
                  <Github size={18} />
                  View on GitHub
                </a>
                {selectedProject.liveDemo && (
                  <a
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.previewLink}
                  >
                    <ExternalLink size={18} />
                    Open in New Tab
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <LeetCode />
    </section>
  );
};

export default Projects;
