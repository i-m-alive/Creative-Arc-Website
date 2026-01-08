"use client";

import styles from "./CoreValues.module.css";

const values = [
  "Purpose-driven innovation",
  "Human-centered design",
  "Engineering excellence",
  "Transparency and trust",
  "Responsible AI"
];

export default function CoreValues() {
  return (
    <section className={styles.section}>
      <h2>Our Core Values</h2>
      <ul className={styles.list}>
        {values.map((v) => (
          <li key={v}>{v}</li>
        ))}
      </ul>
    </section>
  );
}
