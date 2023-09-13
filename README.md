# bun-squint-loader

This is a demo of a loader for [bun](https://bun.sh/) which invokes the [squint-cljs](https://github.com/squint-cljs/squint) compiler.

Run `bun index.js`. The output will be:

```
hello, (+ 1 2 3) => 6
```

The number `6` is calculated from a `.cljs` file:

```
$ cat calc.cljs
(def the-number (+ 1 2 3))
```
