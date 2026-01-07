import styles from "./VisionMission.module.css";

export default function VisionMission() {
  return (
    <section className={styles.section}>
      <div>
        <h3>Vision</h3>
        <p>
          To become a globally trusted AI innovation company bridging human
          creativity and machine intelligence.
        </p>
      </div>

      <div>
        <h3>Mission</h3>
        <p>
          To design ethical, high-precision AI systems that solve real-world
          problems across industries.
        </p>
      </div>
    </section>
  );
}
