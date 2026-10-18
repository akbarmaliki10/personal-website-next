"use client";

import { useRef, useEffect, useState } from "react";
import { useInView, animate } from "framer-motion";
import { experiences, leadershipExperiences, Experience as ExperienceType } from "@/data/experience";
import { useLanguage } from "@/components/LanguageProvider";
import type { ExperienceText } from "@/i18n/translations";
import styles from "./Experience.module.css";

function LatencyCounter({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.round(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return <span ref={ref} className={styles.counter}>{displayValue.toLocaleString()}</span>;
}

/** Renders a bullet, turning [[60]] tokens into animated counters. */
function BulletItem({ text }: { text: string }) {
  const parts = text.split(/\[\[(\d+)\]\]/);
  return (
    <li className={styles.bulletItem}>
      {parts.map((part, i) =>
        i % 2 === 1 ? <LatencyCounter key={i} value={Number(part)} /> : <span key={i}>{part}</span>
      )}
    </li>
  );
}

function EditorialSection({
  pageNumber,
  title,
  subtitle,
  items,
  texts,
}: {
  pageNumber: string;
  title: string;
  subtitle?: string;
  items: ExperienceType[];
  texts: Record<string, ExperienceText>;
}) {
  return (
    <section className={styles.sectionContainer}>
      {/* Newspaper Section Banner */}
      <div className={styles.sectionBanner}>
        <div className={styles.bannerMeta}>
          <span className={styles.pageNumber}>{pageNumber}</span>
          <span className={styles.bannerTag}>MALIKI DISPATCH ARCHIVES</span>
        </div>
        <h2 className={styles.sectionTitle}>{title}</h2>
        {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
      </div>

      {/* Multi-Column Newspaper Article Grid */}
      <div className={styles.articleGrid}>
        {items.map((exp, index) => {
          const text = texts[exp.id];
          return (
            <article key={exp.id} className={styles.articleCard}>
              <div className={styles.articleHeader}>
                <span className={styles.articleKicker}>
                  DISPATCH № 0{index + 1} · {text.location}
                </span>
                <h3 className={styles.articleCompany}>{text.company}</h3>
                <div className={styles.articleRoleDateline}>
                  <strong className={styles.articleRole}>{text.role}</strong>
                  <span className={styles.articlePeriod}>[{text.period}]</span>
                </div>
              </div>

              <ul className={styles.bulletsList}>
                {text.bullets.map((b) => (
                  <BulletItem key={b} text={b} />
                ))}
              </ul>

              <div className={styles.techTags}>
                {exp.skills.map((skill) => (
                  <span key={skill} className={styles.techBadge}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function WorkExperience() {
  const { t } = useLanguage();
  return (
    <EditorialSection
      pageNumber={t.newspaper.sectionExperience}
      title={t.experience.workTitle}
      subtitle="Investigative accounts of high-concurrency systems, low-latency microservices, and fault-tolerant infrastructure."
      items={experiences}
      texts={t.experience.work}
    />
  );
}

export function LeadershipExperience() {
  const { t } = useLanguage();
  return (
    <EditorialSection
      pageNumber={t.newspaper.sectionLeadership}
      title={t.experience.leadershipTitle}
      subtitle="Public forum initiatives, engineering mentorship, and cybersecurity infrastructure defense."
      items={leadershipExperiences}
      texts={t.experience.leadership}
    />
  );
}
