import { squintLoader } from "./squintPlugin.js";

const result = await Bun.build({
  entrypoints: ["./index.js"],
  outdir: "./dist",
  sourcemap: "external",
  plugins: [
    squintLoader
  ],
  minify: true
});

