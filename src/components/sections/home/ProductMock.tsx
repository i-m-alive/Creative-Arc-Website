"use client";

import styles from "./ProductMock.module.css";
import { motion } from "framer-motion";

export default function ProductMock() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.mock}
        initial={{ scale: 0.96, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.header}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
        <div className={styles.canvas}>
          AI-powered sketch generation…
        </div>
      </motion.div>

      <span className={styles.badge}>In Development</span>
    </section>
  );
}
