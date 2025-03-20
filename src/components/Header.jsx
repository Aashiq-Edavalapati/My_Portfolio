import { useState, useEffect, useRef } from 'react';
import styles from "./Header.module.css";

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  
  const nameVariants = [
    { text: "シク", accent: "アー" }
  ];
  
  const [currentNameIndex, setCurrentNameIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && navRef.current && !navRef.current.contains(event.target) && 
          !event.target.classList.contains(styles.mobileMenuToggle) &&
          !event.target.parentElement?.classList.contains(styles.mobileMenuToggle)) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Change name every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNameIndex((prevIndex) => (prevIndex + 1) % nameVariants.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const navItems = ["About", "Projects", "Skills", "Education", "Certifications", "Contact"];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <a href="#" className={styles.logo}>
            <span className={styles.logoAccent}>{nameVariants[currentNameIndex].accent}</span>
            {nameVariants[currentNameIndex].text}
          </a>
        </div>
        
        <button 
          className={`${styles.mobileMenuToggle} ${isMenuOpen ? styles.active : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav 
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`} 
          ref={navRef}
        >
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item} className={styles.navItem}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`${styles.navLink} ${activeSection === item.toLowerCase() ? styles.active : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <a href="/resume.pdf" className={styles.resumeButton} download>
          Download Resume
        </a>
      </div>
    </header>
  );
};

export default Header;
