import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  assetsInclude: ["**/*.md"],
  base: mode === "production" ? "https://tomsoerr.github.io/portfoliov2/" : "/",
}));
