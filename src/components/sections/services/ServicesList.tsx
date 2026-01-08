"use client";

import styles from "./ServicesList.module.css";

const services = [
  {
    title: "AI Consulting & Strategy",
    desc: "Identify high-impact AI opportunities and define a clear execution roadmap aligned with business goals.",
  },
  {
    title: "Custom AI / ML Development",
    desc: "Design and build domain-specific machine learning models tailored to your data and scale.",
  },
  {
    title: "Chatbots & RAG Systems",
    desc: "Knowledge-grounded conversational AI for customer support, operations, and internal workflows.",
  },
  {
    title: "Document Intelligence",
    desc: "Extract, summarize, translate, and understand documents using advanced AI pipelines.",
  },
  {
    title: "Data Engineering & Pipelines",
    desc: "Robust data pipelines that power analytics, ML training, and real-time AI systems.",
  },
  {
    title: "Cloud AI Deployment",
    desc: "Deploy and scale AI systems securely on modern cloud platforms.",
  },
];

export default function ServicesList() {
  return (
    <section className={styles.section}>
      <h2>What We Offer</h2>
      <p className={styles.subtitle}>
        End-to-end AI services designed for scalability, reliability, and impact.
      </p>

      <div className={styles.grid}>
        {services.map((s) => (
          <div key={s.title} className={styles.card}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
