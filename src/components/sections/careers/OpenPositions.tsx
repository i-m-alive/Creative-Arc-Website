import styles from "./OpenPositions.module.css";

export default function OpenPositions() {
  return (
    <section className={styles.section}>
      <h2>Open Positions</h2>

      <div className={styles.card}>
        <p className={styles.title}>No open positions at the moment</p>
        <p className={styles.text}>
          We currently do not have any active job openings.
          As we grow and launch new initiatives, opportunities
          will be posted here.
        </p>
      </div>
    </section>
  );
}
