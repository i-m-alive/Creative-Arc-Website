import styles from "./ProductTeaser.module.css";

export default function ProductTeaser() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2>Creative Arc SketchAI</h2>
        <p>
          A next-generation AI-powered sketching and drawing system that
          combines intelligent software with ultra-precision hardware.
        </p>
        <span className={styles.badge}>IN DEVELOPMENT</span>
      </div>
    </section>
  );
}
