import { useEffect, useState } from "react";

export default function ResumeDownloadWidget() {
  const [count, setCount] = useState(0);
  const [lastDownload, setLastDownload] = useState<string | null>(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("resumeDownloads") || "{\"count\":0,\"last\":null}");
    setCount(data.count || 0);
    setLastDownload(data.last || null);
  }, []);

  return (
    <div className="bg-white dark:bg-card rounded shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Resume Downloads</h2>
      <div className="flex flex-col gap-2">
        <div>Total Downloads: <span className="font-bold">{count}</span></div>
        <div>Last Download: <span className="font-bold">{lastDownload ? new Date(lastDownload).toLocaleString() : "Never"}</span></div>
        <div className="text-xs text-gray-500">(Tracked locally per browser)</div>
      </div>
    </div>
  );
}
