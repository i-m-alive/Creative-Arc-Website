import styles from "./ServicesOverview.module.css";
import FadeIn from "@/components/ui/FadeIn";

const services = [
  {
    title: "AI Consulting & Strategy",
    desc: "Identify high-impact AI opportunities with a clear execution roadmap.",
  },
  {
    title: "Custom AI / ML Development",
    desc: "Tailored models designed for your domain, data, and scale.",
  },
  {
    title: "Chatbots & RAG Systems",
    desc: "Knowledge-grounded conversational AI for real business use.",
  },
  {
    title: "Document Intelligence",
    desc: "Extract, summarize, translate, and understand documents at scale.",
  },
];

export default function ServicesOverview() {
  return (
    <FadeIn>
    <section className={styles.section}>
      <h2>What We Do</h2>
      <p className={styles.subtitle}>
        Applied Artificial Intelligence, built for real-world impact.
      </p>

      <div className={styles.grid}>
        {services.map((service) => (
          <div key={service.title} className={styles.card}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
    </FadeIn>
  );
}
