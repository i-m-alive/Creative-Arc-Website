import styles from "./ContactInfo.module.css";

export default function ContactInfo() {
  return (
    <section className={styles.section}>
      <h2>Reach Us Directly</h2>

      <p>
        You can also reach us directly via email.  
        We usually respond within <strong>24–48 hours</strong>.
      </p>

      <a
        href="mailto:bhakatshivraj2@gmail.com"
        className={styles.email}
      >
        bhakatshivraj2@gmail.com
      </a>
    </section>
  );
}
