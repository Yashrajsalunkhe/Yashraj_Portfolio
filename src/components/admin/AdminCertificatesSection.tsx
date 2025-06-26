import React from "react";

interface AdminCertificatesSectionProps {
  certificatesDraft: any[];
  setCertificatesDraft: (draft: any[]) => void;
  setGlobalPreviewOpen: (open: boolean) => void;
  handleSaveWithPopup: (fn: () => void) => void;
  setCertificatesState: (draft: any[]) => void;
  certificates: any[];
}

const AdminCertificatesSection: React.FC<AdminCertificatesSectionProps> = ({
  certificatesDraft,
  setCertificatesDraft,
  setGlobalPreviewOpen,
  handleSaveWithPopup,
  setCertificatesState,
  certificates
}) => (
  <div className="flex flex-col gap-8 mt-20 items-center w-full">
    <div className="w-full bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-xl flex flex-col min-h-[500px] border border-primary/10 relative">
      <button
        className="absolute top-6 right-6 bg-gradient-to-r from-primary to-secondary text-white px-5 py-2 rounded-xl font-semibold shadow hover:opacity-90 transition"
        onClick={() => setGlobalPreviewOpen(true)}
      >
        Live Preview
      </button>
      <h2 className="text-2xl font-bold mb-4 text-primary">Edit Certificates</h2>
      <div className="space-y-8">
        {certificatesDraft.map((cert: any, idx: number) => (
          <div key={idx} className="flex flex-col gap-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg px-4 py-3 border border-zinc-200 dark:border-zinc-700 shadow-sm">
            <div className="flex flex-col w-full">
              <label className="text-xs text-zinc-500 mb-1">Title</label>
              <input
                className="border rounded px-2 py-1 w-full bg-white"
                value={cert.title}
                onChange={e => {
                  const updated = [...certificatesDraft];
                  updated[idx].title = e.target.value;
                  setCertificatesDraft(updated);
                }}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-xs text-zinc-500 mb-1">Description</label>
              <textarea
                className="border rounded px-2 py-1 w-full bg-white min-w-0 md:min-w-[400px] lg:min-w-[600px] min-h-[60px] resize-y"
                value={cert.description}
                onChange={e => {
                  const updated = [...certificatesDraft];
                  updated[idx].description = e.target.value;
                  setCertificatesDraft(updated);
                }}
              />
            </div>
            <div className="flex flex-col w-full md:w-1/4">
              <label className="text-xs text-zinc-500 mb-1">Year</label>
              <input
                className="border rounded px-2 py-1 w-full bg-white"
                value={cert.year}
                onChange={e => {
                  const updated = [...certificatesDraft];
                  updated[idx].year = e.target.value;
                  setCertificatesDraft(updated);
                }}
              />
            </div>
            <div className="flex flex-col w-full md:w-1/4">
              <label className="text-xs text-zinc-500 mb-1">Icon (FontAwesome class)</label>
              <input
                className="border rounded px-2 py-1 w-full bg-white"
                value={cert.icon}
                onChange={e => {
                  const updated = [...certificatesDraft];
                  updated[idx].icon = e.target.value;
                  setCertificatesDraft(updated);
                }}
              />
            </div>
            <div className="flex flex-col w-full md:w-1/4">
              <label className="text-xs text-zinc-500 mb-1">Color (primary/secondary/accent)</label>
              <input
                className="border rounded px-2 py-1 w-full bg-white"
                value={cert.color}
                onChange={e => {
                  const updated = [...certificatesDraft];
                  updated[idx].color = e.target.value;
                  setCertificatesDraft(updated);
                }}
              />
            </div>
            <div className="flex flex-col w-full md:w-1/4">
              <label className="text-xs text-zinc-500 mb-1">Certificate Link (optional)</label>
              <input
                className="border rounded px-2 py-1 w-full bg-white"
                value={cert.link || ''}
                onChange={e => {
                  const updated = [...certificatesDraft];
                  updated[idx].link = e.target.value;
                  setCertificatesDraft(updated);
                }}
                placeholder="https://..."
              />
            </div>
            <div className="flex gap-2 mt-2">
              <button
                className="text-red-500 hover:underline"
                onClick={() => {
                  setCertificatesDraft(certificatesDraft.filter((_: any, i: number) => i !== idx));
                }}
              >Delete</button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="text-blue-500 text-sm mt-4 self-start"
        onClick={() => {
          setCertificatesDraft([
            ...certificatesDraft,
            { title: "", description: "", year: "", icon: "fas fa-certificate", color: "primary" }
          ]);
        }}
      >+ Add Certificate</button>
      <div className="flex gap-2 mt-8">
        <button className="bg-primary text-white px-4 py-2 rounded font-semibold" onClick={() => handleSaveWithPopup(() => setCertificatesState(certificatesDraft))}>Save</button>
        <button className="bg-zinc-300 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 px-4 py-2 rounded" onClick={() => setCertificatesDraft(certificates)}>Discard</button>
      </div>
    </div>
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      {certificates.map((cert, index) => (
        <div 
          key={index}
          className="glass-card rounded-xl p-6 flex flex-col items-center text-center"
        >
          <div className={`w-16 h-16 rounded-full bg-${cert.color}/20 flex items-center justify-center mb-4`}>
            <i className={`${cert.icon} text-${cert.color} text-2xl`}></i>
          </div>
          <h4 className="text-lg font-bold mb-2">{cert.title}</h4>
          <p className="text-gray-300 text-sm">{cert.description}</p>
          <span className="text-gray-400 text-xs mt-2">{cert.year}</span>
          {cert.link && (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition-colors duration-300 flex items-center mt-2 text-sm"
            >
              <span>View Certificate</span>
              <i className="fas fa-external-link-alt ml-2"></i>
            </a>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default AdminCertificatesSection;
