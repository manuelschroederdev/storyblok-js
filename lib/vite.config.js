import { defineConfig } from "vite";
import path from "path";

const libName = "storyblok-js";

export default defineConfig(() => {
  return {
    build: {
      lib: {
        entry: path.resolve(__dirname, "index.js"),
        name: "storyblok",
        fileName: (format) =>
          format === "es" ? `${libName}.mjs` : `${libName}.js`,
      },
      rollupOptions: {
        external: ["axios"],
      },
    },
  };
});
