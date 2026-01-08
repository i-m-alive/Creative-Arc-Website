"use client";

import styles from "./SolutionsGrid.module.css";

const solutions = [
  {
    title: "AI for Creativity",
    desc:
      "Intelligent systems that assist artists, designers, and creators with precision, control, and creative freedom.",
  },
  {
    title: "AI for Automation",
    desc:
      "Automate repetitive and high-volume workflows while maintaining accuracy, transparency, and reliability.",
  },
  {
    title: "AI for Knowledge & Documents",
    desc:
      "Extract, summarize, translate, and reason over large volumes of structured and unstructured documents.",
  },
  {
    title: "AI for Decision Support",
    desc:
      "Data-driven intelligence that helps teams make faster, more informed decisions.",
  },
  {
    title: "AI for Customer Experience",
    desc:
      "Conversational and intelligent systems that enhance customer support and engagement.",
  },
  {
    title: "AI for Operations",
    desc:
      "Optimize internal processes, monitoring, and workflows using applied machine intelligence.",
  },
];

export default function SolutionsGrid() {
  return (
    <section className={styles.section}>
      <h2>Our Solution Areas</h2>
      <p className={styles.subtitle}>
        Each solution is designed with real-world constraints, scalability,
        and responsible AI practices in mind.
      </p>

      <div className={styles.grid}>
        {solutions.map((s) => (
          <div key={s.title} className={styles.card}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
