# bun-squint-loader

This is a demo of a loader for [bun](https://bun.sh/) which invokes the [squint-cljs](https://github.com/squint-cljs/squint) compiler.

Run `bun index.js`:

``` javascript
import { the_number } from "./calc.cljs";
console.log('hello, (+ 1 2 3) => ', the_number );
```

``` shell
$ bun index.js
```

The output will be:

```
hello, (+ 1 2 3) => 6
```

The number `6` is calculated from a `.cljs` file:

```
$ cat calc.cljs
(def the-number (+ 1 2 3))
```

To build/bundle/minify, run `bun build.js`.
This will yield an `index.js` file in `dist` which is smaller than 100 bytes!
