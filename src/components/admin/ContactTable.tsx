import { useEffect, useState } from "react";

interface TableRow {
  name: string;
  email: string;
  message: string;
  fileName?: string;
  date: string;
}

export default function ContactTable() {
  const [rows, setRows] = useState<TableRow[]>([]);
  const [search, setSearch] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("contactSubmissions") || "[]");
    setRows(data);
  }, []);

  const filtered = rows.filter(row => {
    const matchesSearch =
      row.name.toLowerCase().includes(search.toLowerCase()) ||
      row.email.toLowerCase().includes(search.toLowerCase()) ||
      row.message.toLowerCase().includes(search.toLowerCase());
    const date = new Date(row.date).getTime();
    const from = dateFrom ? new Date(dateFrom).getTime() : -Infinity;
    const to = dateTo ? new Date(dateTo).getTime() : Infinity;
    return matchesSearch && date >= from && date <= to;
  });

  return (
    <div className="bg-white dark:bg-card rounded shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Contact Form Submissions</h2>
      <div className="flex flex-col md:flex-row gap-2 mb-4">
        <input
          type="text"
          placeholder="Search name, email, message..."
          className="border px-2 py-1 rounded w-full md:w-1/3"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <input
          type="date"
          className="border px-2 py-1 rounded"
          value={dateFrom}
          onChange={e => setDateFrom(e.target.value)}
        />
        <input
          type="date"
          className="border px-2 py-1 rounded"
          value={dateTo}
          onChange={e => setDateTo(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Message</th>
              <th className="p-2 text-left">File</th>
              <th className="p-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan={5} className="text-center py-4 text-gray-500">No submissions found.</td></tr>
            ) : (
              filtered.map((row, idx) => (
                <tr key={idx} className="border-b">
                  <td className="p-2">{row.name}</td>
                  <td className="p-2">{row.email}</td>
                  <td className="p-2">{row.message}</td>
                  <td className="p-2">{row.fileName || "-"}</td>
                  <td className="p-2">{new Date(row.date).toLocaleString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
