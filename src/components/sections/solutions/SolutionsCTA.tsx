"use client";

import styles from "./SolutionsCTA.module.css";

export default function SolutionsCTA() {
  return (
    <section className={styles.section}>
      <h2>Have a Use Case in Mind?</h2>
      <p>
        Let’s discuss how CreativeArc can design an AI solution tailored
        to your industry and goals.
      </p>
      <a href="/contact" className={styles.cta}>
        Contact Us
      </a>
    </section>
  );
}
