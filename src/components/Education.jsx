"use client"
import { useState } from "react";
import { X, ChevronDown, ChevronUp, Trophy, Award, BookOpen, MapPin, Calendar } from "lucide-react";
import styles from "./Education.module.css";
import AmritaLogo from "../assets/AmritaLogo.jpg";
import naryanaLogo from "../assets/narayanaLogo.jpg";
import scsLogo from '../assets/scsLogo.jpg';

const educationData = [
  {
    institution: "Amrita Vishwa Vidyapeetham",
    logo: AmritaLogo,
    years: "2023-2027",
    degree: "B.Tech, Computer Science and Engineering",
    location: "Coimbatore",
    cgpa: "8.81",
    semesters: [
      { name: "Semester 1", sgpa: "8.43" },
      { name: "Semester 2", sgpa: "9.05" },
      { name: "Semester 3", sgpa: "8.95" },
    ],
    accomplishments: ["Student Volunteer at Anokha Tech Fest 2024"],
    clubs: ["Intel IOT Club", "Google Developer Student Clubs", "Anokha Department of Computer Science"],
  },
  {
    institution: "Narayana Junior College",
    logo: naryanaLogo,
    years: "2021-2023",
    stream: "MPC",
    location: "Narasimhakonda",
    marks: "970 / 1000",
    jeePercentile: "93.02",
  },
  {
    institution: "Saibaba Central School",
    logo: scsLogo,
    years: "2018-2021",
    location: "Ongole",
    marks: "470 / 500",
  },
];

const Education = () => {
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [isSemesterExpanded, setIsSemesterExpanded] = useState(false);

  return (
    <section id="education" className={styles.education}>
      <h2 className="section-title">Education</h2>
      <div className={styles.timeline}>
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={styles.timelineItem}
            onClick={() => setSelectedEducation(edu)}
          >
            <div className={styles.timelineContent}>
              <h3>{edu.institution}</h3>
              {edu.degree && <h4>{edu.degree}</h4>}
              {edu.stream && <h4>{edu.stream}</h4>}
              <p><MapPin size={14} className="inline mr-1" /> {edu.location}</p>
              <p className={styles.years}><Calendar size={14} className="inline mr-1" /> {edu.years}</p>
            </div>
          </div>
        ))}
      </div>
      
      {selectedEducation && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={() => setSelectedEducation(null)}>
              <X size={24} />
            </button>
            <div className={styles.modalGrid}>
              <div className={styles.institutionInfo}>
                {selectedEducation.logo && (
                  <div className={styles.institutionIcon}>
                    <img src={selectedEducation.logo} alt="Institution" width={64} height={64} />
                  </div>
                )}
                {!selectedEducation.logo && (
                  <div className={styles.institutionIcon}>
                    <BookOpen size={40} color="#00ffff" />
                  </div>
                )}
                <h2>{selectedEducation.institution}</h2>
                <p className={styles.years}><Calendar size={16} className="inline mr-1" /> {selectedEducation.years}</p>
                <p><MapPin size={16} className="inline mr-1" /> {selectedEducation.location}</p>
              </div>
              
              <div className={styles.educationDetails}>
                {selectedEducation.degree && (
                  <div className={styles.section}>
                    <h3><Award size={18} className="inline" /> Degree</h3>
                    <p>{selectedEducation.degree}</p>
                  </div>
                )}
                
                {selectedEducation.stream && (
                  <div className={styles.section}>
                    <h3><BookOpen size={18} className="inline" /> Stream</h3>
                    <p>{selectedEducation.stream}</p>
                  </div>
                )}
                
                {selectedEducation.cgpa && (
                  <div className={styles.section}>
                    <h3><Award size={18} className="inline" /> Academic Performance</h3>
                    <p className={styles.cgpa}>Current CGPA: {selectedEducation.cgpa}</p>
                    <div className={styles.semesterSection}>
                      <button
                        className={styles.semesterToggle}
                        onClick={() => setIsSemesterExpanded(!isSemesterExpanded)}
                      >
                        <span>Semester-wise SGPA</span>
                        {isSemesterExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                      {isSemesterExpanded && selectedEducation.semesters && (
                        <div className={styles.semesterList}>
                          {selectedEducation.semesters.map((semester, index) => (
                            <div key={index} className={styles.semesterItem}>
                              <span>{semester.name}</span>
                              <span>{semester.sgpa}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {selectedEducation.marks && (
                  <div className={styles.section}>
                    <h3><Award size={18} className="inline" /> Marks</h3>
                    <p>{selectedEducation.marks}</p>
                  </div>
                )}
                
                {selectedEducation.jeePercentile && (
                  <div className={styles.section}>
                    <h3><Trophy size={18} className="inline" /> JEE Mains</h3>
                    <p className={styles.percentile}>Percentile: {selectedEducation.jeePercentile}</p>
                  </div>
                )}
                
                {selectedEducation.accomplishments && selectedEducation.accomplishments.length > 0 && (
                  <div className={styles.section}>
                    <h3><Trophy size={18} className="inline" /> Notable Accomplishments</h3>
                    <ul className={styles.accomplishmentsList}>
                      {selectedEducation.accomplishments.map((accomplishment, index) => (
                        <li key={index}>
                          <Trophy size={16} className={styles.trophyIcon} />
                          {accomplishment}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {selectedEducation.clubs && selectedEducation.clubs.length > 0 && (
                  <div className={`${styles.section} ${styles.clubsSection}`}>
                    <h3><Award size={18} className="inline" /> Clubs & Activities</h3>
                    <ul className={styles.clubsList}>
                      {selectedEducation.clubs.map((club, index) => (
                        <li key={index}>{club}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;