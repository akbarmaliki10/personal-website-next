"use client";

import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import { Cloud, Code2, Terminal, Database, Network, Box, Cpu } from "lucide-react";
import { stackItems } from "@/data/stack";
import styles from "./StackMarquee.module.css";

const iconMap: Record<string, React.ReactNode> = {
  Cloud: <Cloud size={24} />,
  Code2: <Code2 size={24} />,
  Terminal: <Terminal size={24} />,
  Database: <Database size={24} />,
  Network: <Network size={24} />,
  Box: <Box size={24} />,
  Cpu: <Cpu size={24} />,
};

// Wrap function to keep the value within the infinite bounds
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function StackMarquee() {
  const baseX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // We use 4 copies to ensure smooth infinite wrap.
  // 4 copies = 100% width. Wrapping at -25% visually resets exactly 1 copy.
  const items = [...stackItems, ...stackItems, ...stackItems, ...stackItems];

  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);
  const directionFactor = useRef<number>(-1);

  useAnimationFrame((t, delta) => {
    // Scroll speed: 1.5% of container per second (slower)
    let moveBy = directionFactor.current * 1.5 * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });

  const handlePan = (e: any, info: any) => {
    if (containerRef.current) {
      const fullWidth = containerRef.current.scrollWidth;
      const deltaPercent = (info.delta.x / fullWidth) * 100;
      baseX.set(baseX.get() + deltaPercent);
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>TECHNICAL STACK</h3>
      <div className={styles.marqueeWrapper}>
        <motion.div
          ref={containerRef}
          className={styles.marqueeContent}
          style={{ x, touchAction: "none" }}
          onPan={handlePan}
          onHoverStart={() => { directionFactor.current = 0; }}
          onHoverEnd={() => { directionFactor.current = -1; }}
          onPanStart={() => { directionFactor.current = 0; }}
          onPanEnd={() => { directionFactor.current = -1; }}
          whileHover={{ cursor: "grab" }}
          whileTap={{ cursor: "grabbing" }}
        >
          {items.map((item, index) => (
            <div key={`${item.id}-${index}`} className={styles.stackItem}>
              <span className={styles.icon}>{iconMap[item.iconName]}</span>
              <span className={styles.name}>{item.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
