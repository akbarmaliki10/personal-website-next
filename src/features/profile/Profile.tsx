"use client";

import Image from "next/image";
import { Code2, User, Mail, Award } from "lucide-react";
import { profileData } from "@/data/profile";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "./Profile.module.css";

export function Profile() {
  const { t } = useLanguage();

  // Extract the first letter for the authentic newspaper drop cap
  const bioText = t.profile.bio;
  const firstLetter = bioText.charAt(0);
  const restOfBio = bioText.slice(1);

  return (
    <article className={styles.leadArticle}>
      {/* Front Page Headline Section */}
      <div className={styles.headerBlock}>
        <div className={styles.kicker}>{t.newspaper.leadKicker}</div>
        <h1 className={styles.headline}>{t.newspaper.leadHeadline}</h1>
        <p className={styles.subhead}>{t.newspaper.leadSubhead}</p>
        <div className={styles.bylineBar}>
          <span className={styles.byline}>{t.newspaper.byline}</span>
          <span className={styles.dateline}>· {t.newspaper.location}</span>
        </div>
      </div>

      {/* Multi-column Broadsheet Story Grid */}
      <div className={styles.storyGrid}>
        {/* Main Column: Story Text & Pull Quote */}
        <div className={styles.storyCol}>
          <p className={styles.leadParagraph}>
            <span className={styles.dropCap}>{firstLetter}</span>
            {restOfBio}
          </p>

          <blockquote className={styles.pullQuote}>
            <p>{t.newspaper.pullQuote}</p>
            <cite>— Akbar Maliki, Software Engineer II & Backend Lead</cite>
          </blockquote>

          {/* Executive Engineering Scorecard */}
          <div className={styles.scorecardGrid}>
            <div className={styles.scorecardCell}>
              <span className={styles.scorecardVal}>0</span>
              <span className={styles.scorecardLabel}>{t.newspaper.metricDefects}</span>
            </div>
            <div className={styles.scorecardCell}>
              <span className={styles.scorecardVal}>100%</span>
              <span className={styles.scorecardLabel}>{t.newspaper.metricOnTime}</span>
            </div>
            <div className={styles.scorecardCell}>
              <span className={styles.scorecardVal}>2x</span>
              <span className={styles.scorecardLabel}>{t.newspaper.metricRating}</span>
            </div>
            <div className={styles.scorecardCell}>
              <span className={styles.scorecardVal}>-80%</span>
              <span className={styles.scorecardLabel}>{t.newspaper.metricInfra}</span>
            </div>
          </div>

          <div className={styles.academicBox}>
            <div className={styles.academicHeader}>
              <Award size={15} className={styles.academicIcon} />
              <span className={styles.academicTitle}>{t.newspaper.academicTitle}</span>
            </div>
            <p className={styles.academicText}>{t.profile.education}</p>
          </div>
        </div>

        {/* Side Column: Portrait & Wire Links */}
        <div className={styles.mediaCol}>
          <figure className={styles.photoFigure}>
            <div className={styles.imageFrame}>
              <Image
                src={profileData.imageUrl}
                alt={profileData.name}
                width={320}
                height={320}
                className={styles.image}
                priority
              />
            </div>
            <figcaption className={styles.photoCaption}>
              {t.newspaper.photoCaption}
            </figcaption>
          </figure>

          {/* Telegraph Wires */}
          <div className={styles.wiresBox}>
            <div className={styles.wiresTitle}>TELEGRAPHIC DIRECTORY</div>
            <div className={styles.wireLinks}>
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.wireBtn}
              >
                <Code2 size={14} />
                <span>{t.newspaper.wireLinks.github}</span>
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.wireBtn}
              >
                <User size={14} />
                <span>{t.newspaper.wireLinks.linkedin}</span>
              </a>
              <a
                href={`mailto:${profileData.socials.email}`}
                className={styles.wireBtn}
              >
                <Mail size={14} />
                <span>{t.newspaper.wireLinks.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
