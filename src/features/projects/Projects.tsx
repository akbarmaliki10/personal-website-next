"use client";

import { projects } from "@/data/projects";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "./Projects.module.css";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section className={styles.sectionContainer} id="projects">
      {/* Newspaper Section Banner */}
      <div className={styles.sectionBanner}>
        <div className={styles.bannerMeta}>
          <span className={styles.pageNumber}>{t.newspaper.sectionProjects}</span>
          <span className={styles.bannerTag}>PATENTS & TECHNICAL REGISTRY</span>
        </div>
        <h2 className={styles.sectionTitle}>{t.projectsTitle}</h2>
      </div>

      <div className={styles.projectsGrid}>
        {projects.map((project, index) => {
          const text = t.projects[project.id];
          const isFeatured = !!project.codeSnippet;

          return (
            <article
              key={project.id}
              className={`${styles.projectCard} ${isFeatured ? styles.featuredCard : ""}`}
            >
              <div className={styles.cardContent}>
                <div className={styles.cardMeta}>
                  <span className={styles.categoryBadge}>
                    FILE № 0{index + 1} · {text.category}
                  </span>
                  {text.badge && (
                    <span className={styles.distinctionStamp}>{text.badge}</span>
                  )}
                </div>

                <h3 className={styles.projectTitle}>{text.title}</h3>
                <p className={styles.projectDescription}>{text.description}</p>

                <div className={styles.tagsContainer}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.patentTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {project.codeSnippet && (
                <div className={styles.teletypeWrapper}>
                  <div className={styles.teletypeHeader}>
                    <span className={styles.teletypeLed} />
                    <span className={styles.teletypeTitle}>
                      {t.newspaper.teletypeTitle}
                    </span>
                  </div>
                  <pre className={styles.codeBlock}>
                    <code>{project.codeSnippet}</code>
                  </pre>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
