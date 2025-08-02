import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  builds: [{ src: "index.html", use: "@vercel/static" }],
  routes: [{ src: "/(.*)", dest: "/index.html" }],
});
