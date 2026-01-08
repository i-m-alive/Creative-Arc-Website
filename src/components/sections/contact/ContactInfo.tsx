"use client";

import styles from "./ContactInfo.module.css";

export default function ContactInfo() {
  return (
    <section className={styles.section}>
      <h2>Reach Us Directly</h2>
      <p>
        Prefer email? You can reach us directly.  
        We usually respond within <strong>24–48 hours</strong>.
      </p>

      <a
        href="mailto:creative.arc.services.co@gmail.com"
        className={styles.email}
      >
        creative.arc.services.co@gmail.com
      </a>
    </section>
  );
}
