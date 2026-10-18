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
    <div className={styles.newspaperWrapper}>
      <div className={styles.broadsheetContainer}>
        {/* MASTHEAD HEADER */}
        <header className={styles.masthead}>
          {/* Ear Pieces Row */}
          <div className={styles.earRow}>
            <div className={styles.leftEar}>
              <span className={styles.earItem}>{t.newspaper.volume}</span>
              <span className={styles.earDivider}>•</span>
              <span className={styles.earItem}>{t.newspaper.location}</span>
              <span className={styles.earDivider}>•</span>
              <span className={styles.earItem}>{t.newspaper.weather}</span>
            </div>

            <div className={styles.centerMotto}>
              <span>{t.newspaper.motto}</span>
            </div>

            <div className={styles.rightEar}>
              <div className={styles.editionControls}>
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Grand Masthead Title */}
          <div className={styles.mastheadCenter}>
            <h1 className={styles.mastheadTitle}>{t.newspaper.masthead}</h1>
            <p className={styles.mastheadSubtitle}>{t.newspaper.subTitle}</p>
          </div>

          {/* Double-Ruled Dateline Bar */}
          <div className={styles.datelineBar}>
            <div className={styles.datelineItem}>
              <strong>DATE:</strong> {t.newspaper.date}
            </div>
            <div className={styles.datelineItem}>
              <strong>EDITION:</strong> INTERNATIONAL BROADSHEET
            </div>
            <div className={styles.datelineItem}>
              <strong>{t.newspaper.price}</strong>
            </div>
            <div className={styles.datelineItem}>
              <strong>{t.newspaper.circulation}</strong>
            </div>
          </div>

          {/* Section Quick Index Ribbon */}
          <nav className={styles.sectionRibbon} aria-label="Newspaper Sections">
            <span className={styles.indexLabel}>{t.newspaper.indexTitle}:</span>
            <a href="#lead" className={styles.ribbonLink}>§ 1. {t.nav.front}</a>
            <a href="#wire" className={styles.ribbonLink}>§ 2. TECH WIRE</a>
            <a href="#experience" className={styles.ribbonLink}>§ 3. {t.nav.experience}</a>
            <a href="#leadership" className={styles.ribbonLink}>§ 4. CIVIC FORUM</a>
            <a href="#projects" className={styles.ribbonLink}>§ 5. {t.nav.projects}</a>
            <a href="#lounge" className={styles.ribbonLink}>§ 6. {t.nav.lounge}</a>
          </nav>
        </header>

        {/* MAIN EDITORIAL CONTENT */}
        <main className={styles.mainContent}>
          {/* Page I: Lead Front Page Story */}
          <section id="lead" className={styles.leadSection}>
            <Profile />
          </section>

          {/* Page I Sub: Live Commodities & Wire Marquee */}
          <section id="wire" className={styles.wireSection}>
            <StackMarquee />
          </section>

          {/* Page II: Careers & Chronicles of Industry */}
          <section id="experience" className={styles.section}>
            <WorkExperience />
          </section>

          {/* Page III: Civic Forum & Leadership */}
          <section id="leadership" className={styles.section}>
            <LeadershipExperience />
          </section>

          {/* Page IV: Scientific Patents & Projects */}
          <section id="projects" className={styles.section}>
            <Projects />
          </section>

          {/* Page V: The Sunday Supplement & Comics */}
          <section id="lounge" className={styles.section}>
            <Lounge />
          </section>
        </main>

        {/* BROADSHEET COLOPHON & CLASSIFIEDS FOOTER */}
        <footer className={styles.newspaperFooter}>
          <div className={styles.footerRule}>
            <span>✦ ✦ ✦ THE MALIKI CHRONICLE CLASSIFIEDS & COLOPHON ✦ ✦ ✦</span>
          </div>

          <div className={styles.footerGrid}>
            <div className={styles.colophonCol}>
              <h4 className={styles.footerColTitle}>EDITORIAL DESK</h4>
              <p className={styles.footerText}>
                Editor-in-Chief Akbar Maliki. Software Engineer II & Backend Lead at Hypefast (Indonesia&apos;s leading brand aggregator).
                Specializing in mission-critical B2B enterprise systems, high-concurrency order pipelines, and zero-defect cloud architectures.
              </p>
              <p className={styles.footerSubtext}>
                Published from Jakarta, Indonesia. Computer Science Scholar, Universitas Indonesia (Cum Laude).
              </p>
            </div>

            <div className={styles.colophonCol}>
              <h4 className={styles.footerColTitle}>TELEGRAPHIC CORRESPONDENCE</h4>
              <ul className={styles.telegraphList}>
                <li>
                  <span className={styles.telegraphLabel}>GITHUB WIRE:</span>
                  <a href="https://github.com/akbarmaliki10" target="_blank" rel="noopener noreferrer">
                    github.com/akbarmaliki10
                  </a>
                </li>
                <li>
                  <span className={styles.telegraphLabel}>LINKEDIN WIRE:</span>
                  <a href="https://www.linkedin.com/in/akbar-maliki/" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/akbar-maliki
                  </a>
                </li>
                <li>
                  <span className={styles.telegraphLabel}>DIRECT TELEGRAPH:</span>
                  <a href="mailto:akbar.maliki.work@gmail.com">
                    akbar.maliki.work@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.colophonCol}>
              <h4 className={styles.footerColTitle}>PRESS DISPATCH & PRINTING</h4>
              <p className={styles.footerText}>
                {t.footer.colophon}
              </p>
              <div className={styles.stampBox}>
                <span className={styles.stampText}>OFFICIAL STAMP</span>
                <span className={styles.stampSub}>100% ZERO DEFECTS</span>
              </div>
              <p className={styles.copyrightText}>
                {t.footer.tagline}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
