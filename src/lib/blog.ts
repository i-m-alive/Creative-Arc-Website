import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDir = path.join(process.cwd(), "src/content/blog");

export function getAllPosts() {
  const files = fs.readdirSync(blogDir);

  return files.map((file) => {
    const slug = file.replace(".mdx", "");
    const filePath = path.join(blogDir, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(content);

    return {
      slug,
      ...data,
    };
  });
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(blogDir, `${slug}.mdx`);
  const content = fs.readFileSync(filePath, "utf-8");
  return matter(content);
}
