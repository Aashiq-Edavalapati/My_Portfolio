"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Trophy, Target, Zap, ThumbsUp, Star, Award, Brain, X, ExternalLink, Github } from "lucide-react";
import styles from "./Projects.module.css";
import portfolioPreview from '../assets/portfolioPreview.jpg';
import luxeRidePreview from '../assets/luxeRidePreview.png';
import agriChainPreview from '../assets/agriChainPreview.png';
import fiftyday2025 from '../assets/2025-50.gif';

const projects = [
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
    liveDemo: "https://luxeride-rentals.vercel.app/",
  },
  {
    title: "AgriChain",
    description: "AgriChain is a blockchain-powered platform that connects farmers and consumers directly, ensuring fair pricing, transparency, and sustainability in agriculture through smart contracts and AI-driven insights.",
    technologies: ["Next JS", "Tailwind CSS", "Node JS", "Express", "Gemini API"],
    image: agriChainPreview,
    github: "https://github.com/tokenomists/AgriChain",
    liveDemo: null, 
  }
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const consistencyData = Array.from({ length: 52 }, () =>
    Array.from({ length: 7 }, () => Math.floor(Math.random() * 4)),
  );
  const [leetCodeData, setLeetCodeData] = useState({
    totalSolved: '-',
    easySolved: '-',
    totalEasy: '-',
    mediumSolved: '-',
    totalMedium: '-',
    hardSolved: '-',
    totalHard: '-',
    contestRating: '-',
    contestGlobalRanking: '-',
    totalSubmissions: '-',
    solutionsPublished: '-',
    ranking: '-',
    reputation: '-',
    dailyStreak: '-'
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const leetcodeProfile = "https://leetcode.com/u/Aashiq_Edavalapati/";
  
  useEffect(() => {
    const fetchLeetCodeData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/leetcode/Aashiq_Edavalapati`);
        
        if (!response.ok) {
          throw new Error('Scraping failed');
        }
  
        const data = await response.json();
        const { stats } = data;
  
        setLeetCodeData({
          totalSolved: parseInt(stats.totalSolved) || 0,
          easySolved: parseInt(stats.easySolved) || 0,
          totalEasy: parseInt(stats.totalEasy) || stats.easySolved || 0,
          mediumSolved: parseInt(stats.mediumSolved) || 0,
          totalMedium: parseInt(stats.totalMedium) || stats.mediumSolved || 0,
          hardSolved: parseInt(stats.hardSolved) || 0,
          totalHard: parseInt(stats.totalHard) || stats.hardSolved || 0,
          contestRating: parseInt(stats.contestRating) || 0,
          contestGlobalRanking: parseInt(stats.contestRanking) || 0,
          solutionsPublished: parseInt(stats.solutions.published) || 0,
          solutionUpvotes: parseInt(stats.solutions.upvotes) || 0,
          reputation: parseInt(stats.reputation) || 0,
          views: parseInt(stats.views) || 0
        });
      } catch (error) {
        console.error('Error fetching scraped data:', error);
        
        try {
          const response = await fetch('https://leetcode-stats-api.herokuapp.com/Aashiq_Edavalapati');
          const data = await response.json();
          
          if (data.status === 'success') {
            setLeetCodeData(prevData => ({
              ...prevData,
              totalSolved: data.totalSolved || 0,
              easySolved: data.easySolved || 0,
              totalEasy: data.totalEasy || 0,
              mediumSolved: data.mediumSolved || 0,
              totalMedium: data.totalMedium || 0,
              hardSolved: data.hardSolved || 0,
              totalHard: data.totalHard || 0,
              ranking: data.ranking || 0,
              reputation: data.reputation || 0,
              dailyStreak: data.dailyStreak || "100+",
            }));
          }
        } catch (fallbackError) {
          console.error('Fallback API also failed:', fallbackError);
        }
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchLeetCodeData();
    const interval = setInterval(fetchLeetCodeData, 300000);
    return () => clearInterval(interval);
  }, []);

  const handleProjectInteraction = (project) => {
    setSelectedProject(project);
    setShowPreview(true);
  };

  const closePreview = () => {
    setShowPreview(false);
  };
  
  const stats = [
    {
      title: "Total Problems Solved",
      value: leetCodeData.totalSolved,
      icon: <Code2 size={24} />,
      color: "var(--color-primary)"
    },
    {
      title: "Contest Rating",
      value: leetCodeData.contestRating,
      icon: <Trophy size={24} />,
      color: "var(--color-secondary)"
    },
    {
      title: "Daily Streak",
      value: leetCodeData.dailyStreak,
      icon: <Zap size={24} />,
      color: "var(--color-accent)"
    },
    {
      title: "Solutions Published",
      value: leetCodeData.solutionsPublished === '-' ? 26 : leetCodeData.solutionsPublished,
      icon: <Star size={24} />,
      color: "var(--color-success)"
    },
    {
      title: "Solution Upvotes",
      value: leetCodeData.reputation === '-' ? 0 : leetCodeData.reputation,
      icon: <ThumbsUp size={24} />,
      color: "var(--color-info)"
    },
    {
      title: "Global Ranking",
      value: `#${leetCodeData.ranking}`,
      icon: <Award size={24} />,
      color: "var(--color-warning)"
    }
  ];
  
  const difficultyStats = [
    {
      title: "Easy",
      value: leetCodeData.easySolved || 0,
      total: leetCodeData.totalEasy || 0,
      color: "#00b8a3"
    },
    {
      title: "Medium",
      value: leetCodeData.mediumSolved || 0,
      total: leetCodeData.totalMedium || 0,
      color: "#ffc01e"
    },
    {
      title: "Hard",
      value: leetCodeData.hardSolved || 0,
      total: leetCodeData.totalHard || 0,
      color: "#ff375f"
    }
  ];
  
  const badges = [
    {
      src: "https://assets.leetcode.com/static_assets/marketing/2024-50.gif",
      alt: "50 Problems Badge"
    },
    {
      src: "https://assets.leetcode.com/static_assets/marketing/2024-100.gif",
      alt: "100 Problems Badge"
    },
    {
      src: "https://assets.leetcode.com/static_assets/marketing/2024-200.gif",
      alt: "200 Problems Badge"
    },
    {
      src: "https://assets.leetcode.com/static_assets/marketing/365_new.gif",
      alt: "365 Days Badge"
    },
    {
      src: "https://assets.leetcode.com/static_assets/marketing/2024.gif",
      alt: "2024 Badge"
    },
    {
      src: fiftyday2025,
      alt: "50 day badge 2025"
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h2 className="section-title">Projects & Achievements</h2>
      
      {/* Projects Grid */}
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
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
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className={styles.noPreview}>
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className={styles.fallbackImage} 
                    />
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
      
      {/* LeetCode Achievement Section */}
      <div className={styles.leetcodeSection}>
        <h3 className={styles.leetcodeTitle}>LeetCode Journey</h3>
        <div className={styles.leetcodeBadges}>
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              className={styles.badgeContainer}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <img src={badge.src || "/placeholder.svg"} alt={badge.alt} className={styles.leetcodeBadge} />
            </motion.div>
          ))}
        </div>
        <div className={styles.leetcodeStats}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={styles.statCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.statIcon} style={{ color: stat.color }}>
                {stat.icon}
              </div>
              <h4>{stat.value}</h4>
              <p>{stat.title}</p>
            </motion.div>
          ))}
        </div>
        <div className={styles.difficultyBreakdown}>
          <h4 className={styles.breakdownTitle}>
            <Brain size={18} />
            Problem Solving Breakdown
          </h4>
          <div className={styles.difficultyStats}>
            {difficultyStats.map((stat, index) => (
              <motion.div
                key={index}
                className={styles.difficultyStat}
                data-difficulty={stat.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={styles.difficultyLabel} style={{ color: stat.color }}>
                  {stat.title}
                </div>
                <div className={styles.difficultyValue} style={{ color: stat.color }}>
                  {stat.value}/{stat.total}
                </div>
                <div className={styles.barContainer}>
                  <div
                    className={styles.difficultyBar}
                    style={{
                      backgroundColor: stat.color,
                      width: `${(stat.value / stat.total) * 100}%`
                    }}
                  >
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className={styles.consistencyGraph}>
          <h4 className={styles.graphTitle}>
            <Target size={18} />
            Consistency Graph
          </h4>
          <div className={styles.graphContainer}>
            {consistencyData.map((week, weekIndex) => (
              <div key={weekIndex} className={styles.graphWeek}>
                {week.map((value, dayIndex) => (
                  <motion.div
                    key={dayIndex}
                    className={styles.graphDay}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: (weekIndex * 7 + dayIndex) * 0.001,
                      duration: 0.3,
                    }}
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 0.2 },
                    }}
                    style={{
                      backgroundColor: `rgba(0, 255, 255, ${value * 0.25})`,
                    }}
                    title={`${value} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className={styles.graphLegend}>
            <span>Less</span>
            <div className={styles.legendSquares}>
              {[0, 1, 2, 3].map((level) => (
                <div
                  key={level}
                  className={styles.legendSquare}
                  style={{
                    backgroundColor: `rgba(0, 255, 255, ${level * 0.25})`,
                  }}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;