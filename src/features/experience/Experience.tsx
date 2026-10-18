"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useInView, useMotionValue, useTransform, animate, Variants } from "framer-motion";
import { experiences, leadershipExperiences, Experience as ExperienceType } from "@/data/experience";
import { useLanguage } from "@/components/LanguageProvider";
import type { ExperienceText } from "@/i18n/translations";
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

/** Renders a bullet, turning [[60]] tokens into animated counters. */
function Bullet({ text }: { text: string }) {
  const parts = text.split(/\[\[(\d+)\]\]/);
  return (
    <li>
      {parts.map((part, i) =>
        i % 2 === 1 ? <LatencyCounter key={i} value={Number(part)} /> : <span key={i}>{part}</span>
      )}
    </li>
  );
}

function Timeline({
  title,
  items,
  texts,
}: {
  title: string;
  items: ExperienceType[];
  texts: Record<string, ExperienceText>;
}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <div className={styles.section}>
      <h3 className={styles.title}>{title}</h3>
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
          {items.map((exp) => {
            const text = texts[exp.id];
            return (
              <motion.div key={exp.id} variants={cardVariants} className={styles.card}>
                <div className={styles.nodeWrapper}>
                  <div className={styles.node} />
                </div>

                <div className={styles.period}>{text.period}</div>
                <h4 className={styles.company}>{text.company}</h4>
                <div className={styles.role}>
                  {text.role} · {text.location}
                </div>

                <ul className={styles.bullets}>
                  {text.bullets.map((b) => (
                    <Bullet key={b} text={b} />
                  ))}
                </ul>

                <div className={styles.skills}>
                  {exp.skills.map(skill => (
                    <span key={skill} className={styles.skillBadge}>{skill}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export function WorkExperience() {
  const { t } = useLanguage();
  return <Timeline title={t.experience.workTitle} items={experiences} texts={t.experience.work} />;
}

export function LeadershipExperience() {
  const { t } = useLanguage();
  return (
    <Timeline
      title={t.experience.leadershipTitle}
      items={leadershipExperiences}
      texts={t.experience.leadership}
    />
  );
}
