"use client";

import styles from "./HowWeWork.module.css";

const steps = [
  "Discover & Understand",
  "Design AI Solution",
  "Develop & Validate",
  "Deploy & Scale",
];

export default function HowWeWork() {
  return (
    <section className={styles.section}>
      <h2>How We Work</h2>
      <ol className={styles.steps}>
        {steps.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>
    </section>
  );
}
