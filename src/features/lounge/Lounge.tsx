"use client";

import Image from "next/image";
import { Gamepad2, BookOpen } from "lucide-react";
import { loungeItems } from "@/data/lounge";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "./Lounge.module.css";

const iconMap: Record<string, React.ReactNode> = {
  Gamepad2: <Gamepad2 size={48} className={styles.icon} />,
  BookOpen: <BookOpen size={48} className={styles.icon} />,
};

export function Lounge() {
  const { t } = useLanguage();
  return (
    <div className={styles.container} id="lounge">
      <h2 className={styles.sectionTitle}>{t.lounge.title}</h2>
      
      <div className={styles.grid}>
        {loungeItems.map((item, index) => (
          <div key={item.id} className={`${styles.itemGroup} ${index % 2 !== 0 ? styles.reverse : ''}`}>
            <div className={styles.textContent}>
              {iconMap[item.iconName]}
              <h3 className={styles.category}>{t.lounge.items[item.id].category}</h3>
              <p className={styles.subtitle}>{t.lounge.items[item.id].subtitle}</p>
            </div>
            
            <div className={styles.imageGrid}>
              {item.images.map((img) => (
                <div key={img.id} className={styles.imageCard}>
                  <div className={styles.imagePlaceholder}>
                    <Image 
                      src={img.url} 
                      alt={img.name} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={styles.image}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <span className={styles.imageName}>{img.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
