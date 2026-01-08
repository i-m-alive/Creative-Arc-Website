"use client";

import styles from "./ProductsCTA.module.css";

export default function ProductsCTA() {
  return (
    <section className={styles.section}>
      <h2>Interested in Our Products?</h2>
      <p>
        Get early access updates or collaborate with us on building intelligent
        AI-powered tools.
      </p>
      <a href="/contact" className={styles.cta}>
        Get in Touch
      </a>
    </section>
  );
}
