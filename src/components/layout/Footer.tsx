import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h3>CreativeArc</h3>
          <p>
            Building AI solutions that simplify everyday life.
          </p>
        </div>

        <div className={styles.links}>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/products">Products</a>
          <a href="/careers">Careers</a>
        </div>
      </div>

      <div className={styles.bottom}>
        © {new Date().getFullYear()} CreativeArc Services Private Limited
      </div>
    </footer>
  );
}
