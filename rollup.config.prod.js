import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import del from "rollup-plugin-delete";

const packageJson = require("./package.json");

const plugins = [
  peerDepsExternal(),
  del({ targets: ["dist/*"] }),
  resolve(),
  terser(),
  commonjs({
    sourceMap: true,
    sourceMap: "inline",
  }),
  typescript({
    clean: true,
    check: true,
    useTsconfigDeclarationDir: true,
    rollupCommonJSResolveHack: true,
  }),
];

/* External dependencies */
const external = [
  'react',
  'react-dom',
  'styled-components'
];

/* Output values */
const outputValues = {
  file: packageJson.main,
  format: "cjs",
  sourcemap: true,
}

export default {
  input: "src/index.ts",
  output: {
    ...outputValues,
  },
  plugins,
  external,
};