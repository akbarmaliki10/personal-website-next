"use client";

import Image from "next/image";
import { Gamepad2, BookOpen } from "lucide-react";
import { loungeItems } from "@/data/lounge";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "./Lounge.module.css";

const iconMap: Record<string, React.ReactNode> = {
  Gamepad2: <Gamepad2 size={24} className={styles.comicIcon} />,
  BookOpen: <BookOpen size={24} className={styles.comicIcon} />,
};

export function Lounge() {
  const { t } = useLanguage();

  return (
    <section className={styles.supplementSection} id="lounge">
      {/* Sunday Supplement Banner */}
      <div className={styles.supplementBanner}>
        <div className={styles.bannerKicker}>
          <span>{t.newspaper.sectionHobbies}</span>
          <span>SPECIAL COLOR PICTORIAL EDITION</span>
        </div>
        <h2 className={styles.bannerTitle}>{t.lounge.title}</h2>
        <p className={styles.bannerSubtitle}>
          Weekly serialized amusements, tactical digital arenas & manga dispatches.
        </p>
      </div>

      {/* Comic Strip Strip Grid */}
      <div className={styles.comicsGrid}>
        {loungeItems.map((item, index) => {
          const itemText = t.lounge.items[item.id];

          return (
            <div key={item.id} className={styles.comicPanel}>
              <div className={styles.panelHeader}>
                <div className={styles.panelTitleGroup}>
                  {iconMap[item.iconName]}
                  <h3 className={styles.panelCategory}>
                    PANEL 0{index + 1}: {itemText.category}
                  </h3>
                </div>
                <span className={styles.panelSubtitle}>{itemText.subtitle}</span>
              </div>

              <div className={styles.stripFrames}>
                {item.images.map((img) => (
                  <div key={img.id} className={styles.frameCard}>
                    <div className={styles.frameInner}>
                      <Image
                        src={img.url}
                        alt={img.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className={styles.comicImage}
                        unoptimized
                      />
                    </div>
                    <div className={styles.frameCaption}>
                      <span className={styles.captionTag}>SERIAL DISPATCH</span>
                      <span className={styles.captionTitle}>{img.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
