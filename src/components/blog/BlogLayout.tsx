import styles from "./BlogLayout.module.css";

export default function BlogLayout({
  meta,
  children,
}: {
  meta: any;
  children: React.ReactNode;
}) {
  return (
    <article className={styles.article}>
      <header>
        <h1>{meta.title}</h1>
        <p className={styles.meta}>
          {meta.date} · {meta.author}
        </p>
      </header>

      <section className={styles.content}>{children}</section>
    </article>
  );
}
