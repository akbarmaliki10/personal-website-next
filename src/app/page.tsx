"use client";

import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/components/LanguageProvider";
import { Profile } from "@/features/profile/Profile";
import { StackMarquee } from "@/features/stack/StackMarquee";
import { WorkExperience, LeadershipExperience } from "@/features/experience/Experience";
import { Projects } from "@/features/projects/Projects";
import { Lounge } from "@/features/lounge/Lounge";
import styles from "./page.module.css";

export default function Home() {
  const { t } = useLanguage();
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <strong>Akbar Maliki</strong>
        </div>

        <nav className={styles.nav}>
          <a href="#experience">{t.nav.experience}</a>
          <a href="#projects">{t.nav.projects}</a>
          <a href="#lounge">{t.nav.lounge}</a>
        </nav>

        <div className={styles.actions}>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.profileRow}>
          <Profile />
        </div>

        <section className={`${styles.section} ${styles.stackSection}`}>
          <StackMarquee />
        </section>

        <section id="experience" className={styles.section}>
          <WorkExperience />
        </section>

        <section className={styles.section}>
          <LeadershipExperience />
        </section>

        <section id="projects" className={styles.section}>
          <Projects />
        </section>

        {/* Hobbies (internal name: lounge) */}
        <div className={styles.loungeSection}>
          <Lounge />
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>{t.footer.tagline}</p>
          <div className={styles.footerLinks}>
            <a href="https://github.com/akbarmaliki10" target="_blank" rel="noopener noreferrer">{t.footer.github}</a>
            <a href="https://www.linkedin.com/in/akbar-maliki/" target="_blank" rel="noopener noreferrer">{t.footer.linkedin}</a>
            <a href="mailto:akbar.maliki.work@gmail.com">{t.footer.email}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
