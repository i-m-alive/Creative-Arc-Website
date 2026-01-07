import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/blog/BlogCard";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Insights, articles, and perspectives on AI, technology, and innovation from CreativeArc.",
};

export const dynamic = "force-static";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main style={{ padding: "96px 24px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>Blog & Insights</h1>
      <p style={{ marginTop: "12px", color: "var(--text-secondary)" }}>
        Articles and perspectives on AI, technology, and responsible innovation.
      </p>

      <div
        style={{
          marginTop: "48px",
          display: "grid",
          gap: "24px",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
      >
        {posts.map((post: any) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}
