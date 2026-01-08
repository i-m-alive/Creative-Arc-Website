"use client";

import styles from "./ServicesHero.module.css";

export default function ServicesHero() {
  return (
    <section className={styles.hero}>
      <span className={styles.badge}>Our Services</span>
      <h1>AI Services Built for Real-World Impact</h1>
      <p>
        From strategy to deployment, we help organizations design, build,
        and scale AI systems with confidence.
      </p>
    </section>
  );
}
