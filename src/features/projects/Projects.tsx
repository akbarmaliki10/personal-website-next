"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "./Projects.module.css";

export function Projects() {
  const { t } = useLanguage();
  return (
    <div className={styles.container}>
      <h3 className={styles.sectionTitle}>{t.projectsTitle}</h3>
      <div className={styles.grid}>
        {projects.map((project) => {
          const text = t.projects[project.id];
          return (
            <motion.div
              key={project.id}
              className={`${styles.card} ${project.codeSnippet ? styles.featured : ""}`}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className={styles.cardContent}>
                <div className={styles.header}>
                  <span className={styles.category}>{text.category}</span>
                  {text.badge && <span className={styles.badge}>{text.badge}</span>}
                </div>

                <h3 className={styles.title}>{text.title}</h3>
                <p className={styles.description}>{text.description}</p>

                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>

              {project.codeSnippet && (
                <div className={styles.codeWrapper}>
                  <pre className={styles.codeBlock}>
                    <code>{project.codeSnippet}</code>
                  </pre>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
