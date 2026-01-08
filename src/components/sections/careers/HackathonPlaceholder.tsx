"use client";

import styles from "./HackathonPlaceholder.module.css";

export default function HackathonPlaceholder() {
  return (
    <section className={styles.section}>
      <h2>Hackathons & Innovation Programs</h2>

      <p>
        CreativeArc regularly hosts hackathons and innovation-driven programs
        for students, developers, and AI enthusiasts.
      </p>

      <p className={styles.note}>
        Our first flagship hackathon is currently being planned.
        Details and registration links will be announced here.
      </p>

      <span className={styles.button}>
        Hackathon Website (Coming Soon)
      </span>
    </section>
  );
}
