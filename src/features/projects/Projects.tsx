"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <div className={styles.container}>
      <h3 className={styles.sectionTitle}>PROJECTS</h3>
      <div className={styles.grid}>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={`${styles.card} ${project.codeSnippet ? styles.featured : ""}`}
            whileHover="hover"
            initial="rest"
            variants={{
              rest: { backgroundColor: "var(--bg-card)", y: 0 },
              hover: {
                backgroundColor: "var(--accent-blue-hover)",
                y: -4,
                transition: { duration: 0.2, ease: "easeOut" },
              },
            }}
          >
            <div className={styles.cardContent}>
              <div className={styles.header}>
                <span className={styles.category}>{project.category}</span>
                {project.badge && <span className={styles.badge}>{project.badge}</span>}
              </div>
              
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              
              <div className={styles.tags}>
                {project.tags.map(tag => (
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
        ))}
      </div>
    </div>
  );
}
