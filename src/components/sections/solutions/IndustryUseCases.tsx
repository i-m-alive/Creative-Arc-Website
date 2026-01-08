"use client";

import styles from "./IndustryUseCases.module.css";

const industries = [
  "Healthcare & Life Sciences",
  "Education & EdTech",
  "Retail & E-commerce",
  "Media & Creative Industries",
  "Enterprise Operations",
  "Technology & SaaS",
];

export default function IndustryUseCases() {
  return (
    <section className={styles.section}>
      <h2>Industries We Work With</h2>

      <ul className={styles.list}>
        {industries.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </section>
  );
}
