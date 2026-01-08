import styles from "./BlogLayout.module.css";

export default function BlogLayout({
  children,
  meta,
}: {
  children: React.ReactNode;
  meta: any;
}) {
  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <h1>{meta.title}</h1>
        <p>{meta.description}</p>
      </header>

      <div className={styles.content}>{children}</div>
    </article>
  );
}
