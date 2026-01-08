"use client";

import styles from "./SolutionsApproach.module.css";

export default function SolutionsApproach() {
  return (
    <section className={styles.section}>
      <h2>How We Build AI Solutions</h2>

      <p>
        Our approach balances technical excellence with responsibility and
        real-world usability.
      </p>

      <ol className={styles.steps}>
        <li>Understand the problem deeply</li>
        <li>Design AI around real constraints</li>
        <li>Build, validate, and iterate</li>
        <li>Deploy securely and scale responsibly</li>
      </ol>
    </section>
  );
}
