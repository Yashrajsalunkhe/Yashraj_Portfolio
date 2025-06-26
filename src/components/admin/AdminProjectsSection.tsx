import React from "react";

interface AdminProjectsSectionProps {
  projectsDraft: any[];
  setProjectsDraft: (draft: any[]) => void;
  setGlobalPreviewOpen: (open: boolean) => void;
  handleSaveWithPopup: (fn: () => void) => void;
  setProjectsState: (draft: any[]) => void;
  projects: any[];
}

const AdminProjectsSection: React.FC<AdminProjectsSectionProps> = ({
  projectsDraft,
  setProjectsDraft,
  setGlobalPreviewOpen,
  handleSaveWithPopup,
  setProjectsState,
  projects
}) => (
  <div className="flex flex-col items-center justify-center w-full">
    <h1 className="text-3xl font-bold mb-6 mt-20 text-center">Project Management</h1>
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-full max-w-3xl bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-primary/20 p-8 flex flex-col gap-8 min-h-[500px] relative">
        <button
          className="absolute top-6 right-6 bg-gradient-to-r from-primary to-secondary text-white px-5 py-2 rounded-xl font-semibold shadow hover:opacity-90 transition"
          onClick={() => setGlobalPreviewOpen(true)}
        >
          Live Preview
        </button>
        <h2 className="text-2xl font-bold mb-4 text-primary">Edit Projects</h2>
        <div className="space-y-8">
          {projectsDraft.map((project: any, idx: number) => (
            <div key={idx} className="flex flex-col gap-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg px-4 py-3 border border-zinc-200 dark:border-zinc-700 shadow-sm">
              <div className="flex flex-col w-full">
                <label className="text-xs text-zinc-500 mb-1">Title</label>
                <input
                  className="border rounded px-2 py-1 w-full bg-white"
                  value={project.title}
                  onChange={e => {
                    const updated = [...projectsDraft];
                    updated[idx].title = e.target.value;
                    setProjectsDraft(updated);
                  }}
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-xs text-zinc-500 mb-1">Description</label>
                <textarea
                  className="border rounded px-2 py-1 w-full bg-white min-w-0 md:min-w-[400px] lg:min-w-[600px] min-h-[60px] resize-y"
                  value={project.description}
                  onChange={e => {
                    const updated = [...projectsDraft];
                    updated[idx].description = e.target.value;
                    setProjectsDraft(updated);
                  }}
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-xs text-zinc-500 mb-1">Image URL</label>
                <input
                  className="border rounded px-2 py-1 w-full bg-white"
                  value={project.image}
                  onChange={e => {
                    const updated = [...projectsDraft];
                    updated[idx].image = e.target.value;
                    setProjectsDraft(updated);
                  }}
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-xs text-zinc-500 mb-1">Project Link (GitHub)</label>
                <input
                  className="border rounded px-2 py-1 w-full bg-white"
                  value={project.links?.github || ''}
                  onChange={e => {
                    const updated = [...projectsDraft];
                    updated[idx].links = { ...updated[idx].links, github: e.target.value };
                    setProjectsDraft(updated);
                  }}
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-xs text-zinc-500 mb-1">Project Link (Demo, optional)</label>
                <input
                  className="border rounded px-2 py-1 w-full bg-white"
                  value={project.links?.demo || ''}
                  onChange={e => {
                    const updated = [...projectsDraft];
                    updated[idx].links = { ...updated[idx].links, demo: e.target.value };
                    setProjectsDraft(updated);
                  }}
                />
              </div>
              <div className="flex gap-2 mt-2">
                <button
                  className="text-red-500 hover:underline"
                  onClick={() => {
                    setProjectsDraft(projectsDraft.filter((_: any, i: number) => i !== idx));
                  }}
                >Delete</button>
              </div>
            </div>
          ))}
        </div>
        <button
          className="text-blue-500 text-sm mt-4 self-start"
          onClick={() => {
            setProjectsDraft([
              ...projectsDraft,
              { title: '', description: '', image: '', links: { github: '', demo: '' }, technologies: [] }
            ]);
          }}
        >+ Add Project</button>
        <div className="flex flex-col md:flex-row gap-4 mt-8 w-full justify-between items-center">
          <div className="flex gap-2">
            <button className="bg-primary text-white px-4 py-2 rounded font-semibold" onClick={() => handleSaveWithPopup(() => setProjectsState(projectsDraft))}>Save</button>
            <button className="bg-zinc-300 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-4 py-2 rounded" onClick={() => setProjectsDraft(projects)}>Discard</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AdminProjectsSection;
