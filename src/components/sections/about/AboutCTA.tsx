"use client";

import styles from "./AboutCTA.module.css";

export default function AboutCTA() {
  return (
    <section className={styles.section}>
      <h2>Work With Us</h2>
      <p>
        Join us in building responsible AI solutions that make a difference.
      </p>
      <a href="/contact" className={styles.cta}>
        Get in Touch
      </a>
    </section>
  );
}
