"use client";

import styles from "./ServicesOverview.module.css";
import { motion } from "framer-motion";

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
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -10;
    const rotateY = ((x / rect.width) - 0.5) * 10;

    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
    e.currentTarget.style.transform = `
      translateY(-10px)
      scale(1.04)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  };

  const reset = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform =
      "translateY(0) scale(1) rotateX(0) rotateY(0)";
  };

  return (
    <section className={styles.section}>
      <h2>What We Do</h2>
      <p className={styles.subtitle}>
        Applied Artificial Intelligence, built for real-world impact.
      </p>

      <div className={styles.grid}>
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className={styles.card}
            tabIndex={0}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.12,
              duration: 0.45,
              ease: "easeOut",
            }}
            onMouseMove={handleMove}
            onMouseLeave={reset}
            onFocus={(e) =>
              e.currentTarget.classList.add(styles.focused)
            }
            onBlur={(e) =>
              e.currentTarget.classList.remove(styles.focused)
            }
          >
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
