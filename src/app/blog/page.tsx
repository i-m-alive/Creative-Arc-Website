import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Insights, articles, and perspectives on AI, technology, and innovation from CreativeArc.",
};

export const dynamic = "force-static";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main>
      <BlogHero />
      <BlogGrid posts={posts} />
    </main>
  );
}