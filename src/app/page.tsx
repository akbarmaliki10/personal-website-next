import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Profile } from "@/features/profile/Profile";
import { StackMarquee } from "@/features/stack/StackMarquee";
import { ExperienceTimeline } from "@/features/experience/Experience";
import { Projects } from "@/features/projects/Projects";
import { Lounge } from "@/features/lounge/Lounge";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <strong>Akbar Maliki</strong>
        </div>
        
        <nav className={styles.nav}>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#lounge">Lounge</a>
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
        </div>
      </header>
      
      <main className={styles.main}>
        <div className={styles.heroGrid}>
          {/* Left Column */}
          <div className={styles.leftCol}>
            <div className={styles.stickyContent}>
              <Profile />
              <div id="experience" className={styles.experienceSection}>
                <ExperienceTimeline />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightCol} id="projects">
            <StackMarquee />
            <Projects />
          </div>
        </div>

        {/* Full width lounge section */}
        <div className={styles.loungeSection}>
          <Lounge />
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© 2026 AKBAR MALIKI - HUMANISTIC ENGINEER</p>
          <div className={styles.footerLinks}>
            <a href="#">GITHUB</a>
            <a href="#">LINKEDIN</a>
            <a href="#">EMAIL</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
