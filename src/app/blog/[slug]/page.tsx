import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import BlogLayout from "@/components/blog/BlogLayout";

export const dynamic = "force-static";

/**
 * Required for static generation of dynamic routes
 */
export function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

/**
 * ✅ FIXED: params is async in Next.js 15
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data } = getPostBySlug(slug);

  return {
    title: data.title,
    description: data.description,
  };
}

/**
 * ✅ FIXED: params must be awaited
 */
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const { slug } = await params;
    const { content, data } = getPostBySlug(slug);

    return (
      <BlogLayout meta={data}>
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </BlogLayout>
    );
  } catch (error) {
    notFound();
  }
}
