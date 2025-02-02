import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

export default defineConfig(({ mode }) => {
  return {
    server: {
      port: 3100
    },
    resolve: {
      alias: [
        {find: "src", replacement: path.posix.resolve("/", "/src")},
        {find: "state", replacement: path.posix.resolve("/", "/src/state")},
        {find: "components", replacement: path.posix.resolve("/", "/src/components")},
        {find: "types", replacement: path.posix.resolve("/", "/src/types")},
        {find: "data", replacement: path.posix.resolve("/", "/src/data")}
      ]
    },
    plugins: [
      react({
        include: "**/*.tsx"
      }),
    ],
    // https://github.com/vitejs/vite/issues/8644
    esbuild: {
      logOverride: { "this-is-undefined-in-esm": "silent" },
      target: "ESNEXT"
    }
  };
});


