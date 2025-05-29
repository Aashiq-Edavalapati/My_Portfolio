import styles from "./LeetCode.module.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Trophy,
  Target,
  Zap,
  ThumbsUp,
  Star,
  Award,
  Brain,
} from "lucide-react";
import fiftyday2025 from "../assets/2025-50.gif";

const LeetCode = () => {
  // dummy consistency graph
  const consistencyData = Array.from({ length: 52 }, () =>
    Array.from({ length: 7 }, () => Math.floor(Math.random() * 4))
  );

  // state now matches exactly the fields we’ll populate:
  const [leetCodeData, setLeetCodeData] = useState({
    totalSolved: "-",
    easySolved: "-",
    totalEasy: "-",
    mediumSolved: "-",
    totalMedium: "-",
    hardSolved: "-",
    totalHard: "-",
    contestRating: "-",
    contestGlobalRanking: "-",
    totalSubmissions: "-",
    solutionsPublished: "-",
    ranking: "-",
    reputation: "-",
    dailyStreak: "-", // not provided by API
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  async function fetchLeetCodeData(username) {
    try {
      const res = await fetch(`${API_URL}/leetcode/${username}`);
      if (!res.ok) throw new Error(`Status ${res.status}`);
      const json = await res.json();
      // console.log(json.data.matchedUser);
      return json.data.matchedUser;
    } catch (e) {
      console.error(e);
      setError(e.message);
      return null;
    }
  }

  useEffect(() => {
    fetchLeetCodeData("Aashiq_Edavalapati").then((user) => {
      if (!user) {
        setIsLoading(false);
        return;
      }

      const { profile, submitStats } = user;
      // pick out each difficulty
      const allItem = submitStats.acSubmissionNum.find((d) => d.difficulty === "All");
      const easyItem = submitStats.acSubmissionNum.find((d) => d.difficulty === "Easy");
      const medItem = submitStats.acSubmissionNum.find((d) => d.difficulty === "Medium");
      const hardItem = submitStats.acSubmissionNum.find((d) => d.difficulty === "Hard");

      setLeetCodeData({
        totalSolved: allItem?.count ?? "-",
        easySolved: easyItem?.count ?? "-",
        totalEasy: easyItem?.submissions ?? "-",
        mediumSolved: medItem?.count ?? "-",
        totalMedium: medItem?.submissions ?? "-",
        hardSolved: hardItem?.count ?? "-",
        totalHard: hardItem?.submissions ?? "-",
        contestRating: profile.starRating ?? "-",          // using starRating since no contestRating field
        contestGlobalRanking: profile.ranking ?? "-",
        totalSubmissions: allItem?.submissions ?? "-",
        solutionsPublished: profile.solutionCount ?? "-",
        ranking: profile.ranking ?? "-",
        reputation: profile.reputation ?? "-",
        dailyStreak: "-", // still not in payload
      });

      setIsLoading(false);
    });
  }, []);

  if (error)
    return <p className={styles.error}>Error loading LeetCode data: {error}</p>;

  return (
    <div className={styles.leetcodeSection}>
      <h3 className={styles.leetcodeTitle}>LeetCode Journey</h3>

      {/* Badges */}
      <div className={styles.leetcodeBadges}>
        {[
          {
            src: "https://assets.leetcode.com/static_assets/marketing/2024-50.gif",
            alt: "50 Problems Badge",
          },
          {
            src: "https://assets.leetcode.com/static_assets/marketing/2024-100.gif",
            alt: "100 Problems Badge",
          },
          {
            src: "https://assets.leetcode.com/static_assets/marketing/2024-200.gif",
            alt: "200 Problems Badge",
          },
          {
            src: "https://assets.leetcode.com/static_assets/marketing/365_new.gif",
            alt: "365 Days Badge",
          },
          {
            src: "https://assets.leetcode.com/static_assets/marketing/2024.gif",
            alt: "2024 Badge",
          },
          {
            src: fiftyday2025,
            alt: "50 day badge 2025",
          },
        ].map((badge, idx) => (
          <motion.div
            key={idx}
            className={styles.badgeContainer}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: idx * 0.2,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <img
              src={badge.src}
              alt={badge.alt}
              className={styles.leetcodeBadge}
            />
          </motion.div>
        ))}
      </div>

      <div className={styles.leetcodeStats}>
        {[
          {
            title: "Total Problems Solved",
            value: leetCodeData.totalSolved,
            icon: <Code2 size={24} />,
            color: "var(--color-primary)",
          },
          {
            title: "Contest Rating",
            value: leetCodeData.contestRating,
            icon: <Trophy size={24} />,
            color: "var(--color-secondary)",
          },
          {
            title: "Daily Streak",
            value: leetCodeData.dailyStreak,
            icon: <Zap size={24} />,
            color: "var(--color-accent)",
          },
          {
            title: "Solutions Published",
            value: leetCodeData.solutionsPublished,
            icon: <Star size={24} />,
            color: "var(--color-success)",
          },
          {
            title: "Solution Upvotes",
            value: leetCodeData.reputation,
            icon: <ThumbsUp size={24} />,
            color: "var(--color-info)",
          },
          {
            title: "Global Ranking",
            value: `#${leetCodeData.ranking}`,
            icon: <Award size={24} />,
            color: "var(--color-warning)",
          },
        ].map((stat, i) => (
          <motion.div
            key={i}
            className={styles.statCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
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

      {/* Difficulty breakdown */}
      <div className={styles.difficultyBreakdown}>
        <h4 className={styles.breakdownTitle}>
          <Brain size={18} /> Problem Solving Breakdown
        </h4>
        <div className={styles.difficultyStats}>
          {[
            {
              title: "Easy",
              value: leetCodeData.easySolved,
              total: 878,
              color: "#00b8a3",
            },
            {
              title: "Medium",
              value: leetCodeData.mediumSolved,
              total: 1849,
              color: "#ffc01e",
            },
            {
              title: "Hard",
              value: leetCodeData.hardSolved,
              total: 838,
              color: "#ff375f",
            },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className={styles.difficultyStat}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div
                className={styles.difficultyLabel}
                style={{ color: stat.color }}
              >
                {stat.title}
              </div>
              <div
                className={styles.difficultyValue}
                style={{ color: stat.color }}
              >
                {stat.value}/{stat.total}
              </div>
              <div className={styles.barContainer}>
                <div
                  className={styles.difficultyBar}
                  style={{
                    backgroundColor: stat.color,
                    width: `${(stat.value / stat.total) * 100}%`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Consistency graph */}
      <div className={styles.consistencyGraph}>
        <h4 className={styles.graphTitle}>
          <Target size={18} /> Consistency Graph
        </h4>
        <div className={styles.graphContainer}>
          {consistencyData.map((week, wi) => (
            <div key={wi} className={styles.graphWeek}>
              {week.map((val, di) => (
                <motion.div
                  key={di}
                  className={styles.graphDay}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: (wi * 7 + di) * 0.001,
                    duration: 0.3,
                  }}
                  whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                  style={{
                    backgroundColor: `rgba(0, 255, 255, ${val * 0.25})`,
                  }}
                  title={`${val} contributions`}
                />
              ))}
            </div>
          ))}
        </div>
        <div className={styles.graphLegend}>
          <span>Less</span>
          <div className={styles.legendSquares}>
            {[0, 1, 2, 3].map((lvl) => (
              <div
                key={lvl}
                className={styles.legendSquare}
                style={{
                  backgroundColor: `rgba(0, 255, 255, ${lvl * 0.25})`,
                }}
              />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
};

export default LeetCode;