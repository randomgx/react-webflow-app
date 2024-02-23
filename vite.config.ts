import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, "./webflow.json"),
          dest: path.resolve(__dirname, "./dist"),
          rename: "__webflow.json",
        },
      ],
    }),
  ],
});
