"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { locales } from "@/i18n/translations";
import styles from "./LanguageToggle.module.css";

export function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div className={styles.group} role="group" aria-label={t.language.label}>
      {locales.map((l) => {
        const active = locale === l.code;
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => setLocale(l.code)}
            className={`${styles.option} ${active ? styles.active : ""}`}
            aria-pressed={active}
            title={l.name}
            lang={l.code}
          >
            {active && (
              <motion.span
                layoutId="language-pill"
                className={styles.pill}
                transition={{ type: "spring", stiffness: 420, damping: 32 }}
              />
            )}
            <span className={styles.label}>{l.label}</span>
          </button>
        );
      })}
    </div>
  );
}
