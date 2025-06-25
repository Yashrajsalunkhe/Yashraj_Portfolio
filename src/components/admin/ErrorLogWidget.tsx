import { useEffect, useState } from "react";

export default function ErrorLogWidget() {
  const [logs, setLogs] = useState<{ message: string; source: string; lineno: number; colno: number; error: string; time: string }[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Load logs from localStorage
    const stored = JSON.parse(localStorage.getItem("errorLogs") || "[]");
    setLogs(stored);

    // Handler to capture errors
    const handler = (message: any, source: any, lineno: any, colno: any, error: any) => {
      const log = {
        message: String(message),
        source: String(source),
        lineno: Number(lineno),
        colno: Number(colno),
        error: error ? String(error.stack || error) : "",
        time: new Date().toISOString(),
      };
      const updated = [log, ...JSON.parse(localStorage.getItem("errorLogs") || "[]")];
      localStorage.setItem("errorLogs", JSON.stringify(updated));
      setLogs(updated);
    };
    window.addEventListener("error", (e) => {
      handler(e.message, e.filename, e.lineno, e.colno, e.error);
    });
    return () => {
      // No cleanup needed for error event
    };
  }, []);

  return (
    <div className="bg-white dark:bg-card rounded shadow p-6">
      <button
        className="font-semibold text-lg mb-2 flex items-center gap-2 text-primary focus:outline-none"
        onClick={() => setOpen((v) => !v)}
      >
        Error Logs
        <span className={`transform transition-transform ${open ? "rotate-90" : "rotate-0"}`}>▶</span>
        <span className="text-xs text-gray-500">({logs.length})</span>
      </button>
      {open && (
        <div className="max-h-64 overflow-y-auto mt-2">
          {logs.length === 0 ? (
            <div className="text-gray-500">No errors captured.</div>
          ) : (
            <ul className="space-y-2">
              {logs.map((log, idx) => (
                <li key={idx} className="border-b pb-2">
                  <div className="text-xs text-gray-700 dark:text-gray-300">{new Date(log.time).toLocaleString()}</div>
                  <div className="text-sm font-bold">{log.message}</div>
                  <div className="text-xs text-gray-500">{log.source}:{log.lineno}:{log.colno}</div>
                  {log.error && <pre className="text-xs text-red-500 whitespace-pre-wrap mt-1">{log.error}</pre>}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
