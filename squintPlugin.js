import { plugin } from "bun";
import "squint-cljs"; // somehow I needed to pre-require this;

export const squintLoader = {
  name: "squint loader",
  async setup(build) {
    let { compileString } = await import("squint-cljs");
    const { readFileSync } = await import("fs");
    // when a .cljs file is imported...
    build.onLoad({ filter: /\.cljs$/ }, ({ path }) => {
      // read and compile it with squint
      const file = readFileSync(path, "utf8");
      const contents = compileString(file);
      // and return the compiled source code as "js"
      return {
        contents,
        loader: "js",
      };
    });
  },
};

plugin(squintLoader);
