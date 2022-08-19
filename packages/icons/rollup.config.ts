import typescript from "@rollup/plugin-typescript";
import svgr from "@svgr/rollup";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  external: ["react"],
  plugins: [typescript(), nodeResolve(), svgr()],
  input: "index.ts",
  output: [
    {
      file: "dist/cjs/bundle.js",
      format: "cjs",
    },
    {
      file: "dist/esm/bundle.js",
      format: "esm",
    },
  ],
};
