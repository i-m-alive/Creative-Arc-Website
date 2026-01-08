import Link from "next/link";
import styles from "./BlogCard.module.css";

export default function BlogCard({ post }: { post: any }) {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.card}>
      <article>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <span className={styles.read}>Read article →</span>
      </article>
    </Link>
  );
}
