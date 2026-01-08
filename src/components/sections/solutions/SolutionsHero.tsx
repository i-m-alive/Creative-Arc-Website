"use client";

import styles from "./SolutionsHero.module.css";

export default function SolutionsHero() {
  return (
    <section className={styles.hero}>
      <span className={styles.badge}>Solutions</span>
      <h1>Applied AI Solutions for Real-World Problems</h1>
      <p>
        We design AI systems that are practical, scalable, and tailored to
        specific industries — not generic demos.
      </p>
    </section>
  );
}
