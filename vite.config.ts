import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import legacy from "@vitejs/plugin-legacy";

function resolve(dir: string) {
  return path.join(__dirname, dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
  base: "",
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve("src"),
      },
    ],
  },
  // esbuild: {
  //   jsxFactory: "h",
  //   jsxFragment: "Fragment",
  // },
  clearScreen: false,
  server: {
    open: false,
    proxy: {},
  },
});
