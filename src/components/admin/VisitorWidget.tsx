import { useEffect, useState } from "react";

const VISITOR_KEY = "visitorCount";

export default function VisitorWidget() {
  const [visitors, setVisitors] = useState<number>(0);

  useEffect(() => {
    // Only read the value, do not increment/decrement
    const update = () => setVisitors(Number(localStorage.getItem(VISITOR_KEY) || "0"));
    update();
    window.addEventListener("storage", update);
    return () => window.removeEventListener("storage", update);
  }, []);

  return (
    <div className="bg-white dark:bg-card rounded shadow p-6">
      <h2 className="text-xl font-semibold mb-2">Real-Time Visitors</h2>
      <div className="text-4xl font-bold text-primary">{visitors}</div>
    </div>
  );
}
