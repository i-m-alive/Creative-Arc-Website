import styles from "./BlogHero.module.css";

export default function BlogHero() {
  return (
    <section className={styles.hero}>
      <h1>Blog & Insights</h1>
      <p>
        Articles, perspectives, and deep dives on AI, technology, and responsible
        innovation from CreativeArc.
      </p>
    </section>
  );
}
