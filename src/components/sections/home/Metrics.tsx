import styles from "./Metrics.module.css";

const metrics = [
  { value: "10+", label: "AI Projects Delivered" },
  { value: "5+", label: "Industry Domains" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "Ethical", label: "AI-First Approach" },
];

export default function Metrics() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {metrics.map((m) => (
          <div key={m.label} className={styles.metric}>
            <strong>{m.value}</strong>
            <span>{m.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
