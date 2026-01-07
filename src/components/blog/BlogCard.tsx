import Link from "next/link";
import styles from "./BlogCard.module.css";

export default function BlogCard({ post }: any) {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.card}>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <span>{post.date}</span>
    </Link>
  );
}
