"use client";

import styles from "./VisionMission.module.css";

export default function VisionMission() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Our Vision</h3>
          <p>
            To become a trusted global partner in applied AI, delivering systems
            that are ethical, intelligent, and impactful.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Our Mission</h3>
          <p>
            Build AI solutions that simplify complexity, empower organizations,
            and respect human values.
          </p>
        </div>
      </div>
    </section>
  );
}
