import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Brand */}
        <div className={styles.brand}>
          <img
            src="/brand/creative-arc-services-light.svg"
            alt="Creative Arc Services"
            className={styles.logo}
          />
          <p className={styles.tagline}>
            Building AI solutions that simplify everyday life.
          </p>
        </div>

        {/* Links */}
        <nav className={styles.links}>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/products">Products</a>
          <a href="/careers">Careers</a>
          <a href="/contact">Contact</a>
        </nav>

        {/* Social */}
        <a
          href="https://www.linkedin.com/company/creativearc-services-pvt-ltd/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkedin}
          aria-label="Creative Arc Services on LinkedIn"
        >
          in
        </a>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        © {new Date().getFullYear()} CreativeArc Services Private Limited
      </div>
    </footer>
  );
}
