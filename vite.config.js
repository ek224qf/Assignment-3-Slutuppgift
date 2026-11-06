import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";

const root = import.meta.dirname;

// Bygg alla HTML-sidor i projektroten, inte bara index.html.
const pages = readdirSync(root)
  .filter((file) => file.endsWith(".html"))
  .map((file) => resolve(root, file));

export default defineConfig({
  build: {
    rollupOptions: {
      input: pages,
    },
  },
});
