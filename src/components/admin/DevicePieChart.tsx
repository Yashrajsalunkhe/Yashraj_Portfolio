import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#6366f1", "#22d3ee", "#f59e42", "#10b981", "#f43f5e"];

function getDeviceType() {
  const ua = navigator.userAgent;
  if (/mobile/i.test(ua)) return "Mobile";
  if (/tablet|ipad|playbook|silk/i.test(ua)) return "Tablet";
  return "Desktop";
}

function getBrowser() {
  const ua = navigator.userAgent;
  if (ua.includes("Chrome") && !ua.includes("Edg")) return "Chrome";
  if (ua.includes("Firefox")) return "Firefox";
  if (ua.includes("Safari") && !ua.includes("Chrome")) return "Safari";
  if (ua.includes("Edg")) return "Edge";
  if (ua.includes("Opera") || ua.includes("OPR")) return "Opera";
  return "Other";
}

export default function DevicePieChart() {
  const [deviceStats, setDeviceStats] = useState<{ name: string; value: number }[]>([]);
  const [browserStats, setBrowserStats] = useState<{ name: string; value: number }[]>([]);

  useEffect(() => {
    // Device
    const deviceType = getDeviceType();
    const deviceData = JSON.parse(localStorage.getItem("deviceStats") || "{}") as Record<string, number>;
    deviceData[deviceType] = (deviceData[deviceType] || 0) + 1;
    localStorage.setItem("deviceStats", JSON.stringify(deviceData));
    setDeviceStats(Object.entries(deviceData).map(([name, value]) => ({ name, value })));

    // Browser
    const browser = getBrowser();
    const browserData = JSON.parse(localStorage.getItem("browserStats") || "{}") as Record<string, number>;
    browserData[browser] = (browserData[browser] || 0) + 1;
    localStorage.setItem("browserStats", JSON.stringify(browserData));
    setBrowserStats(Object.entries(browserData).map(([name, value]) => ({ name, value })));
  }, []);

  return (
    <div className="bg-white dark:bg-card rounded shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Device & Browser Info</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center min-w-0 min-h-0">
        <div className="w-full md:w-1/2 h-64">
          <h3 className="font-semibold mb-2 text-center">Device Type</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={deviceStats} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} label>
                {deviceStats.map((entry, idx) => (
                  <Cell key={entry.name} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="w-full md:w-1/2 h-64">
          <h3 className="font-semibold mb-2 text-center">Browser</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={browserStats} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} label>
                {browserStats.map((entry, idx) => (
                  <Cell key={entry.name} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
