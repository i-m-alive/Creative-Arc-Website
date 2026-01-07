import styles from "./CareersCTA.module.css";

export default function CareersCTA() {
  return (
    <section className={styles.section}>
      <h2>Build the Future of AI With Us</h2>
      <p>
        Join our hackathons, internships, and innovation programs designed for
        curious minds.
      </p>
      <a href="/careers" className={styles.cta}>
        Explore Careers
      </a>
    </section>
  );
}
