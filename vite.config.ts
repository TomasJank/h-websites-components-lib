import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ts from "rollup-plugin-typescript2";

const exclude = ["tests", "packages/HBook", "docs"];
const tsconfig = resolve(__dirname, "tsconfig.json");

export default defineConfig({
  plugins: [
    vue(),
    {
      ...ts({
        check: true,
        tsconfig,
        tsconfigOverride: {
          compilerOptions: {
            sourceMap: false,
            declaration: true,
            declarationMap: false
          },
          exclude
        }
      }),
      enforce: "pre"
    }
  ],

  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/scss/main.scss";`
      }
    }
  },

  build: {
    lib: {
      entry: resolve(__dirname, "src/components/index.ts"),
      name: "HWebsitesComponents"
    },
    rollupOptions: {
      external: ["vue", "@popperjs/core"],
      output: {
        globals: {
          vue: "Vue",
          "@popperjs/core": "core"
        }
      }
    }
  }
});