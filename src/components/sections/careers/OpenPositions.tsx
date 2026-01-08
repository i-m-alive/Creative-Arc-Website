"use client";

import styles from "./OpenPositions.module.css";

export default function OpenPositions() {
  return (
    <section className={styles.section}>
      <h2>Open Positions</h2>

      <div className={styles.card}>
        <p className={styles.title}>No open roles at the moment</p>
        <p className={styles.text}>
          We don’t have any active job openings right now.
          As we expand our team and launch new initiatives,
          opportunities will be published here.
        </p>

        <p className={styles.note}>
          Follow us on LinkedIn to stay updated.
        </p>
      </div>
    </section>
  );
}
