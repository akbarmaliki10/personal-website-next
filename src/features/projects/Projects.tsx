"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
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
          const isFeatured = Boolean(project.codeSnippet || project.imageUrl);

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

                <h3 className={styles.projectTitle}>
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
                <p className={styles.projectDescription}>{text.description}</p>

                <div className={styles.cardFooter}>
                  <div className={styles.tagsContainer}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.patentTag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.visitLink}
                    >
                      <span>{t.newspaper.visitProject}</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
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

              {project.imageUrl && (
                <figure className={styles.previewFigure}>
                  <a
                    href={project.url || "#"}
                    target={project.url ? "_blank" : undefined}
                    rel={project.url ? "noopener noreferrer" : undefined}
                    className={styles.previewFrame}
                  >
                    <Image
                      src={project.imageUrl}
                      alt={text.title}
                      width={1280}
                      height={760}
                      sizes="(max-width: 900px) 100vw, 480px"
                      className={styles.previewImage}
                    />
                  </a>
                  <figcaption className={styles.previewCaption}>
                    <span>FIG. 0{index + 1}</span>
                    <span>{project.url?.replace(/^https?:\/\//, "")}</span>
                  </figcaption>
                </figure>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
