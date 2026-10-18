"use client";

import Image from "next/image";
import { Code2, User, Mail, GraduationCap } from "lucide-react";
import { profileData } from "@/data/profile";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "./Profile.module.css";

export function Profile() {
  const { t } = useLanguage();

  return (
    <div className={styles.profileContainer}>
      <div className={styles.imageWrapper}>
        <Image
          src={profileData.imageUrl}
          alt={profileData.name}
          width={160}
          height={160}
          className={styles.image}
          priority
        />
      </div>

      <h1 className={styles.name}>{profileData.name}</h1>
      <p className={styles.bio}>
        {t.profile.bio}
        <br /><br />
        <span className={styles.highlight}>{t.profile.highlight}</span>
      </p>

      <div className={styles.socials}>
        <a href={profileData.socials.github} target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="Github">
          <Code2 size={20} />
        </a>
        <a href={profileData.socials.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="LinkedIn">
          <User size={20} />
        </a>
        <a href={`mailto:${profileData.socials.email}`} className={styles.socialBtn} aria-label="Email">
          <Mail size={20} />
        </a>
      </div>

      <div className={styles.education}>
        <GraduationCap size={16} className={styles.eduIcon} />
        <span>{t.profile.education}</span>
      </div>
    </div>
  );
}
