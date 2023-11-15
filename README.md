# Template metaprogramming with TypeScript

This is the playground for a [blog post](https://blog.whilenot.dev/posts/template-metaprogramming-with-typescript/) about [template metaprogramming](https://en.wikipedia.org/wiki/Template_metaprogramming) with TypeScript.

I take the following data as input via [JSON](./data/input.json):

```json
[
  {
    "name": "A",
    "type": "boolean"
  },
  {
    "name": "B",
    "type": "number"
  },
  {
    "name": "C",
    "type": "string"
  }
]
```

...and generate the following TypeScript file in three different ways:

```typescript
interface SomeInterfaceA {
  discriminator: "A";
  type: boolean;
}

interface SomeInterfaceB {
  discriminator: "B";
  type: number;
}

interface SomeInterfaceC {
  discriminator: "C";
  type: string;
}

export type SomeInterface = SomeInterfaceA | SomeInterfaceB | SomeInterfaceC;
```

The methods to output a TypeScript file include source code generation via:

1. [Template literals](./src/1_template_literals.js)
1. [A template engine](./src/2_template_engine.js)
1. [The TypeScript compiler API](./src/3_typescript_ast.js)

## Prerequisites

Make sure you have the following tools installed and available in the `$PATH` environment variable:

- [node](https://nodejs.org/dist/) - any recent version (`>=14.17`) should do, or you can find the exact version in the [.tool-versions](./.tool-versions) file for [asdf-vm](https://asdf-vm.com/guide/getting-started.html)
- [npm](https://www.npmjs.com/package/npm) - that one usually ships with `node`

## Setup

Install all dependencies with:

```bash
$ npm ci
```

## Usage

Either build the project and inspect the output files in [./dist](./dist):

```bash
$ npm run build
```

...or execute the `generate:*`-scripts one-by-one to inspect their output in the console:

```bash
$ npm run -s generate:1
```

```bash
$ npm run -s generate:2
```

```bash
$ npm run -s generate:3
```

Have fun!
