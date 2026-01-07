import styles from "./HowWeWork.module.css";

export default function HowWeWork() {
  return (
    <section className={styles.section}>
      <h2>How We Work</h2>
      <ol className={styles.steps}>
        <li>Discover & Understand</li>
        <li>Design AI Solution</li>
        <li>Develop & Validate</li>
        <li>Deploy & Scale</li>
      </ol>
    </section>
  );
}
