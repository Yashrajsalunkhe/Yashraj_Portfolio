import React from "react";
import { useParams, Link } from "react-router-dom";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const posts = import.meta.glob("../posts/*.md", { as: "raw", eager: true });

const useMarkdown = (slug: string) => {
  const [content, setContent] = React.useState<string>("");
  const [meta, setMeta] = React.useState<any>({});

  React.useEffect(() => {
    const file = posts[`../posts/${slug}.md`];
    if (!file) return;
    const { content: mdContent, data } = matter(file as string);
    remark()
      .use(html)
      .process(mdContent)
      .then((vfile) => {
        setContent(String(vfile));
        setMeta(data);
      });
  }, [slug]);

  return { content, meta };
};

const BlogPost: React.FC = () => {
  const { slug = "" } = useParams();
  const { content, meta } = useMarkdown(slug);

  if (!content) return <div className="p-10">Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <Link to="/blog" className="text-blue-500 hover:underline">← Back to Blog</Link>
      <h1 className="text-4xl font-bold mt-4 mb-2">{meta.title}</h1>
      <div className="text-gray-500 text-sm mb-4">{meta.date}</div>
      <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default BlogPost;
