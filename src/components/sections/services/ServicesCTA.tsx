"use client";

import styles from "./ServicesCTA.module.css";

export default function ServicesCTA() {
  return (
    <section className={styles.section}>
      <h2>Let’s Build Something Intelligent</h2>
      <p>
        Talk to our team about how CreativeArc can help you design and deploy AI.
      </p>
      <a href="/contact" className={styles.cta}>
        Get in Touch
      </a>
    </section>
  );
}
