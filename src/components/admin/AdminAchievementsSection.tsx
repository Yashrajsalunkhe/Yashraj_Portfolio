import React from "react";

interface AdminAchievementsSectionProps {
  achievementsDraft: any[];
  setAchievementsDraft: (draft: any[]) => void;
  setGlobalPreviewOpen: (open: boolean) => void;
  handleSaveWithPopup: (fn: () => void) => void;
  setAchievementsState: (draft: any[]) => void;
  achievements: any[];
}

const AdminAchievementsSection: React.FC<AdminAchievementsSectionProps> = ({
  achievementsDraft,
  setAchievementsDraft,
  setGlobalPreviewOpen,
  handleSaveWithPopup,
  setAchievementsState,
  achievements
}) => (
  <div className="flex flex-col gap-8 mt-20 items-center w-full">
    <div className="w-full bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-xl flex flex-col min-h-[500px] border border-primary/10 relative">
      <button
        className="absolute top-6 right-6 bg-gradient-to-r from-primary to-secondary text-white px-5 py-2 rounded-xl font-semibold shadow hover:opacity-90 transition"
        onClick={() => setGlobalPreviewOpen(true)}
      >
        Live Preview
      </button>
      <h2 className="text-2xl font-bold mb-4 text-primary">Edit Achievements</h2>
      <div className="space-y-8">
        {achievementsDraft.map((a: any, idx: number) => (
          <div key={idx} className="flex flex-col gap-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg px-4 py-3 border border-zinc-200 dark:border-zinc-700 shadow-sm">
            <div className="flex flex-col w-full">
              <label className="text-xs text-zinc-500 mb-1">Title</label>
              <input
                className="border rounded px-2 py-1 w-full bg-white"
                value={a.title}
                onChange={e => {
                  const updated = [...achievementsDraft];
                  updated[idx].title = e.target.value;
                  setAchievementsDraft(updated);
                }}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-xs text-zinc-500 mb-1">Description</label>
              <textarea
                className="border rounded px-2 py-1 w-full bg-white min-w-0 md:min-w-[400px] lg:min-w-[600px] min-h-[60px] resize-y"
                value={a.description}
                onChange={e => {
                  const updated = [...achievementsDraft];
                  updated[idx].description = e.target.value;
                  setAchievementsDraft(updated);
                }}
              />
            </div>
            <div className="flex flex-col w-full md:w-1/4">
              <label className="text-xs text-zinc-500 mb-1">Year</label>
              <input
                className="border rounded px-2 py-1 w-full bg-white"
                value={a.year}
                onChange={e => {
                  const updated = [...achievementsDraft];
                  updated[idx].year = e.target.value;
                  setAchievementsDraft(updated);
                }}
              />
            </div>
            <div className="flex gap-2 mt-2">
              <button
                className="text-red-500 hover:underline"
                onClick={() => {
                  setAchievementsDraft(achievementsDraft.filter((_: any, i: number) => i !== idx));
                }}
              >Delete</button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="text-blue-500 text-sm mt-4 self-start"
        onClick={() => {
          setAchievementsDraft([...achievementsDraft, { title: "", description: "", year: "", icon: "fas fa-trophy", color: "primary" }]);
        }}
      >+ Add Achievement</button>
      <div className="flex gap-2 mt-8">
        <button className="bg-primary text-white px-4 py-2 rounded font-semibold" onClick={() => handleSaveWithPopup(() => setAchievementsState(achievementsDraft))}>Save</button>
        <button className="bg-zinc-300 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-4 py-2 rounded" onClick={() => setAchievementsDraft(achievements)}>Discard</button>
      </div>
    </div>
  </div>
);

export default AdminAchievementsSection;
