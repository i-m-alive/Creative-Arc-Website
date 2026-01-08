import styles from "./BlogGrid.module.css";
import BlogCard from "./BlogCard";

export default function BlogGrid({ posts }: { posts: any[] }) {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
