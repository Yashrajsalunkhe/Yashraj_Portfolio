import React from "react";

interface AdminAboutSectionProps {
  aboutDraft: any;
  setAboutDraft: (draft: any) => void;
  setGlobalPreviewOpen: (open: boolean) => void;
  handleSaveWithPopup: (fn: () => void) => void;
  setAboutState: (draft: any) => void;
  about: any;
}

const AdminAboutSection: React.FC<AdminAboutSectionProps> = ({
  aboutDraft,
  setAboutDraft,
  setGlobalPreviewOpen,
  handleSaveWithPopup,
  setAboutState,
  about
}) => (
  <div className="flex flex-col gap-8 mt-20 items-center w-full">
    <div className="w-full bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-xl flex flex-col min-h-[500px] border border-primary/10 relative">
      <button
        className="absolute top-6 right-6 bg-gradient-to-r from-primary to-secondary text-white px-5 py-2 rounded-xl font-semibold shadow hover:opacity-90 transition"
        onClick={() => setGlobalPreviewOpen(true)}
      >
        Live Preview
      </button>
      <h2 className="text-2xl font-bold mb-4 text-primary">Edit About Me</h2>
      <div className="flex flex-col md:flex-row gap-6 mb-8 items-start">
        <div className="flex-shrink-0 w-32 h-32 rounded-full overflow-hidden border-2 border-primary/40 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
          {aboutDraft.imageUrl ? (
            <img src={aboutDraft.imageUrl} alt="About Me" className="object-cover w-full h-full" />
          ) : (
            <span className="text-zinc-400 text-xs">No Image</span>
          )}
        </div>
        <div className="flex-1">
          <label className="text-xs text-zinc-500 mb-1 block">Image URL</label>
          <input
            className="border rounded px-2 py-1 w-full bg-white mb-3"
            value={aboutDraft.imageUrl || ''}
            onChange={e => setAboutDraft({ ...aboutDraft, imageUrl: e.target.value })}
            placeholder="Paste image URL or leave blank for no image"
          />
          <label className="text-xs text-zinc-500 mb-1 block">About Me</label>
          <textarea
            className="border rounded px-3 py-2 w-full min-h-[100px] md:min-w-[400px] lg:min-w-[600px] bg-white text-base resize-y"
            value={aboutDraft.aboutMe}
            onChange={e => setAboutDraft({ ...aboutDraft, aboutMe: e.target.value })}
            placeholder="Tell something about yourself"
          />
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4 text-secondary">Edit My Journey (Timeline)</h3>
        <div className="space-y-6">
          {(aboutDraft.timeline || []).map((item: any, idx: number) => (
            <div key={idx} className="flex flex-col gap-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg px-4 py-3 border border-zinc-200 dark:border-zinc-700 shadow-sm">
              <div className="flex flex-col w-full">
                <label className="text-xs text-zinc-500 mb-1">Title</label>
                <input
                  className="border rounded px-2 py-1 w-full bg-white"
                  value={item.title}
                  onChange={e => {
                    const updated = [...aboutDraft.timeline];
                    updated[idx].title = e.target.value;
                    setAboutDraft({ ...aboutDraft, timeline: updated });
                  }}
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-xs text-zinc-500 mb-1">Description</label>
                <textarea
                  className="border rounded px-2 py-1 w-full bg-white min-w-0 md:min-w-[400px] lg:min-w-[600px] min-h-[60px] resize-y"
                  value={item.description}
                  onChange={e => {
                    const updated = [...aboutDraft.timeline];
                    updated[idx].description = e.target.value;
                    setAboutDraft({ ...aboutDraft, timeline: updated });
                  }}
                />
              </div>
              <div className="flex flex-col w-full md:w-1/4">
                <label className="text-xs text-zinc-500 mb-1">Year</label>
                <input
                  className="border rounded px-2 py-1 w-full bg-white"
                  value={item.year}
                  onChange={e => {
                    const updated = [...aboutDraft.timeline];
                    updated[idx].year = e.target.value;
                    setAboutDraft({ ...aboutDraft, timeline: updated });
                  }}
                />
              </div>
              <div className="flex flex-col w-full md:w-1/4">
                <label className="text-xs text-zinc-500 mb-1">Icon (optional)</label>
                <input
                  className="border rounded px-2 py-1 w-full bg-white"
                  value={item.icon || ''}
                  onChange={e => {
                    const updated = [...aboutDraft.timeline];
                    updated[idx].icon = e.target.value;
                    setAboutDraft({ ...aboutDraft, timeline: updated });
                  }}
                  placeholder="e.g. fas fa-briefcase"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/4">
                <label className="text-xs text-zinc-500 mb-1">Color (optional)</label>
                <input
                  className="border rounded px-2 py-1 w-full bg-white"
                  value={item.color || ''}
                  onChange={e => {
                    const updated = [...aboutDraft.timeline];
                    updated[idx].color = e.target.value;
                    setAboutDraft({ ...aboutDraft, timeline: updated });
                  }}
                  placeholder="e.g. primary"
                />
              </div>
              <div className="flex gap-2 mt-2">
                <button
                  className="text-red-500 hover:underline"
                  onClick={() => {
                    setAboutDraft({ ...aboutDraft, timeline: aboutDraft.timeline.filter((_: any, i: number) => i !== idx) });
                  }}
                >Delete</button>
              </div>
            </div>
          ))}
        </div>
        <button
          className="text-blue-500 text-sm mt-4 self-start"
          onClick={() => {
            setAboutDraft({
              ...aboutDraft,
              timeline: [
                ...(aboutDraft.timeline || []),
                { title: '', description: '', year: '', icon: '', color: '' }
              ]
            });
          }}
        >+ Add Timeline Entry</button>
      </div>
      <div className="flex gap-2 mt-4">
        <button
          className="bg-primary text-white px-4 py-2 rounded font-semibold"
          onClick={() => handleSaveWithPopup(() => setAboutState(aboutDraft))}
        >
          Save
        </button>
        <button
          className="bg-zinc-300 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-4 py-2 rounded"
          onClick={() => setAboutDraft(about)}
        >
          Discard
        </button>
      </div>
    </div>
  </div>
);

export default AdminAboutSection;
