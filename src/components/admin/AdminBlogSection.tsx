import React from "react";

interface AdminBlogSectionProps {
  blogDraft: any[];
  setBlogDraft: (draft: any[]) => void;
  setGlobalPreviewOpen: (open: boolean) => void;
  handleSaveWithPopup: (fn: () => void) => void;
  setBlogState: (draft: any[]) => void;
  blog: any[];
}

const AdminBlogSection: React.FC<AdminBlogSectionProps> = ({
  blogDraft,
  setBlogDraft,
  setGlobalPreviewOpen,
  handleSaveWithPopup,
  setBlogState,
  blog
}) => (
  <div className="flex flex-col gap-8 mt-20 items-center w-full">
    <div className="w-full bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-xl flex flex-col min-h-[500px] border border-primary/10 relative">
      <button
        className="absolute top-6 right-6 bg-gradient-to-r from-primary to-secondary text-white px-5 py-2 rounded-xl font-semibold shadow hover:opacity-90 transition"
        onClick={() => setGlobalPreviewOpen(true)}
      >
        Live Preview
      </button>
      <h2 className="text-2xl font-bold mb-4 text-primary">Edit Blog Posts</h2>
      <div className="space-y-8">
        {blogDraft.map((post: any, idx: number) => (
          <div key={idx} className="flex flex-wrap md:flex-nowrap items-center gap-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg px-4 py-3 border border-zinc-200 dark:border-zinc-700 shadow-sm">
            <div className="flex flex-col w-48">
              <label className="text-xs text-zinc-500 mb-1">Title</label>
              <input
                className="border rounded px-2 py-1 w-full bg-white"
                value={post.title}
                onChange={e => {
                  const updated = [...blogDraft];
                  updated[idx].title = e.target.value;
                  setBlogDraft(updated);
                }}
              />
            </div>
            <div className="flex flex-col w-64">
              <label className="text-xs text-zinc-500 mb-1">Content</label>
              <textarea
                className="border rounded px-2 py-1 w-full bg-white min-h-[60px]"
                value={post.content}
                onChange={e => {
                  const updated = [...blogDraft];
                  updated[idx].content = e.target.value;
                  setBlogDraft(updated);
                }}
              />
            </div>
            <div className="flex flex-col w-32">
              <label className="text-xs text-zinc-500 mb-1">Date</label>
              <input
                type="date"
                className="border rounded px-2 py-1 w-full bg-white"
                value={post.date}
                onChange={e => {
                  const updated = [...blogDraft];
                  updated[idx].date = e.target.value;
                  setBlogDraft(updated);
                }}
              />
            </div>
            <div className="flex flex-col w-48">
              <label className="text-xs text-zinc-500 mb-1">Image URL (optional)</label>
              <input
                className="border rounded px-2 py-1 w-full bg-white"
                value={post.imageUrl || ''}
                onChange={e => {
                  const updated = [...blogDraft];
                  updated[idx].imageUrl = e.target.value;
                  setBlogDraft(updated);
                }}
                placeholder="Paste image URL"
              />
            </div>
            <div className="flex gap-2 ml-auto mt-4 md:mt-0">
              <button
                className="text-red-500 hover:underline"
                onClick={() => {
                  setBlogDraft(blogDraft.filter((_: any, i: number) => i !== idx));
                }}
              >Delete</button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="text-blue-500 text-sm mt-4 self-start"
        onClick={() => {
          setBlogDraft([
            ...blogDraft,
            { title: '', content: '', date: '', imageUrl: '' }
          ]);
        }}
      >+ Add Blog Post</button>
      <div className="flex gap-2 mt-8">
        <button className="bg-primary text-white px-4 py-2 rounded font-semibold" onClick={() => handleSaveWithPopup(() => setBlogState(blogDraft))}>Save</button>
        <button className="bg-zinc-300 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-4 py-2 rounded" onClick={() => setBlogDraft(blog)}>Discard</button>
      </div>
    </div>
  </div>
);

export default AdminBlogSection;
