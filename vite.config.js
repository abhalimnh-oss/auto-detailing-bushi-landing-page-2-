import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
//
// base: "./" makes every asset path (JS, CSS, images) RELATIVE to the
// deployed page instead of the domain root. This means the site works
// correctly no matter where it's hosted — the domain root, a GitHub Pages
// project subpath (e.g. username.github.io/repo-name/), a subfolder on a
// regular web host, etc. — with zero extra configuration.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
