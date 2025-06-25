import React from "react";

interface AdminSkillsSectionProps {
  skillsDraft: any;
  setSkillsDraft: (draft: any) => void;
  setGlobalPreviewOpen: (open: boolean) => void;
  handleSaveWithPopup: (fn: () => void) => void;
  setSkillsState: (draft: any) => void;
  skills: any;
}

const AdminSkillsSection: React.FC<AdminSkillsSectionProps> = ({
  skillsDraft,
  setSkillsDraft,
  setGlobalPreviewOpen,
  handleSaveWithPopup,
  setSkillsState,
  skills
}) => (
  <div className="flex flex-col gap-8 mt-20 items-center w-full">
    <div className="w-full bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-xl flex flex-col min-h-[500px] border border-primary/10 relative">
      <button
        className="absolute top-6 right-6 bg-gradient-to-r from-primary to-secondary text-white px-5 py-2 rounded-xl font-semibold shadow hover:opacity-90 transition"
        onClick={() => setGlobalPreviewOpen(true)}
      >
        Live Preview
      </button>
      <h2 className="text-2xl font-bold mb-4 text-primary">Edit Skills</h2>
      <div className="space-y-8">
        {Object.entries(skillsDraft).map(([category, skillList]: any, catIdx, arr) => (
          <div key={category} className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-secondary text-lg">{category}</h3>
              <button
                className="text-blue-500 text-sm"
                onClick={() => {
                  setSkillsDraft({ ...skillsDraft, [category]: [...skillsDraft[category], { name: "", percentage: 0 }] });
                }}
              >+ Add Skill</button>
            </div>
            <div className="space-y-3">
              {skillList.map((skill: any, idx: number) => (
                <div key={idx} className="flex flex-wrap md:flex-nowrap items-center gap-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg px-4 py-3 border border-zinc-200 dark:border-zinc-700 shadow-sm">
                  <div className="flex flex-col w-40">
                    <label className="text-xs text-zinc-500 mb-1">Name</label>
                    <input
                      className="border rounded px-2 py-1 w-full bg-white"
                      value={skill.name}
                      onChange={e => {
                        const updated = [...skillsDraft[category]];
                        updated[idx].name = e.target.value;
                        setSkillsDraft({ ...skillsDraft, [category]: updated });
                      }}
                    />
                  </div>
                  <div className="flex flex-col w-32">
                    <label className="text-xs text-zinc-500 mb-1">Percentage</label>
                    <input
                      type="number"
                      className="border rounded px-2 py-1 w-full bg-white"
                      value={skill.percentage}
                      min={0}
                      max={100}
                      onChange={e => {
                        const updated = [...skillsDraft[category]];
                        updated[idx].percentage = Number(e.target.value);
                        setSkillsDraft({ ...skillsDraft, [category]: updated });
                      }}
                    />
                  </div>
                  <div className="flex gap-2 ml-auto mt-4 md:mt-0">
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => {
                        const updated = skillsDraft[category].filter((_: any, i: number) => i !== idx);
                        setSkillsDraft({ ...skillsDraft, [category]: updated });
                      }}
                    >Delete</button>
                  </div>
                </div>
              ))}
            </div>
            {catIdx < arr.length - 1 && (
              <div className="my-6 border-b border-dashed border-primary/20" />
            )}
          </div>
        ))}
        {/* Render Database section last if it exists */}
        {skillsDraft['Database'] && (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-secondary text-lg">Database</h3>
              <button
                className="text-blue-500 text-sm"
                onClick={() => {
                  setSkillsDraft({ ...skillsDraft, Database: [...skillsDraft['Database'], { name: '', percentage: 0 }] });
                }}
              >+ Add Skill</button>
            </div>
            <div className="space-y-3">
              {skillsDraft['Database'].map((skill: any, idx: number) => (
                <div key={idx} className="flex flex-wrap md:flex-nowrap items-center gap-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg px-4 py-3 border border-zinc-200 dark:border-zinc-700 shadow-sm">
                  <div className="flex flex-col w-40">
                    <label className="text-xs text-zinc-500 mb-1">Name</label>
                    <input
                      className="border rounded px-2 py-1 w-full bg-white"
                      value={skill.name}
                      onChange={e => {
                        const updated = [...skillsDraft['Database']];
                        updated[idx].name = e.target.value;
                        setSkillsDraft({ ...skillsDraft, Database: updated });
                      }}
                    />
                  </div>
                  <div className="flex flex-col w-32">
                    <label className="text-xs text-zinc-500 mb-1">Percentage</label>
                    <input
                      type="number"
                      className="border rounded px-2 py-1 w-full bg-white"
                      value={skill.percentage}
                      min={0}
                      max={100}
                      onChange={e => {
                        const updated = [...skillsDraft['Database']];
                        updated[idx].percentage = Number(e.target.value);
                        setSkillsDraft({ ...skillsDraft, Database: updated });
                      }}
                    />
                  </div>
                  <div className="flex gap-2 ml-auto mt-4 md:mt-0">
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => {
                        const updated = skillsDraft['Database'].filter((_: any, i: number) => i !== idx);
                        setSkillsDraft({ ...skillsDraft, Database: updated });
                      }}
                    >Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-2 mt-8">
        <button
          className="bg-primary text-white px-4 py-2 rounded font-semibold"
          onClick={() => handleSaveWithPopup(() => setSkillsState(skillsDraft))}
        >
          Save
        </button>
        <button
          className="bg-zinc-300 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-4 py-2 rounded"
          onClick={() => setSkillsDraft(skills)}
        >
          Discard
        </button>
      </div>
    </div>
  </div>
);

export default AdminSkillsSection;
