import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import { dts } from "rollup-plugin-dts";
import autoprefixer from "autoprefixer";

import tailwind from "tailwindcss";
import tailwindConfig from "./tailwind.config.js";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    external: ["react", "react-dom"],
    plugins: [
      nodeResolve({
        ignoreGlobal: false,
        include: ["node_modules/**"],
        skip: ["react", "react-dom"],
      }),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      postcss({
        extract: true,
        minimize: false,
        plugins: [autoprefixer(), tailwind(tailwindConfig)],
      }),
      terser(),
    ],
  },
  {
    input: "dist/esm/index.css",
    output: [{ file: "dist/index.css", format: "es" }],
    plugins: [
      postcss({
        extract: true,
        minimize: true,
      }),
    ],
  },
  {
    input: "tailwind.config.js",
    output: [{ file: "dist/tailwind.config.js" }],
    plugins: [terser()],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/],
  },
];
