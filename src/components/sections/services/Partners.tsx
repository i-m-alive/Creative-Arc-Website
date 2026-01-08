"use client";

import styles from "./Partners.module.css";

const partners = [
  "Amazon Web Services (AWS)",
  "Google Cloud",
  "Microsoft Azure",
  "Salesforce",
];

export default function Partners() {
  return (
    <section className={styles.section}>
      <h2>Our Technology Partners</h2>
      <p className={styles.subtitle}>
        We build and deploy AI solutions using industry-leading cloud platforms.
      </p>

      <div className={styles.grid}>
        {partners.map((p) => (
          <div key={p} className={styles.partner}>
            {p}
          </div>
        ))}
      </div>
    </section>
  );
}
