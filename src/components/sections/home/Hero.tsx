import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Building AI Solutions That Simplify Everyday Life</h1>
      <p>
        We design intelligent AI systems and products that blend precision,
        creativity, and responsibility.
      </p>
      <div className={styles.actions}>
        <a href="/contact" className={styles.primary}>Get in Touch</a>
        <a href="/products" className={styles.secondary}>Explore Products</a>
      </div>
    </section>
  );
}
