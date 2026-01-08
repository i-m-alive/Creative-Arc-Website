"use client";

import styles from "./WhyCreativeArc.module.css";

const points = [
  "Purpose-driven AI innovation",
  "Human-centered design philosophy",
  "Precision-first engineering",
  "Ethical and responsible AI",
];

export default function WhyCreativeArc() {
  return (
    <section className={styles.section}>
      <h2>Why CreativeArc</h2>

      <div className={styles.list}>
        {points.map((text) => (
          <div
            key={text}
            className={styles.item}
            tabIndex={0}
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty(
                "--x",
                `${e.clientX - r.left}px`
              );
            }}
          >
            {text}
          </div>
        ))}
      </div>
    </section>
  );
}
