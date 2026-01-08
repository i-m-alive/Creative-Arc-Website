"use client";

import styles from "./CareersHero.module.css";

export default function CareersHero() {
  return (
    <section className={styles.hero}>
      <span className={styles.badge}>Careers</span>
      <h1>Build the Future of AI With Us</h1>
      <p>
        We’re building intelligent systems that solve real-world problems.
        If you value learning, ownership, and responsible AI — you’ll fit right in.
      </p>
    </section>
  );
}
