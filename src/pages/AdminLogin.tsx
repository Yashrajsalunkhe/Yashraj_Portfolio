import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

const AdminLogin: React.FC = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Use password from .env
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("admin-auth", "true");
      navigate("/admin", { replace: true });
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center py-12 px-4">
        <form onSubmit={handleSubmit} className="bg-white dark:bg-card p-8 rounded shadow-md w-full max-w-sm mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter admin password"
              className="w-full px-4 py-2 border rounded dark:bg-background dark:text-white pr-12"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary text-sm px-2 py-1"
              onClick={() => setShowPassword(v => !v)}
              tabIndex={-1}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {error && <div className="text-red-500 mb-2 text-sm">{error}</div>}
          <button type="submit" className="w-full bg-primary text-white py-2 rounded hover:bg-secondary transition">Login</button>
        </form>
      </main>
    </div>
  );
};

export default AdminLogin;
