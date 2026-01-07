import styles from "./WhyCreativeArc.module.css";

const reasons = [
  "Purpose-driven AI innovation",
  "Human-centered design philosophy",
  "Precision-first engineering",
  "Ethical and responsible AI",
];

export default function WhyCreativeArc() {
  return (
    <section className={styles.section}>
      <h2>Why CreativeArc</h2>

      <ul className={styles.list}>
        {reasons.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
