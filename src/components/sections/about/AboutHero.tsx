"use client";

import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <span className={styles.badge}>About CreativeArc</span>
      <h1>Designing the Future of Applied Artificial Intelligence</h1>
      <p>
        CreativeArc Services is a purpose-driven AI company focused on building
        intelligent systems that create real-world impact with responsibility,
        precision, and creativity.
      </p>
    </section>
  );
}
