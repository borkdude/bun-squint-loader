import { plugin } from "bun";

plugin({
  name: "squint loader",
  async setup(build) {
    const { compileString } = await import("squint-cljs");
    const { readFileSync } = await import("fs");

    // when a .cljs file is imported...
    build.onLoad({ filter: /\.cljs$/ }, ({ path }) => {
      console.log('path', path);
      // read and compile it with the Svelte compiler
      const file = readFileSync(path, "utf8");
      const contents = compileString(file);
      console.log(contents);
      // and return the compiled source code as "js"
      return {
        contents,
        loader: "js",
      };
    });
  },
});

