import styles from "./Hero.module.css";
import Particles from "@/components/ui/Particles";
export default function Hero() {
  return (
    <section className={styles.hero}>
      <Particles />
      {/* FULL animated brand logo (not icon-only) */}
  <div style={{ display: "flex", justifyContent: "center" }}>
    <img
      src="/brand/creative-arc-services-animated-full.svg"
      alt="Creative Arc Services"
      className={styles.heroLogo}
    />
  </div>


      <h1>Building AI Solutions That Simplify Everyday Life</h1>

      <p>
        Creative Arc Services designs intelligent AI systems and products that
        blend engineering precision, creativity, and responsible AI.
      </p>

      <div className={styles.actions}>
        <a href="/contact" className={styles.primary}>Get in Touch</a>
        <a href="/products" className={styles.secondary}>Explore Products</a>
      </div>
    </section>
  );
}
