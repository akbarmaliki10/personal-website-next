"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useLanguage();
  // false on the server, true on the client: avoids a theme hydration mismatch
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!mounted) {
    return <div className={styles.togglePlaceholder} aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={styles.toggleButton}
      aria-label={t.theme.toggle}
      aria-pressed={isDark}
    >
      <Sun size={14} className={`${styles.trackIcon} ${styles.sunIcon}`} />
      <Moon size={14} className={`${styles.trackIcon} ${styles.moonIcon}`} />
      <motion.span
        className={styles.knob}
        initial={false}
        animate={{ x: isDark ? 28 : 0, rotate: isDark ? 360 : 0 }}
        transition={{ type: "spring", stiffness: 380, damping: 26 }}
      >
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ opacity: 0, scale: 0.4, rotate: -90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.25 }}
          className={styles.knobIcon}
        >
          {isDark ? <Moon size={14} /> : <Sun size={14} />}
        </motion.span>
      </motion.span>
    </button>
  );
}
