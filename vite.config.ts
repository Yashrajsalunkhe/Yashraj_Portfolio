import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  define: {
    "process.env": {},
    global: "window",
  },
  optimizeDeps: {
    include: ["buffer"],
  },
  root: "./", // Use relative path for Vercel compatibility
  build: {
    outDir: "dist", // Output to client/dist for Vercel
    emptyOutDir: true,
    chunkSizeWarningLimit: 2000, // Increase limit to 2000kb (default is 500)
  },
});
