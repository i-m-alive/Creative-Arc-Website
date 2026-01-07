import styles from "./HackathonPlaceholder.module.css";

export default function HackathonPlaceholder() {
  return (
    <section className={styles.section}>
      <h2>Hackathons & Innovation Programs</h2>

      <p>
        CreativeArc regularly organizes hackathons and innovation-driven
        programs for students, developers, and AI enthusiasts.
      </p>

      <p className={styles.note}>
        Our upcoming hackathon will be announced soon.
        Participation details and registration links will be available here.
      </p>

      <a
        href="#"
        className={styles.button}
        aria-disabled="true"
      >
        Hackathon Website (Coming Soon)
      </a>
    </section>
  );
}
