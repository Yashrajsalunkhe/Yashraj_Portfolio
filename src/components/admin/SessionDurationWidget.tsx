import { useEffect, useRef, useState } from "react";

export default function SessionDurationWidget() {
  const [durations, setDurations] = useState<number[]>([]);
  const [average, setAverage] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const startTime = useRef<number>(Date.now());

  useEffect(() => {
    // On unload, log session duration
    const handleUnload = () => {
      const end = Date.now();
      const duration = Math.round((end - startTime.current) / 1000); // seconds
      const prev = JSON.parse(localStorage.getItem("sessionDurations") || "[]");
      prev.push(duration);
      localStorage.setItem("sessionDurations", JSON.stringify(prev));
    };
    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, []);

  useEffect(() => {
    const prev = JSON.parse(localStorage.getItem("sessionDurations") || "[]");
    setDurations(prev);
    if (prev.length) {
      setAverage(Math.round(prev.reduce((a: number, b: number) => a + b, 0) / prev.length));
      setMin(Math.min(...prev));
      setMax(Math.max(...prev));
    }
  }, []);

  return (
    <div className="bg-white dark:bg-card rounded shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Session Duration</h2>
      <div className="flex flex-col gap-2">
        <div>Average: <span className="font-bold">{average}</span> sec</div>
        <div>Min: <span className="font-bold">{min}</span> sec</div>
        <div>Max: <span className="font-bold">{max}</span> sec</div>
        <div className="text-xs text-gray-500">(Tracked locally per browser)</div>
      </div>
    </div>
  );
}
