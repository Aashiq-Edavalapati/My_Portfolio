import styles from "./LeetCode.module.css"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Trophy, Target, Zap, ThumbsUp, Star, Award, Brain, X, ExternalLink, Github } from "lucide-react";
import fiftyday2025 from '../assets/2025-50.gif';

const LeetCode = () => {
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

    const stats = [
        {
          title: "Total Problems Solved",
          value: leetCodeData.totalSolved === '-' ? "600+" : leetCodeData.totalSolved,
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
          value: leetCodeData.dailyStreak === '-' ? "125" : leetCodeData.dailyStreak,
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
          value: leetCodeData.reputation === '-' ? "300+" : leetCodeData.reputation,
          icon: <ThumbsUp size={24} />,
          color: "var(--color-info)"
        },
        {
          title: "Global Ranking",
          value: `#${leetCodeData.ranking}` === '-' ? "90000-" : leetCodeData.ranking,
          icon: <Award size={24} />,
          color: "var(--color-warning)"
        }
      ];
      
      const difficultyStats = [
        {
          title: "Easy",
          value: leetCodeData.easySolved === '-' ? 453 : leetCodeData.easySolved,
          total: leetCodeData.totalEasy === '-' ? 867 : leetCodeData.totalEasy,
          color: "#00b8a3"
        },
        {
          title: "Medium",
          value: leetCodeData.mediumSolved === '-' ? 144 : leetCodeData.mediumSolved,
          total: leetCodeData.totalMedium === '-' ? 1711 : leetCodeData.totalMedium,      
          color: "#ffc01e"
        },
        {
          title: "Hard",
          value: leetCodeData.hardSolved === '-' ? 3 : leetCodeData.hardSolved,
          total: leetCodeData.totalHard === '-' ? 811 : leetCodeData.totalHard,
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

    return(
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
    )
}

export default LeetCode;