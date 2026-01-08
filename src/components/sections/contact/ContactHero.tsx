"use client";

import styles from "./ContactHero.module.css";

export default function ContactHero() {
  return (
    <section className={styles.hero}>
      <span className={styles.badge}>Contact</span>
      <h1>Let’s Talk About AI</h1>
      <p>
        Have a question, idea, or collaboration in mind?  
        We’d love to hear from you.
      </p>
    </section>
  );
}
