"use client";

import styles from "./SketchAI.module.css";

export default function SketchAI() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>CreativeArc SketchAI</h2>
        <span className={styles.status}>In Development</span>
      </div>

      <p className={styles.desc}>
        SketchAI is a next-generation AI-powered sketching and drawing system
        that combines intelligent software with ultra-precision hardware to
        redefine digital creativity.
      </p>

      <ul className={styles.features}>
        <li>AI-driven sketch interpretation</li>
        <li>Dynamic shading & stroke intelligence</li>
        <li>Multiple artistic styles & workflows</li>
        <li>Hardware + AI synergy for precision</li>
        <li>Creator-focused performance optimization</li>
      </ul>
    </section>
  );
}
