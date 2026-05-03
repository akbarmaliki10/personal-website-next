"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useInView, useMotionValue, useTransform, animate, Variants } from "framer-motion";
import { experiences, Experience as ExperienceType } from "@/data/experience";
import styles from "./Experience.module.css";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

function LatencyCounter({ value }: { value: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, count, value]);

  return <motion.span ref={ref} style={{ position: "relative", display: "inline-block" }}>{rounded}</motion.span>;
}

export function ExperienceTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <div className={styles.section}>
      <h3 className={styles.title}>WORK EXPERIENCE</h3>
      <div className={styles.timelineContainer} ref={containerRef}>
        <div className={styles.progressTrack}>
          <motion.div 
            className={styles.progressLine} 
            style={{ scaleY: scrollYProgress, originY: 0 }} 
          />
        </div>

        <motion.div 
          className={styles.cardsList}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {experiences.map((exp, index) => (
            <motion.div key={exp.id} variants={cardVariants} className={styles.card}>
              <div className={styles.nodeWrapper}>
                <div className={styles.node} />
              </div>
              
              <div className={styles.period}>{exp.period}</div>
              <h4 className={styles.company}>{exp.company}</h4>
              <div className={styles.role}>{exp.role}</div>
              
              <p className={styles.description}>
                {exp.id === "hypefast" ? (
                  <>
                    Focused on building and maintaining highly scalable APIs, managing distributed data pipelines, and optimizing system latency by <LatencyCounter value={60} />%.
                  </>
                ) : (
                  exp.description
                )}
              </p>
              
              <div className={styles.skills}>
                {exp.skills.map(skill => (
                  <span key={skill} className={styles.skillBadge}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
