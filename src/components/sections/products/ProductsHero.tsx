import styles from "./ProductsHero.module.css";

export default function ProductsHero() {
  return (
    <section className={styles.hero}>
      <h1>Our Products</h1>
      <p>
        AI-powered products built with precision, creativity, and responsibility.
      </p>
    </section>
  );
}
