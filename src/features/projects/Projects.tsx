"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
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
          const isFeatured = Boolean(project.codeSnippet || project.imageUrl);
          return (
            <motion.div
              key={project.id}
              className={`${styles.card} ${isFeatured ? styles.featured : ""}`}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className={styles.cardContent}>
                <div className={styles.header}>
                  <span className={styles.category}>{text.category}</span>
                  {text.badge && <span className={styles.badge}>{text.badge}</span>}
                </div>

                <h3 className={styles.title}>
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.titleLink}
                    >
                      {text.title}
                    </a>
                  ) : (
                    text.title
                  )}
                </h3>
                <p className={styles.description}>{text.description}</p>

                <div className={styles.footer}>
                  <div className={styles.tags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.visitLink}
                    >
                      <span>{t.visitProject}</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              {project.codeSnippet && (
                <div className={styles.codeWrapper}>
                  <pre className={styles.codeBlock}>
                    <code>{project.codeSnippet}</code>
                  </pre>
                </div>
              )}

              {project.imageUrl && (
                <a
                  href={project.url || "#"}
                  target={project.url ? "_blank" : undefined}
                  rel={project.url ? "noopener noreferrer" : undefined}
                  className={styles.previewWrapper}
                >
                  <Image
                    src={project.imageUrl}
                    alt={text.title}
                    width={1280}
                    height={760}
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className={styles.previewImage}
                  />
                </a>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
