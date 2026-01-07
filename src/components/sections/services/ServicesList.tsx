import styles from "./ServicesList.module.css";

const services = [
  "AI Consulting & Strategy",
  "Custom AI / ML Development",
  "Chatbots & RAG Systems",
  "Document Intelligence",
  "Data Engineering & Pipelines",
  "Cloud AI Deployment",
];

export default function ServicesList() {
  return (
    <section className={styles.section}>
      <h2>What We Offer</h2>
      <div className={styles.grid}>
        {services.map((s) => (
          <div key={s} className={styles.card}>
            <h3>{s}</h3>
            <p>
              Designed to solve real business problems with scalable AI systems.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
