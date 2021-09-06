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
  commonjs({
    sourceMap: false,
    sourceMap: "inline",
  }),
  typescript({
    clean: false,
    check: false,
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
  sourcemap: false,
}

export default {
  input: "src/index.ts",
  output: {
    ...outputValues,
  },
  plugins,
  external,
};