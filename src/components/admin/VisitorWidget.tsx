import { useEffect, useState } from "react";

const VISITOR_KEY = "visitorCount";

export default function VisitorWidget() {
  const [visitors, setVisitors] = useState<number>(0);

  useEffect(() => {
    // Increment on load
    let count = Number(localStorage.getItem(VISITOR_KEY) || "0") + 1;
    localStorage.setItem(VISITOR_KEY, String(count));
    setVisitors(count);

    // Decrement on unload
    const handleUnload = () => {
      let count = Number(localStorage.getItem(VISITOR_KEY) || "1") - 1;
      localStorage.setItem(VISITOR_KEY, String(Math.max(count, 0)));
    };
    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, []);

  return (
    <div className="bg-white dark:bg-card rounded shadow p-6">
      <h2 className="text-xl font-semibold mb-2">Real-Time Visitors</h2>
      <div className="text-4xl font-bold text-primary">{visitors}</div>
    </div>
  );
}
