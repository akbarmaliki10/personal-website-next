"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={styles.togglePlaceholder} aria-hidden="true" />;
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className={styles.toggleButton}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className={styles.icon} size={20} />
      ) : (
        <Sun className={styles.icon} size={20} />
      )}
    </button>
  );
}
