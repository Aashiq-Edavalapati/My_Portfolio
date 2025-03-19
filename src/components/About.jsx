import { useState, useEffect } from 'react';
import styles from "./About.module.css";
import profilePic from '../assets/profilePic.jpg';

const About = () => {
  const [text, setText] = useState("");
  const fullText = "Hello, I'm Aashiq Edavalapati";
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (index < fullText.length) {
          setText(prev => prev + fullText[index]);
          setIndex(index + 1);
          setTypingSpeed(100); // Normal typing speed
        } else {
          // Pause at the end before starting to delete
          setIsDeleting(true);
          setTypingSpeed(2000); // Pause duration before deleting
        }
      } else {
        // Deleting
        if (text.length > 0) {
          setText(prev => prev.slice(0, -1));
          setTypingSpeed(50); // Faster deletion speed
        } else {
          // Reset after deletion
          setIsDeleting(false);
          setIndex(0);
          setTypingSpeed(1000); // Pause before retyping
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, fullText]);

  return (
    <section id="about" className={styles.about}>
      <h2 className="section-title">About Me</h2>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img src={profilePic} alt="Aashiq Edavalapati" className={styles.profileImage} />
        </div>
        <div className={styles.bio}>
          <h3 className={styles.typewriter}>
            {text}
            <span className={`${styles.cursor} ${text.length === fullText.length && !isDeleting ? styles.blink : ''}`}>|</span>
          </h3>
          <p>
            A passionate second-year Computer Science student with a deep interest in Data Analytics, Software Development. With strong problem-solving skills and a 100+ days LeetCode streak, I thrive on tackling complex challenges.
          </p>
          <p>
            I have hands-on experience in Python, Java, SQL, DBMS, DSA, OOPS, and React, and I love building scalable and innovative solutions. From open-source contributions to hackathon-winning projects, I constantly push the boundaries of what I can create.
          </p>
          <p>
            <span className={styles.emoji}>🚀</span> Always open to collaborations, exciting projects, and discussions on emerging technologies. Let's build something amazing together!
          </p>
          <div className={styles.socialLinks}>
            <a href="https://github.com/Aashiq-Edavalapati" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/aashiq-edavalapati-77b346289/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://leetcode.com/u/Aashiq_Edavalapati/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LeetCode">
              <i className="fas fa-code"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
