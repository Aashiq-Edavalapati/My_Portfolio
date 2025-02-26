import styles from "./About.module.css"
import profilePic from '../assets/profilePic.jpg'
const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2 className="section-title">About Me</h2>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img src={profilePic} alt="Aashiq Edavalapati" className={styles.profileImage} />
        </div>
        <div className={styles.bio}>
          <h3>Hello, I'm Aashiq Edavalapati</h3>
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
  )
}
export default About