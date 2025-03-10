import { useState, useEffect } from 'react';
import styles from "./Skills.module.css";
import pythonLogo from "../assets/skills/python.png";
import javaLogo from "../assets/skills/java.png";
import javascriptLogo from "../assets/skills/javascript.png";
import cLogo from "../assets/skills/c.png";
import cppLogo from "../assets/skills/cpp.png";
import goLogo from "../assets/skills/go.png";
import haskellLogo from "../assets/skills/haskell.png";
import htmlLogo from "../assets/skills/html.png";
import cssLogo from "../assets/skills/css.png";
import reactLogo from "../assets/skills/react.png";
import expressLogo from "../assets/skills/express.png";
import nodeLogo from "../assets/skills/node.png";
import oopLogo from "../assets/skills/oop.png";
import osLogo from "../assets/skills/os.png";
import dsaLogo from "../assets/skills/dsa.png";
import dbmsLogo from "../assets/skills/dbms.png";
import gitLogo from "../assets/skills/git.png";
import githubLogo from "../assets/github.png";
import linuxLogo from "../assets/skills/linux.png";
import bashLogo from "../assets/skills/bash.png";
import shellLogo from "../assets/skills/shell.png";
import mysqlLogo from "../assets/skills/mysql.png";
import numpyLogo from "../assets/skills/numpy.png";
import nextLogo from '../assets/skills/next.png';
import skillDetails from '../json/SkillDetails';
const skillCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Python", logo: pythonLogo },
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Go", logo: goLogo },
      { name: "Haskell", logo: haskellLogo },
    ],
  },
  {
    name: "Web Development",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "React JS", logo: reactLogo },
      { name: "Next JS", logo: nextLogo },
      { name: "Express JS", logo: expressLogo },
      { name: "Node JS", logo: nodeLogo },
    ],
  },
  {
    name: "Core Concepts",
    skills: [
      { name: "Object-Oriented Programming (OOP)", logo: oopLogo },
      { name: "Operating Systems", logo: osLogo },
      { name: "Data Structures & Algorithms", logo: dsaLogo },
      { name: "Database Management Systems (DBMS)", logo: dbmsLogo },
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Linux", logo: linuxLogo },
      { name: "Bash", logo: bashLogo },
      { name: "Shell Scripting", logo: shellLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "NumPy", logo: numpyLogo },
    ],
  },
];
const SkillModal = ({ skill, onClose }) => {
  const [activeTab, setActiveTab] = useState('demo');
  const [isCompiling, setIsCompiling] = useState(false);
  const [outputVisible, setOutputVisible] = useState(false);
  const [compilingProgress, setCompilingProgress] = useState(0);
  
  const details = skillDetails[skill.name] || {
    description: `Details about ${skill.name} will be added soon.`,
    experience: "Intermediate",
    startedYear: 2020,
    projects: [],
    certifications: [],
    codeSnippet: `// Example ${skill.name} code\nconsole.log("Hello, World!");`,
    codeOutput: "Hello, World!",
    useCases: [
      { name: "Web Development", description: "Building responsive websites", icon: "🌐" },
      { name: "Data Analysis", description: "Processing and visualizing data", icon: "📊" },
      { name: "Automation", description: "Automating repetitive tasks", icon: "⚙️" }
    ],
    strengthMeter: 75 // Percentage value
  };

  const runCode = () => {
    setIsCompiling(true);
    setOutputVisible(false);
    setCompilingProgress(0);
    
    // Fake compiling animation for 3-5 seconds
    const duration = Math.floor(Math.random() * 2000) + 3000; // Between 3-5 seconds
    const interval = 100; // Update progress every 100ms
    const steps = duration / interval;
    let currentStep = 0;
    
    const progressInterval = setInterval(() => {
      currentStep++;
      setCompilingProgress(Math.min((currentStep / steps) * 100, 99)); // Cap at 99% until complete
      
      if (currentStep >= steps) {
        clearInterval(progressInterval);
        setCompilingProgress(100);
        setTimeout(() => {
          setIsCompiling(false);
          setOutputVisible(true);
        }, 200);
      }
    }, interval);
  };
  
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div className={styles.modalTitleContainer}>
            <img src={skill.logo} alt={skill.name} className={styles.modalLogo} />
            <h3 className={styles.modalTitle}>{skill.name}</h3>
          </div>
          <button className={styles.closeButton} onClick={onClose}>×</button>
        </div>
        
        <div className={styles.modalDescription}>
          {details.description}
        </div>
        
        <div className={styles.modalTabs}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'demo' ? styles.activeTab : ''}`} 
            onClick={() => setActiveTab('demo')}
          >
            Demo
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'projects' ? styles.activeTab : ''}`} 
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'certifications' ? styles.activeTab : ''}`} 
            onClick={() => setActiveTab('certifications')}
          >
            Certifications
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'useCases' ? styles.activeTab : ''}`} 
            onClick={() => setActiveTab('useCases')}
          >
            Use Cases
          </button>
        </div>
        
        <div className={styles.tabContent}>
          {activeTab === 'demo' && (
            <div className={styles.demoContainer}>
              {details.codeSnippet ? (
                <>
                  <div className={styles.codeContainer}>
                    <pre className={styles.codeSnippet}>{details.codeSnippet}</pre>
                    <button 
                      className={styles.runButton} 
                      onClick={runCode}
                      disabled={isCompiling}
                    >
                      {isCompiling ? 'Compiling...' : 'Run Code'}
                    </button>
                  </div>
                  
                  {isCompiling && (
                    <div className={styles.compilingContainer}>
                      <div className={styles.compilingStatus}>
                        <div className={styles.compilingText}>Compiling code...</div>
                        <div className={styles.compilingPercentage}>{Math.floor(compilingProgress)}%</div>
                      </div>
                      <div className={styles.progressBarOuter}>
                        <div 
                          className={styles.progressBarInner} 
                          style={{ width: `${compilingProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  {outputVisible && (
                    <div className={styles.outputContainer}>
                      <h4>Output:</h4>
                      <div className={styles.codeOutput}>{details.codeOutput}</div>
                    </div>
                  )}
                </>
              ) : (
                <div className={styles.placeholderDemo}>
                  <p>Interactive demo coming soon!</p>
                  <p>Experience level: {details.experience}</p>
                  <button 
                    className={styles.runButton} 
                    onClick={runCode}
                    disabled={isCompiling}
                  >
                    {isCompiling ? 'Initializing...' : 'Try Demo'}
                  </button>
                  
                  {isCompiling && (
                    <div className={styles.compilingContainer}>
                      <div className={styles.compilingStatus}>
                        <div className={styles.compilingText}>Setting up environment...</div>
                        <div className={styles.compilingPercentage}>{Math.floor(compilingProgress)}%</div>
                      </div>
                      <div className={styles.progressBarOuter}>
                        <div 
                          className={styles.progressBarInner} 
                          style={{ width: `${compilingProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  {outputVisible && (
                    <div className={styles.outputContainer}>
                      <h4>Result:</h4>
                      <div className={styles.codeOutput}>Demo initialized successfully!</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
          
          {activeTab === 'projects' && (
            <div className={styles.projectsContainer}>
              {details.projects && details.projects.length > 0 ? (
                details.projects.map((project, index) => (
                  <div key={index} className={styles.projectCard}>
                    <div className={styles.projectImage}>
                      <img src={project.image} alt={project.name} />
                    </div>
                    <div className={styles.projectInfo}>
                      <h4>{project.name}</h4>
                      <p>{project.description}</p>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                        View Project
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <p className={styles.emptyState}>No projects to display yet.</p>
              )}
            </div>
          )}
          
          {activeTab === 'certifications' && (
            <div className={styles.certificationsContainer}>
              {details.certifications && details.certifications.length > 0 ? (
                details.certifications.map((cert, index) => (
                  <div key={index} className={styles.certificationCard}>
                    <h4>{cert.name}</h4>
                    <p>Issued by: {cert.issuer}</p>
                    <p>Date: {cert.date}</p>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className={styles.certLink}>
                      View Certificate
                    </a>
                  </div>
                ))
              ) : (
                <div className={styles.experienceLevelCard}>
                  <h4>Experience Level</h4>
                  <div className={styles.experienceMeter}>
                    <div className={`${styles.experienceLevel} ${styles[details.experience.toLowerCase()]}`}>
                      {details.experience}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {activeTab === 'useCases' && (
            <div className={styles.useCasesContainer}>
              <div className={styles.strengthMeterContainer}>
                <h4>Proficiency Level</h4>
                <div className={styles.strengthBar}>
                  <div 
                    className={styles.strengthFill} 
                    style={{ width: `${details.strengthMeter || 50}%` }}
                  ></div>
                  <div className={styles.strengthMarker} style={{ left: '25%' }}>Beginner</div>
                  <div className={styles.strengthMarker} style={{ left: '50%' }}>Intermediate</div>
                  <div className={styles.strengthMarker} style={{ left: '75%' }}>Advanced</div>
                  <div className={styles.strengthMarker} style={{ left: '95%' }}>Expert</div>
                </div>
              </div>
              
              <h4 className={styles.useCasesTitle}>Common Use Cases</h4>
              <div className={styles.useCaseGrid}>
                {(details.useCases || [
                  { name: "Practice 1", description: "Description coming soon", icon: "🔍" },
                  { name: "Practice 2", description: "Description coming soon", icon: "🛠️" },
                  { name: "Practice 3", description: "Description coming soon", icon: "📝" }
                ]).map((useCase, index) => (
                  <div key={index} className={styles.useCaseCard}>
                    <div className={styles.useCaseIcon}>{useCase.icon}</div>
                    <h5 className={styles.useCaseName}>{useCase.name}</h5>
                    <p className={styles.useCaseDescription}>{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  
  const openSkillModal = (skill) => {
    setSelectedSkill(skill);
    document.body.style.overflow = 'hidden';
  };
  
  const closeSkillModal = () => {
    setSelectedSkill(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <section id="skills" className={styles.skills}>
      <h2 className="section-title">My Skills</h2>
      <div className={styles.skillCategories}>
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className={styles.category}>
            <h3 className={styles.categoryTitle}>{category.name}</h3>
            <div className={styles.skillGrid}>
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex} 
                  className={styles.skillItem}
                  onClick={() => openSkillModal(skill)}
                >
                  <img src={skill.logo || "/placeholder.png"} alt={skill.name} className={styles.skillLogo} />
                  <span className={styles.skillName}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {selectedSkill && (
        <SkillModal skill={selectedSkill} onClose={closeSkillModal} />
      )}
    </section>
  );
};

export default Skills;