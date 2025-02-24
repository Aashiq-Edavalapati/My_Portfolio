import styles from "./Skills.module.css"
import pythonLogo from "../assets/python.png"
import javaLogo from "../assets/java.png"
import javascriptLogo from "../assets/javascript.png"
import cLogo from "../assets/c.png"
import cppLogo from "../assets/cpp.png"
import goLogo from "../assets/go.png"
import haskellLogo from "../assets/haskell.png"
import htmlLogo from "../assets/html.png"
import cssLogo from "../assets/css.png"
import reactLogo from "../assets/react.png"
import expressLogo from "../assets/express.png"
import nodeLogo from "../assets/node.png"
import oopLogo from "../assets/oop.png"
import osLogo from "../assets/os.png"
import dsaLogo from "../assets/dsa.png"
import dbmsLogo from "../assets/dbms.png"
import gitLogo from "../assets/git.png"
import githubLogo from "../assets/github.png"
import linuxLogo from "../assets/linux.png"
import bashLogo from "../assets/bash.png"
import shellLogo from "../assets/shell.png"
import mysqlLogo from "../assets/mysql.png"
import numpyLogo from "../assets/numpy.png"


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
      { name: "React", logo: reactLogo },
      { name: "Express.js", logo: expressLogo },
      { name: "Node.js", logo: nodeLogo },
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
]

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className="section-title">My Skills</h2>
      <div className={styles.skillCategories}>
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className={styles.category}>
            <h3 className={styles.categoryTitle}>{category.name}</h3>
            <div className={styles.skillGrid}>
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className={styles.skillItem}>
                  <img src={skill.logo || "/placeholder.png"} alt={skill.name} className={styles.skillLogo} />
                  <span className={styles.skillName}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

