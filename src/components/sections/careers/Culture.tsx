import styles from "./Culture.module.css";

const points = [
  "Learning-first culture",
  "Real-world problem solving",
  "Ownership and accountability",
  "Ethical and responsible AI",
  "Experimentation and innovation",
];

export default function Culture() {
  return (
    <section className={styles.section}>
      <h2>Life at CreativeArc</h2>

      <ul className={styles.list}>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </section>
  );
}
