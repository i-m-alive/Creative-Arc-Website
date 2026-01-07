import styles from "./CoreValues.module.css";

const values = [
  "Purpose-driven innovation",
  "Precision and quality",
  "Ethical AI by design",
  "Human + AI collaboration",
  "Long-term thinking",
];

export default function CoreValues() {
  return (
    <section className={styles.section}>
      <h2>Our Values</h2>
      <ul className={styles.grid}>
        {values.map((v) => (
          <li key={v}>{v}</li>
        ))}
      </ul>
    </section>
  );
}
