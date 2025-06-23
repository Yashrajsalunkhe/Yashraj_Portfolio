import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import matter from "gray-matter";

interface PostMeta {
  title: string;
  date: string;
  description: string;
  slug: string;
}

// Vite import.meta.glob returns the module, but to get gray-matter frontmatter, we need to parse the raw markdown
const posts = import.meta.glob("../posts/*.md", { as: "raw", eager: true });

function getMeta(file: string, slug: string): PostMeta {
  const { data } = matter(file);
  return {
    title: data.title || slug,
    date: data.date || "",
    description: data.description || "",
    slug,
  };
}

const Blog: React.FC = () => {
  const [postList, setPostList] = useState<PostMeta[]>([]);

  useEffect(() => {
    const allPosts = Object.entries(posts).map(([path, file]: [string, string]) => {
      const slug = path.split("/").pop()?.replace(".md", "") || "";
      return getMeta(file, slug);
    });
    setPostList(
      allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-16" /> {/* Spacer for header/navbar height, adjust as needed */}
      <main className="flex-1 flex flex-col items-center w-full">
        <section className="max-w-2xl w-full py-10 px-4">
          <h1 className="text-4xl font-bold mb-2 text-center">Blog</h1>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Welcome to my blog! Here you'll find posts about web development, programming tips, and my personal journey as a developer. Posts are written in Markdown and rendered beautifully. Enjoy reading and feel free to explore!
          </p>
          <ul className="space-y-6">
            {postList.map((post) => (
              <li key={post.slug} className="border-b pb-4">
                <Link to={`/blog/${post.slug}`} className="text-2xl font-semibold hover:underline">
                  {post.title}
                </Link>
                <div className="text-gray-500 text-sm mb-1">{post.date}</div>
                <div className="text-gray-700">{post.description}</div>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="w-full mt-auto">
        {/* Use your existing Footer component here if you want it on the blog page */}
        {/* If Footer is not globally rendered, import and use it here: */}
        {/* <Footer /> */}
      </footer>
    </div>
  );
};

export default Blog;
