import styles from "./SketchAI.module.css";

export default function SketchAI() {
  return (
    <section className={styles.section}>
      <h2>CreativeArc SketchAI</h2>
      <p>
        A next-generation AI-powered sketching and drawing system combining
        intelligent software with ultra-precision hardware.
      </p>

      <ul className={styles.features}>
        <li>AI-driven sketch interpretation</li>
        <li>Dynamic shading & stroke control</li>
        <li>Multiple artistic styles</li>
        <li>Hardware + AI synergy</li>
      </ul>

      <span className={styles.status}>In Development</span>
    </section>
  );
}
