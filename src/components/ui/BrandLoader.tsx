"use client";

import { useEffect, useState } from "react";
import styles from "./BrandLoader.module.css";

export default function BrandLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div className={styles.overlay} aria-hidden>
      <img
        src="/brand/creative-arc-icon.svg"
        alt=""
        className={styles.logo}
      />
    </div>
  );
}
