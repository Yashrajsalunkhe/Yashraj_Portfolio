import React from "react";

interface AdminRolesSectionProps {
  rolesDraft: any[];
  setRolesDraft: (draft: any[]) => void;
  setGlobalPreviewOpen: (open: boolean) => void;
  handleSaveWithPopup: (fn: () => void) => void;
  setRolesState: (draft: any[]) => void;
  roles: any[];
}

const AdminRolesSection: React.FC<AdminRolesSectionProps> = ({
  rolesDraft,
  setRolesDraft,
  setGlobalPreviewOpen,
  handleSaveWithPopup,
  setRolesState,
  roles
}) => (
  <div className="flex flex-col items-center justify-center w-full">
    <h1 className="text-3xl font-bold mb-6 mt-20 text-center">Role Management</h1>
    <div className="w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-primary/20 p-8 flex flex-col gap-8 min-h-[400px] relative">
      <button
        className="absolute top-6 right-6 bg-gradient-to-r from-primary to-secondary text-white px-5 py-2 rounded-xl font-semibold shadow hover:opacity-90 transition"
        onClick={() => setGlobalPreviewOpen(true)}
      >
        Live Preview
      </button>
      <h2 className="text-2xl font-bold mb-4 text-primary">Edit Typing Roles</h2>
      <div className="space-y-6">
        {rolesDraft.map((role: any, idx: number) => (
          <div key={idx} className="flex flex-col gap-2 bg-zinc-50 dark:bg-zinc-800 rounded-lg px-4 py-3 border border-zinc-200 dark:border-zinc-700 shadow-sm">
            <label className="text-xs text-zinc-500 mb-1">Role Name</label>
            <input
              className="border rounded px-2 py-1 w-full bg-white"
              value={role}
              onChange={e => {
                const updated = [...rolesDraft];
                updated[idx] = e.target.value;
                setRolesDraft(updated);
              }}
            />
            <div className="flex gap-2 mt-2">
              <button
                className="text-red-500 hover:underline"
                onClick={() => {
                  setRolesDraft(rolesDraft.filter((_: any, i: number) => i !== idx));
                }}
              >Delete</button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="text-blue-500 text-sm mt-4 self-start"
        onClick={() => {
          setRolesDraft([...rolesDraft, ""]);
        }}
      >+ Add Role</button>
      <div className="flex gap-2 mt-8">
        <button className="bg-primary text-white px-4 py-2 rounded font-semibold" onClick={() => handleSaveWithPopup(() => setRolesState(rolesDraft))}>Save</button>
        <button className="bg-zinc-300 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-4 py-2 rounded" onClick={() => setRolesDraft(roles)}>Discard</button>
      </div>
    </div>
  </div>
);

export default AdminRolesSection;

// All section components for the admin dashboard have been created and modularized.
// You can now import and use AdminRolesSection in your AdminDashboard.tsx like this:
// import AdminRolesSection from "../components/admin/AdminRolesSection";
