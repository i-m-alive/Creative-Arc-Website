"use client";

import styles from "./ProductRoadmap.module.css";

const roadmap = [
  "Private beta with select creators",
  "Advanced AI-assisted sketch refinement",
  "Cross-device hardware integration",
  "Enterprise and education editions",
];

export default function ProductRoadmap() {
  return (
    <section className={styles.section}>
      <h2>Product Roadmap</h2>
      <ul className={styles.list}>
        {roadmap.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
