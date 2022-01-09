// import { resolve } from "path";
// import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";
// import ts from "rollup-plugin-typescript2";
// import { createVuePlugin } from 'vite-plugin-vue2'

// const exclude = ["tests"];
// const tsconfig = resolve(__dirname, "tsconfig.json");

// export default defineConfig({
//   plugins: [
//     createVuePlugin(),
//     vue(),
//     // {
//     //   ...ts({
//     //     check: true,
//     //     tsconfig,
//     //     tsconfigOverride: {
//     //       compilerOptions: {
//     //         sourceMap: false,
//     //         declaration: true,
//     //         declarationMap: false
//     //       },
//     //       exclude
//     //     }
//     //   }),
//     //   enforce: "pre"
//     // }
//   ],

//   resolve: {
//     alias: {
//       "@": resolve(__dirname, "./src"),
//     }
//   },

//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `@import "src/assets/scss/global.scss"; @import "src/assets/scss/public";`
//       }
//     }
//   },

//   build: {
//     lib: {
//       entry: resolve(__dirname, "./src/index.ts"),
//       name: "HWebsitesComponents"
//     },
//   }
// });